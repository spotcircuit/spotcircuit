/**
 * Gemini API utility for SpotCircuit
 * Provides functions to interact with Google's Gemini AI models
 */

import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the API with the key from environment variables
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);

/**
 * Generate content using Gemini AI
 * 
 * @param {string} prompt - The text prompt to send to Gemini
 * @param {string} model - The model to use (default: "gemini-2.5-pro-exp-03-25")
 * @param {object} options - Additional configuration options
 * @returns {Promise<string>} - The generated text response
 */
export async function generateContent(prompt, model = "gemini-2.5-pro-exp-03-25", options = {}) {
  try {
    // Get the generative model
    const genModel = genAI.getGenerativeModel({
      model,
      generationConfig: {
        temperature: options.temperature || 1.0,
        topP: options.topP || 0.95,
        topK: options.topK || 64,
        maxOutputTokens: options.maxOutputTokens || 8192,
        responseMimeType: "text/plain",
      },
    });
    
    // Generate content
    const result = await genModel.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    throw error;
  }
}

/**
 * Start a chat session with Gemini
 * 
 * @param {string} model - The model to use (default: "gemini-2.5-pro-exp-03-25")
 * @param {array} history - Optional chat history
 * @param {object} options - Additional configuration options
 * @returns {object} - Chat session object with sendMessage method
 */
export function startChat(model = "gemini-2.5-pro-exp-03-25", history = [], options = {}) {
  const genModel = genAI.getGenerativeModel({
    model,
    generationConfig: {
      temperature: options.temperature || 1.0,
      topP: options.topP || 0.95,
      topK: options.topK || 64,
      maxOutputTokens: options.maxOutputTokens || 8192,
      responseMimeType: "text/plain",
    },
  });
  
  return genModel.startChat({
    history,
    generationConfig: options,
  });
}

/**
 * Helper function to process content for topic analysis
 * Specifically designed for AI-First SEO tasks
 * 
 * @param {string} content - The content to analyze
 * @returns {Promise<object>} - Structured analysis results
 */
export async function analyzeTopics(content) {
  const prompt = `
    Analyze the following content from an AI-First SEO perspective. 
    Identify:
    1. Main topics and subtopics
    2. Potential FAQs that could be extracted
    3. Key entities mentioned
    4. Semantic relationships between concepts
    5. Areas where the content could be enhanced for LLM optimization
    
    Format your response as structured JSON with these categories.
    
    Content to analyze:
    ${content}
  `;
  
  try {
    const genModel = genAI.getGenerativeModel({ model: "gemini-2.5-pro-exp-03-25" });
    const result = await genModel.generateContent(prompt);
    const text = result.response.text();
    
    // Attempt to parse JSON from the response
    try {
      return JSON.parse(text);
    } catch (parseError) {
      // If not valid JSON, return the raw text
      return { rawAnalysis: text };
    }
  } catch (error) {
    console.error("Error analyzing topics with Gemini:", error);
    throw error;
  }
}

/**
 * Generate FAQ content based on a topic or existing content
 * 
 * @param {string} topic - The topic or content to generate FAQs for
 * @param {number} count - Number of FAQs to generate (default: 5)
 * @returns {Promise<Array>} - Array of Q&A pairs
 */
export async function generateFAQs(topic, count = 5) {
  const prompt = `
    Generate ${count} frequently asked questions and detailed answers about the following topic.
    Make these questions specifically optimized for AI-First SEO:
    1. Focus on natural language questions people might ask an AI assistant
    2. Cover different aspects of the topic comprehensively
    3. Include specific details in answers (numbers, examples, processes)
    4. Structure answers for easy parsing by language models
    
    Format your response as JSON array with objects containing 'question' and 'answer' fields.
    
    Topic: ${topic}
  `;
  
  try {
    const genModel = genAI.getGenerativeModel({ model: "gemini-2.5-pro-exp-03-25" });
    const result = await genModel.generateContent(prompt);
    const text = result.response.text();
    
    // Attempt to parse JSON from the response
    try {
      return JSON.parse(text);
    } catch (parseError) {
      // If not valid JSON, return in a structured format
      return [{ 
        error: true, 
        rawResponse: text 
      }];
    }
  } catch (error) {
    console.error("Error generating FAQs with Gemini:", error);
    throw error;
  }
}
