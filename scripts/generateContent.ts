/**
 * scripts/generateContent.ts
 *
 * Calls the DeepSeek API with advanced instructions to produce a well-formatted
 * blog post in Markdown, with optional internal/external links, tone, voice, etc.
 */

import fetch from 'node-fetch';
import type { Response } from 'node-fetch';

export interface Link {
  text: string;
  url: string;
}

interface DeepSeekMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface DeepSeekRequest {
  model: string;
  messages: DeepSeekMessage[];
  temperature: number;
  max_tokens: number;
}

interface DeepSeekResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
  error?: {
    message: string;
    type: string;
  };
}

export interface GenerateContentOptions {
  title: string;
  keywords: string[];
  outline: string[];
  tone?: string;
  voice?: string;
  internalLinks?: Link[];
  externalLinks?: Link[];
  wordCount?: number;
}

class ContentGenerationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ContentGenerationError';
  }
}

export async function generateContent({
  title,
  keywords,
  outline,
  tone = 'informative and engaging',
  voice = 'business-friendly',
  internalLinks = [],
  externalLinks = [],
  wordCount = 3000
}: GenerateContentOptions): Promise<string> {
  
  if (!process.env.DEEPSEEK_API_KEY) {
    throw new ContentGenerationError('DEEPSEEK_API_KEY environment variable is not set');
  }

  // Construct partial prompt for internal links
  const internalLinksInstructions = internalLinks.length
    ? `\nInclude at least the following internal links within the content:\n${internalLinks.map(link => `- [${link.text}](${link.url})`).join('\n')}`
    : '';

  // Construct partial prompt for external links
  const externalLinksInstructions = externalLinks.length
    ? `\nInclude at least the following external links within the content:\n${externalLinks.map(link => `- [${link.text}](${link.url})`).join('\n')}`
    : '';

  const prompt = `
Write a comprehensive blog post with the following specifications:

Title: ${title}

Keywords to target: ${keywords.join(', ')}

Outline:
${outline.map(point => `- ${point}`).join('\n')}

Writing style:
- Tone: ${tone}
- Voice: ${voice}
${internalLinksInstructions}
${externalLinksInstructions}

Requirements:
1. Format in Markdown
2. Include a meta description
3. Target approximately ${wordCount} words
4. Use proper heading hierarchy (H1, H2, H3)
5. Include relevant examples and explanations
6. Make it engaging and informative
7. Naturally incorporate the keywords

Output format:
---
title: <title>
tags: <comma-separated list of relevant tags>
---
<markdown content>
`;

  try {
    const request: DeepSeekRequest = {
      model: 'deepseek-chat',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: Math.floor(wordCount * 1.5) // rough estimate for tokens needed
    };

    const response: Response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify(request)
    });

    if (!response.ok) {
      throw new ContentGenerationError(`API request failed: ${response.statusText}`);
    }

    const data = await response.json() as DeepSeekResponse;
    
    if (data.error) {
      throw new ContentGenerationError(`API error: ${data.error.message}`);
    }

    if (!data.choices?.[0]?.message?.content) {
      throw new ContentGenerationError('No content generated from the API');
    }

    // Clean up the response
    let content = data.choices[0].message.content;
    
    // Remove markdown code fences if present
    content = content.replace(/^```markdown\s*/m, '').replace(/```\s*$/m, '');
    
    // Remove any frontmatter from the generated content since we'll add our own
    content = content.replace(/^---[\s\S]*?---\s*/m, '');
    
    // Remove DeepSeek's trailing comment
    content = content.replace(/\nThis blog post is designed[\s\S]*$/, '');
    
    // Clean up any extra newlines
    content = content.replace(/\n{3,}/g, '\n\n').trim();

    return content;
  } catch (error) {
    if (error instanceof ContentGenerationError) {
      throw error;
    }
    throw new ContentGenerationError(
      `Failed to generate content: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}
