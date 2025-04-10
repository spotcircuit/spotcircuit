#!/usr/bin/env node

/**
 * Gemini Chat Session - Command line chat interface for Google's Gemini AI
 * Based on the Google AI Studio code template
 * 
 * Usage:
 *   node gemini-chat.js "Your message here"
 */

const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("node:fs");
require('dotenv').config();

// Get API key from environment or .env file
const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
if (!apiKey) {
  console.error("Error: GOOGLE_GEMINI_API_KEY environment variable is required");
  process.exit(1);
}

// Get the message from command line arguments
const message = process.argv.slice(2).join(" ");
if (!message) {
  console.error("Error: Please provide a message");
  console.log("Usage: node gemini-chat.js \"Your message here\"");
  process.exit(1);
}

// Gemini models that are publicly available (in case experimental doesn't work)
const models = {
  default: "gemini-1.5-pro", // Current standard model
  pro: "gemini-1.5-pro",
  flash: "gemini-1.5-flash",
  experimental: "gemini-2.5-pro-exp-03-25" // Experimental - may not be available
};

// Try to use the experimental model first, but fall back to standard if it fails
const modelToUse = process.env.GEMINI_MODEL || models.experimental;

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192, // Reduced from 65536 for standard API limits
  responseMimeType: "text/plain",
};

async function run() {
  try {
    // Initialize the Gemini API
    const genAI = new GoogleGenerativeAI(apiKey);
    
    console.log(`\n🤖 Trying to use model: ${modelToUse}...\n`);
    
    // Create the model instance
    const model = genAI.getGenerativeModel({
      model: modelToUse,
      generationConfig,
    });
    
    // Start a chat session
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
    
    console.log(`Message: "${message}"\n`);
    console.log("-------------------RESPONSE-------------------\n");
    
    // Send the message
    const result = await chatSession.sendMessage(message);
    console.log(result.response.text());
    
    console.log("\n-------------------END RESPONSE-------------------");
  } catch (error) {
    console.error("\n❌ Error:", error.message);
    
    // If experimental model failed, try the standard model
    if (modelToUse === models.experimental && error.message.includes("not found")) {
      console.log(`\n🔄 Experimental model not available. Trying standard model ${models.default}...\n`);
      
      // Set environment variable for the retry
      process.env.GEMINI_MODEL = models.default;
      
      // Run again with standard model
      await run();
    }
  }
}

run();
