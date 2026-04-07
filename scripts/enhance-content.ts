/**
 * scripts/enhance-content.ts
 * 
 * Enhances blog content with images from Unsplash and other improvements.
 */

import { promises as fs } from 'fs';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

interface UnsplashImage {
  urls: {
    regular: string;
  };
  user: {
    name: string;
    username: string;
  };
}

async function fetchUnsplashImage(options: { query: string; width: number; height: number }): Promise<UnsplashImage> {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=${options.query}&orientation=landscape&width=${options.width}&height=${options.height}`
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.statusText}`);
  }

  const data = await response.json();
  return data.results[0];
}

function createImageMarkdown(image: UnsplashImage, title: string): string {
  return `![${title}](${image.urls.regular})\n*Photo by [${image.user.name}](https://unsplash.com/@${image.user.username}?utm_source=spotcircuit&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=spotcircuit&utm_medium=referral)*`;
}

/**
 * Enhances sections with images
 */
async function enhanceSections(content: string): Promise<string> {
  try {
    console.log('\nStarting section enhancement...');
    let updatedContent = content;

    // Add images to specific sections
    console.log('Attempting to add growth metrics image...');
    try {
      const metricsImage = await fetchUnsplashImage({ 
        query: 'business growth chart', 
        width: 800, 
        height: 400 
      });
      updatedContent = updatedContent.replace(
        /## Setting Growth Targets\n\n(?:!\[.*?\]\(.*?\).*?\n\n|<iframe.*?<\/iframe>\n.*?\n\n)/s,
        `## Setting Growth Targets\n\n${createImageMarkdown(metricsImage, 'Business Growth Metrics')}\n\n`
      );
    } catch (error) {
      console.error('Failed to add metrics image:', error);
    }

    console.log('Attempting to add success factors image...');
    try {
      const successImage = await fetchUnsplashImage({ 
        query: 'business success strategy', 
        width: 800, 
        height: 400 
      });
      updatedContent = updatedContent.replace(
        /## Key Scaling Strategies\n\n(?:!\[.*?\]\(.*?\).*?\n\n|<iframe.*?<\/iframe>\n.*?\n\n)/s,
        `## Key Scaling Strategies\n\n${createImageMarkdown(successImage, 'Business Success Strategies')}\n\n`
      );
    } catch (error) {
      console.error('Failed to add success image:', error);
    }

    console.log('Attempting to add tools image...');
    try {
      const toolsImage = await fetchUnsplashImage({ 
        query: 'business tools technology', 
        width: 800, 
        height: 400 
      });
      updatedContent = updatedContent.replace(
        /## Tools and Resources\n\n(?:!\[.*?\]\(.*?\).*?\n\n|<iframe.*?<\/iframe>\n.*?\n\n)/s,
        `## Tools and Resources\n\n${createImageMarkdown(toolsImage, 'Business Tools and Resources')}\n\n`
      );
    } catch (error) {
      console.error('Failed to add tools image:', error);
    }

    return updatedContent;
  } catch (error) {
    console.error('Failed to enhance sections:', error);
    return content;
  }
}

/**
 * Main function to enhance content
 */
export async function enhanceContent() {
  try {
    console.log('\nStarting content enhancement...');
    
    // Read the content
    const content = await fs.readFile(path.join(process.cwd(), 'scripts', 'latest-blog-content.md'), 'utf8');
    
    // Enhance sections with visuals
    const enhancedContent = await enhanceSections(content);
    
    // Write the enhanced content back to the file
    await fs.writeFile(path.join(process.cwd(), 'scripts', 'latest-blog-content.md'), enhancedContent, 'utf8');
    
    console.log('Content enhanced successfully!');
  } catch (error) {
    console.error('Failed to enhance content:', error);
  }
}

// Only run if this is the main module
if (require.main === module) {
  enhanceContent();
}
