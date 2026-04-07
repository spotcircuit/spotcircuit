#!/usr/bin/env python3
"""
Simple API server for AI audit execution
Run with: python3 audit_api_server.py
"""

from flask import Flask, request, jsonify
import json
import subprocess
import tempfile
import os
import sys

app = Flask(__name__)

# Use the correct Python path
PYTHON_PATH = "/home/info/scripts/venv/bin/python3"

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({"status": "healthy", "service": "AI Audit API"})

@app.route('/audit', methods=['POST'])
def run_audit():
    """Execute AI audit with provided data"""
    try:
        # Get JSON data from request
        data = request.get_json()
        
        if not data:
            return jsonify({"success": False, "error": "No data provided"}), 400
        
        # Extract audit parameters
        audit_data = {
            "businessName": data.get("businessName", ""),
            "location": data.get("location", ""),
            "industry": data.get("industry", "Medical Spas"),
            "email": data.get("email", ""),
            "contactName": data.get("contactName", ""),
            "auditId": data.get("auditId", f"api-{os.urandom(8).hex()}")
        }
        
        # Read the Python audit code
        script_dir = os.path.dirname(os.path.abspath(__file__))
        audit_code_path = os.path.join(script_dir, "n8n-python-audit-code.py")
        
        if os.path.exists(audit_code_path):
            with open(audit_code_path, 'r') as f:
                python_code = f.read()
        else:
            # Fallback: use the code from ai_readiness_final.py or embed it
            python_code = """
# Simplified audit code for testing
async def run_audit():
    return {
        "success": True,
        "businessName": input_data.get("businessName"),
        "location": input_data.get("location"),
        "message": "Audit code file not found, using test response"
    }

result = asyncio.run(run_audit())
print(json.dumps(result))
"""
        
        # Prepare the payload for universal executor
        executor_payload = {
            "code": python_code,
            "data": audit_data
        }
        
        # Execute using universal_python_executor.py
        universal_executor_path = os.path.join(script_dir, "universal_python_executor.py")
        
        # Run the executor
        result = subprocess.run(
            [PYTHON_PATH, universal_executor_path],
            input=json.dumps(executor_payload),
            capture_output=True,
            text=True,
            timeout=300
        )
        
        if result.returncode == 0:
            # Parse the output
            output = json.loads(result.stdout)
            return jsonify(output)
        else:
            return jsonify({
                "success": False,
                "error": result.stderr or "Execution failed"
            }), 500
            
    except subprocess.TimeoutExpired:
        return jsonify({
            "success": False,
            "error": "Audit timed out after 5 minutes"
        }), 504
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

@app.route('/test', methods=['POST'])
def test_endpoint():
    """Simple test endpoint"""
    data = request.get_json()
    return jsonify({
        "success": True,
        "received": data,
        "message": "Test successful"
    })

if __name__ == '__main__':
    # Run on all interfaces so it's accessible
    app.run(host='0.0.0.0', port=5000, debug=True)