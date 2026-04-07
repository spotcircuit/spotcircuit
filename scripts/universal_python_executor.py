#!/usr/bin/env python3
"""
Universal Python Executor for n8n
Accepts Python code as input and executes it safely
"""

import sys
import json
import traceback
import subprocess
import os
import tempfile

def execute_python_code(code_string, input_data=None):
    """
    Execute Python code string with optional input data
    Returns the result as JSON
    """
    # Create a temporary file to store the code
    with tempfile.NamedTemporaryFile(mode='w', suffix='.py', delete=False) as tmp_file:
        # Add imports that might be needed
        tmp_file.write("""
import asyncio
import json
import re
from datetime import datetime
from playwright.async_api import async_playwright

# Make input_data available to the script
input_data = {}
""".format(json.dumps(input_data or {})))
        
        # Write the actual code
        tmp_file.write("\n")
        tmp_file.write(code_string)
        tmp_file_path = tmp_file.name
    
    try:
        # Execute the temporary Python file
        # Use the same virtual environment
        result = subprocess.run(
            [sys.executable, tmp_file_path],
            capture_output=True,
            text=True,
            timeout=300  # 5 minute timeout
        )
        
        if result.returncode == 0:
            # Try to parse the output as JSON
            try:
                output = json.loads(result.stdout)
                return {
                    "success": True,
                    "output": output
                }
            except json.JSONDecodeError:
                # If not JSON, return as text
                return {
                    "success": True,
                    "output": result.stdout,
                    "type": "text"
                }
        else:
            return {
                "success": False,
                "error": result.stderr or "Unknown error",
                "stdout": result.stdout
            }
            
    except subprocess.TimeoutExpired:
        return {
            "success": False,
            "error": "Script execution timed out after 5 minutes"
        }
    except Exception as e:
        return {
            "success": False,
            "error": str(e),
            "traceback": traceback.format_exc()
        }
    finally:
        # Clean up temporary file
        if os.path.exists(tmp_file_path):
            os.unlink(tmp_file_path)

def main():
    """Main entry point for n8n"""
    try:
        # Read JSON from stdin
        input_str = sys.stdin.read()
        if not input_str:
            # Try command line argument
            if len(sys.argv) > 1:
                input_str = sys.argv[1]
            else:
                print(json.dumps({
                    "success": False,
                    "error": "No input provided"
                }))
                sys.exit(1)
        
        # Parse input
        input_json = json.loads(input_str)
        
        # Get Python code and optional data
        python_code = input_json.get('code', '')
        input_data = input_json.get('data', {})
        
        if not python_code:
            print(json.dumps({
                "success": False,
                "error": "No Python code provided"
            }))
            sys.exit(1)
        
        # Execute the code
        result = execute_python_code(python_code, input_data)
        
        # Output result as JSON
        print(json.dumps(result, indent=2))
        
    except json.JSONDecodeError as e:
        print(json.dumps({
            "success": False,
            "error": f"Invalid JSON input: {str(e)}"
        }))
        sys.exit(1)
    except Exception as e:
        print(json.dumps({
            "success": False,
            "error": str(e),
            "traceback": traceback.format_exc()
        }))
        sys.exit(1)

if __name__ == "__main__":
    main()