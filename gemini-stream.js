#!/usr/bin/env node

/**
 * Gemini CLI with Streaming - Command line interface for Google's Gemini AI
 * This version uses streaming responses for better reliability
 * 
 * Usage:
 *   node gemini-stream.js "Your prompt here"
 *   
 * Options (via environment variables):
 *   GOOGLE_GEMINI_API_KEY: Your Gemini API key
 *   GEMINI_MODEL: Model to use (default: gemini-2.5-pro-exp-03-25)
 *   GEMINI_TEMP: Temperature (default: 1.0)
 */

const { GoogleGenerativeAI } = require("@google/generative-ai");
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
  console.log("Usage: node gemini-stream.js \"Your prompt here\"");
  process.exit(1);
}

// Configuration options
const model = process.env.GEMINI_MODEL || "gemini-2.5-pro-exp-03-25";
const temperature = parseFloat(process.env.GEMINI_TEMP || "1.0");

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
    console.log(`Prompt: "${prompt}"\n`);
    console.log("-------------------RESPONSE-------------------\n");
    
    // Generate content with streaming for better output handling
    const streamingResult = await genModel.generateContentStream(prompt);
    
    // Process the stream chunks
    for await (const chunk of streamingResult.stream) {
      const chunkText = chunk.text();
      process.stdout.write(chunkText);
    }
    
    // Add a final newline
    console.log("\n\n-------------------END RESPONSE-------------------");
  } catch (error) {
    console.error("\n❌ Error:", error.message);
    if (error.stack) {
      console.error("\nStack trace:", error.stack);
    }
    process.exit(1);
  }
}

main();
