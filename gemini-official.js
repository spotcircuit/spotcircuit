#!/usr/bin/env node

/**
 * Gemini API - Using the official Google implementation
 * Based on: https://ai.google.dev/gemini-api/docs/downloads
 * 
 * Usage:
 *   node gemini-official.js "Your prompt here"
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
  console.log("Usage: node gemini-official.js \"Your prompt here\"");
  process.exit(1);
}

// Create Gemini API client
const genAI = new GoogleGenerativeAI(apiKey);

// List of models to attempt in order
const modelOptions = [
  "gemini-2.5-pro-exp-03-25", // Try experimental first
  "gemini-1.5-pro",          // Fall back to these if experimental isn't available
  "gemini-1.5-flash",
  "gemini-pro"
];

// Call Gemini API for text generation
async function generateText(model, prompt) {
  try {
    console.log(`\n🤖 Attempting to use model: ${model}`);
    
    // Configure the model
    const genModel = genAI.getGenerativeModel({
      model: model,
      generationConfig: {
        temperature: 1.0,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
      }
    });
    
    // Generate content
    const result = await genModel.generateContent(prompt);
    return {
      success: true,
      text: result.response.text()
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

// Try each model in turn until one works
async function tryModels() {
  console.log(`\nPrompt: "${prompt}"\n`);
  
  for (const model of modelOptions) {
    const result = await generateText(model, prompt);
    
    if (result.success) {
      console.log(`✅ Successfully used model: ${model}\n`);
      console.log("-------------------RESPONSE-------------------\n");
      console.log(result.text);
      console.log("\n-------------------END RESPONSE-------------------");
      return;
    } else {
      console.log(`❌ Failed with model: ${model}`);
      console.log(`   Error: ${result.error}`);
      
      if (modelOptions.indexOf(model) < modelOptions.length - 1) {
        console.log("   Trying next model...");
      }
    }
  }
  
  console.error("\n❌ All models failed. Please check your API key and network connection.");
}

// Run the main function
tryModels();
