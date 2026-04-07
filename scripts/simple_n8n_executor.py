#!/usr/bin/env python3
"""
Simple executor that reads JSON from a file
"""
import json
import sys
import subprocess
import os

# Read the JSON file path from command line
if len(sys.argv) < 2:
    print(json.dumps({"success": False, "error": "No file path provided"}))
    sys.exit(1)

json_file_path = sys.argv[1]

try:
    # Read the JSON file
    with open(json_file_path, 'r') as f:
        data = json.load(f)
    
    # Get the Python code
    python_code = data.get('code', '')
    input_data = data.get('data', {})
    
    if not python_code:
        print(json.dumps({"success": False, "error": "No code provided"}))
        sys.exit(1)
    
    # Create a temporary Python file
    import tempfile
    with tempfile.NamedTemporaryFile(mode='w', suffix='.py', delete=False) as tmp:
        # Write the code with input_data available
        tmp.write(f"""
import asyncio
import json
import re
from datetime import datetime
from playwright.async_api import async_playwright

# Input data from n8n
input_data = {json.dumps(input_data)}

# User's code below
{python_code}
""")
        tmp_path = tmp.name
    
    # Execute the code
    result = subprocess.run(
        [sys.executable, tmp_path],
        capture_output=True,
        text=True,
        timeout=300
    )
    
    # Clean up
    os.unlink(tmp_path)
    
    if result.returncode == 0:
        try:
            output = json.loads(result.stdout)
            print(json.dumps({"success": True, "output": output}))
        except:
            print(json.dumps({"success": True, "output": result.stdout}))
    else:
        print(json.dumps({"success": False, "error": result.stderr}))
        
except Exception as e:
    print(json.dumps({"success": False, "error": str(e)}))