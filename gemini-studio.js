#!/usr/bin/env node

/**
 * Gemini API - Direct port of Google AI Studio code
 * 
 * Usage:
 *   node gemini-studio.js "Your prompt here"
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const fs = require("node:fs");
require('dotenv').config();

// Use the same environment variable as in your example
const apiKey = process.env.GOOGLE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("Error: GEMINI_API_KEY or GOOGLE_GEMINI_API_KEY is required");
  process.exit(1);
}

// Get the prompt from command line arguments
const prompt = process.argv.slice(2).join(" ");
if (!prompt) {
  console.error("Error: Please provide a prompt");
  console.log("Usage: node gemini-studio.js \"Your prompt here\"");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

// Try to use the experimental model
const modelName = "gemini-1.5-pro"; // Fallback to a model that's known to work
const experimentalModelName = "gemini-2.5-pro-exp-03-25"; // Your experimental model

// Configure generation parameters exactly as in your example
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 65536,
  responseModalities: [],
  responseMimeType: "text/plain",
};

async function run() {
  try {
    console.log(`\n🤖 Attempting to use experimental model: ${experimentalModelName}...`);
    
    // Try experimental model first
    const experimentalModel = genAI.getGenerativeModel({
      model: experimentalModelName,
      generationConfig,
    });
    
    const chatSession = experimentalModel.startChat({
      generationConfig,
      history: [],
    });
    
    console.log(`\nPrompt: "${prompt}"\n`);
    console.log("-------------------RESPONSE-------------------\n");
    
    const result = await chatSession.sendMessage(prompt);
    
    // Process the response exactly as in your example
    if (result.response.candidates && result.response.candidates.length > 0) {
      for(let candidate_index = 0; candidate_index < result.response.candidates.length; candidate_index++) {
        for(let part_index = 0; part_index < result.response.candidates[candidate_index].content.parts.length; part_index++) {
          const part = result.response.candidates[candidate_index].content.parts[part_index];
          
          // Handle text content
          if (part.text) {
            console.log(part.text);
          }
          
          // Handle inline data (images, etc.)
          if (part.inlineData) {
            try {
              const filename = `output_${candidate_index}_${part_index}.png`; // Default to png if mime-types not available
              fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
              console.log(`\nOutput media written to: ${filename}`);
            } catch (err) {
              console.error(err);
            }
          }
        }
      }
    } else {
      // Fallback to simple text output
      console.log(result.response.text());
    }
    
    console.log("\n-------------------END RESPONSE-------------------");
    
  } catch (error) {
    console.error(`\n❌ Error with experimental model: ${error.message}`);
    
    // Try fallback model
    try {
      console.log(`\n🔄 Falling back to standard model: ${modelName}...`);
      
      const standardModel = genAI.getGenerativeModel({
        model: modelName,
        generationConfig,
      });
      
      const result = await standardModel.generateContent(prompt);
      
      console.log("-------------------RESPONSE-------------------\n");
      console.log(result.response.text());
      console.log("\n-------------------END RESPONSE-------------------");
      
    } catch (fallbackError) {
      console.error(`\n❌ Error with fallback model: ${fallbackError.message}`);
      console.error("Unable to generate response with any model.");
    }
  }
}

run();
