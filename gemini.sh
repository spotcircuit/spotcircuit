#!/bin/bash

# Gemini API Bash Script
# Usage: ./gemini.sh "Your prompt here"
# Make sure you have curl installed and GOOGLE_GEMINI_API_KEY set in your environment

# Check for API key
if [ -z "$GOOGLE_GEMINI_API_KEY" ]; then
    # Try to load from .env file if it exists
    if [ -f .env ]; then
        export $(grep -v '^#' .env | xargs)
    fi
    
    # Check again after attempting to load from .env
    if [ -z "$GOOGLE_GEMINI_API_KEY" ]; then
        echo "Error: GOOGLE_GEMINI_API_KEY is not set"
        echo "Please set it in your environment or .env file"
        exit 1
    fi
fi

# Check for prompt argument
if [ $# -eq 0 ]; then
    echo "Error: No prompt provided"
    echo "Usage: ./gemini.sh \"Your prompt here\""
    exit 1
fi

# Configuration
API_KEY=$GOOGLE_GEMINI_API_KEY
MODEL=${GEMINI_MODEL:-"gemini-2.5-pro-exp-03-25"}
TEMPERATURE=${GEMINI_TEMP:-1.0}
MAX_TOKENS=${GEMINI_MAX_TOKENS:-8192}

# Combine all arguments as the prompt
PROMPT="$*"

# Create JSON payload
JSON_PAYLOAD=$(cat <<EOF
{
  "contents": [
    {
      "parts": [
        {
          "text": "$PROMPT"
        }
      ]
    }
  ],
  "generationConfig": {
    "temperature": $TEMPERATURE,
    "maxOutputTokens": $MAX_TOKENS,
    "topP": 0.95,
    "topK": 64
  }
}
EOF
)

# Print header
echo -e "\n🤖 Sending prompt to $MODEL...\n"
echo -e "Prompt: \"$PROMPT\"\n"
echo -e "--------------------RESPONSE--------------------\n"

# Make API request and format output
curl -s "https://generativelanguage.googleapis.com/v1/models/$MODEL:generateContent?key=$API_KEY" \
  -H "Content-Type: application/json" \
  -d "$JSON_PAYLOAD" | \
  python3 -c "
import json, sys
try:
    data = json.load(sys.stdin)
    if 'candidates' in data and len(data['candidates']) > 0:
        for part in data['candidates'][0]['content']['parts']:
            if 'text' in part:
                print(part['text'])
    elif 'error' in data:
        print(f\"Error: {data['error']['message']}\")
    else:
        print(\"Unexpected response format\")
        print(json.dumps(data, indent=2))
except Exception as e:
    print(f\"Error parsing response: {e}\")
    print(sys.stdin.read())
"

echo -e "\n--------------------END RESPONSE--------------------"
