#!/usr/bin/env node

/**
 * Gemini API Command Line Tool - Using the official Node.js SDK
 * Documentation: https://ai.google.dev/gemini-api/docs/sdks
 * 
 * Usage:
 *   node gemini-cmd.js [--list] [--exp] "Your prompt here"
 *   
 * Options:
 *   --list    List available models instead of generating content
 *   --exp     Try experimental models first (may not be publicly available)
 *   
 * Environment variables:
 *   GOOGLE_GEMINI_API_KEY - Your API key (required)
 *   GEMINI_MODEL - Model to use (default: gemini-1.0-pro)
 *   GEMINI_API_VERSION - API version to use (default: v1)
 *   USE_EXPERIMENTAL - Try experimental models first (alternative to --exp flag)
 */

const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

// Get API key 
const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

// Check for flags
const listModels = process.argv.includes("--list");
const useExperimental = process.argv.includes("--exp") || process.env.USE_EXPERIMENTAL === "true";

// Get prompt (filter out the flag arguments if present)
const prompt = process.argv
  .slice(2)
  .filter(arg => !arg.startsWith("--"))
  .join(" ");

// Validate inputs
if (!apiKey) {
  console.error("Error: GOOGLE_GEMINI_API_KEY is required");
  process.exit(1);
}

if (!listModels && !prompt) {
  console.error("Error: Please provide a prompt or use --list to see available models");
  console.error("Usage: node gemini-cmd.js [--list] [--exp] \"Your prompt here\"");
  process.exit(1);
}

// Available models based on access level
const models = {
  // Publicly available stable models
  stable: [
    "gemini-1.0-pro",
    "gemini-1.0-pro-vision",
    "gemini-1.5-pro",
    "gemini-1.5-flash"
  ],
  // Experimental / preview models (may require special access)
  experimental: [
    "gemini-2.5-pro-exp-03-25"  // Model from Google AI Studio
  ]
};

// All known models
const allModels = [...models.experimental, ...models.stable];

// Determine which model to use
const defaultModel = useExperimental ? models.experimental[0] : models.stable[0];
const model = process.env.GEMINI_MODEL || defaultModel;

/**
 * Try to generate content with multiple models if needed
 */
async function tryGenerateContent(modelList = [], currentIndex = 0) {
  if (currentIndex >= modelList.length) {
    console.error("\n❌ All models failed. Please check your API key and ensure you have access to these models.");
    return;
  }
  
  const currentModel = modelList[currentIndex];
  
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const genModel = genAI.getGenerativeModel({ model: currentModel });
    
    console.log(`\n🤖 Attempting to use model: ${currentModel}`);
    console.log(`Prompt: "${prompt}"\n`);
    
    // Generate content
    const result = await genModel.generateContent(prompt);
    
    // If we get here, the model worked
    console.log(`✅ Successfully used model: ${currentModel}\n`);
    console.log("-------------------RESPONSE-------------------\n");
    console.log(result.response.text);
    console.log("\n-------------------END RESPONSE-------------------");
    
  } catch (error) {
    console.error(`\n❌ Error with model ${currentModel}: ${error.message}`);
    
    if (error.message.includes("not found") || error.message.includes("404")) {
      console.log(`Model ${currentModel} is not available or you don't have access.`);
      console.log("Trying next model...");
      await tryGenerateContent(modelList, currentIndex + 1);
    } else {
      // Other error - still try next model
      console.log("Trying next model due to error...");
      await tryGenerateContent(modelList, currentIndex + 1);
    }
  }
}

/**
 * List available models
 */
async function listAvailableModels() {
  console.log("\n🔍 Fetching available Gemini models...\n");
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  try {
    // Get the list of models
    const modelList = await genAI.getModels();
    
    if (modelList && modelList.models && modelList.models.length > 0) {
      console.log("Available models from API:");
      modelList.models.forEach(model => {
        console.log(`- ${model.name} (${model.displayName || "No display name"})`);
      });
    } else {
      console.log("No models found or unable to list models");
    }
    
    // Always show the known models
    console.log("\nKnown model IDs you can try:");
    
    console.log("\nExperimental models (may require special access):");
    models.experimental.forEach(model => {
      console.log(`- ${model}`);
    });
    
    console.log("\nStable models:");
    models.stable.forEach(model => {
      console.log(`- ${model}`);
    });
    
    console.log("\nUsage examples:");
    console.log("- Standard: node gemini-cmd.js \"Your prompt here\"");
    console.log("- Experimental: node gemini-cmd.js --exp \"Your prompt here\"");
    console.log("- Specific model: $env:GEMINI_MODEL = \"gemini-1.5-pro\"; node gemini-cmd.js \"Your prompt here\"");
    
  } catch (error) {
    console.error(`\n❌ Error listing models: ${error.message}`);
    
    // Still show the known models
    console.log("\nKnown model IDs you can try:");
    allModels.forEach(model => {
      console.log(`- ${model}`);
    });
  }
}

// Run the appropriate function
if (listModels) {
  listAvailableModels();
} else {
  // If specific model is requested, try it first
  if (process.env.GEMINI_MODEL) {
    const modelOrder = [process.env.GEMINI_MODEL, ...allModels.filter(m => m !== process.env.GEMINI_MODEL)];
    tryGenerateContent(modelOrder);
  } 
  // Otherwise try experimental first if flag is set, or stable models if not
  else if (useExperimental) {
    tryGenerateContent([...models.experimental, ...models.stable]);
  } else {
    tryGenerateContent([...models.stable, ...models.experimental]);
  }
}
