#!/usr/bin/env node

/**
 * Gemini CLI with File Output - Command line interface for Google's Gemini AI
 * This version writes outputs to a file for reliability
 * 
 * Usage:
 *   node gemini-file.js "Your prompt here"
 *   
 * Options (via environment variables):
 *   GOOGLE_GEMINI_API_KEY: Your Gemini API key
 *   GEMINI_MODEL: Model to use (default: gemini-2.5-pro-exp-03-25)
 *   GEMINI_TEMP: Temperature (default: 1.0)
 */

const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Get API key from environment or .env file
const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
if (!apiKey) {
  console.error("Error: GOOGLE_GEMINI_API_KEY environment variable is required");
  process.exit(1);
}

// Get the prompt from command line arguments
const prompt = process.argv.slice(2).join(" ");
if (!prompt) {
  console.error("Error: Please provide a prompt");
  console.log("Usage: node gemini-file.js \"Your prompt here\"");
  process.exit(1);
}

// Configuration options
const model = process.env.GEMINI_MODEL || "gemini-2.5-pro-exp-03-25";
const temperature = parseFloat(process.env.GEMINI_TEMP || "1.0");

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, 'gemini-responses');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Generate filename based on date and truncated prompt
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const promptForFilename = prompt.slice(0, 30).replace(/[^a-zA-Z0-9]/g, '_');
const outputFile = path.join(outputDir, `gemini-${timestamp}-${promptForFilename}.txt`);

async function main() {
  try {
    // Initialize the Gemini API
    const genAI = new GoogleGenerativeAI(apiKey);
    const genModel = genAI.getGenerativeModel({
      model,
      generationConfig: {
        temperature,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
      }
    });
    
    console.log(`\n🤖 Sending prompt to ${model}...\n`);
    
    // Generate content
    const result = await genModel.generateContent(prompt);
    const text = result.response.text();
    
    // Write to file
    fs.writeFileSync(outputFile, `PROMPT:\n${prompt}\n\nRESPONSE:\n${text}`);
    
    console.log(`Response saved to: ${outputFile}`);
    console.log(`\nPreview of response (first 300 characters):`);
    console.log(`\n${text.slice(0, 300)}${text.length > 300 ? '...' : ''}`);
    
  } catch (error) {
    console.error("\n❌ Error:", error.message);
    process.exit(1);
  }
}

main();
