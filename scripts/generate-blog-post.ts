/**
 * scripts/generate-blog-post.ts
 *
 * - Loads a random template from blog-templates.json
 * - Calls the generateContent() function to create the blog post
 * - Enhances content with images from Unsplash
 * - Writes the result to scripts/latest-blog-content.md
 */

import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { generateContent, Link, GenerateContentOptions } from './generateContent';
import { enhanceContent } from './enhance-content';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

// Validate environment variables
const REQUIRED_ENV_VARS = ['DEEPSEEK_API_KEY'] as const;
const missingEnvVars = REQUIRED_ENV_VARS.filter(envVar => !process.env[envVar]);
if (missingEnvVars.length > 0) {
  console.error('Error: Missing required environment variables:', missingEnvVars.join(', '));
  console.error('Please ensure you have set up your .env.local file with the required API keys');
  process.exit(1);
}

interface BlogTemplate {
  title: string;
  keywords: string[];
  outline: string[];
  includeMetrics?: boolean;
}

interface Category {
  category: string;
  templates: BlogTemplate[];
}

interface TemplateData {
  topics: Category[];
  variables: Record<string, string[]>;
}

interface BlogPostResult {
  title: string;
  content: string;
  tags: string[];
}

class TemplateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TemplateError';
  }
}

function getRandomItem<T>(arr: T[], context: string): T {
  if (arr.length === 0) {
    throw new TemplateError(`No ${context} available`);
  }
  return arr[Math.floor(Math.random() * arr.length)];
}

function replaceVariables(text: string, variables: Record<string, string>): string {
  return text.replace(/\{([^}]+)\}/g, (match, key) => {
    if (variables[key]) {
      return variables[key];
    }
    throw new TemplateError(`Missing variable: ${key}`);
  });
}

async function generateBlogPost(): Promise<BlogPostResult> {
  try {
    // Load templates - updated path to point to an existing location
    const templatesPath = path.join(process.cwd(), 'scripts', 'blog-templates.json');
    const templateData: TemplateData = JSON.parse(fs.readFileSync(templatesPath, 'utf8'));

    // Select random category and template
    const category = getRandomItem(templateData.topics, 'topics');
    const template = getRandomItem(category.templates, 'templates');

    // Generate variables
    const variables: Record<string, string> = {};
    for (const [key, values] of Object.entries(templateData.variables)) {
      variables[key] = getRandomItem(values, `values for ${key}`);
    }

    // Replace variables in title and outline
    const title = replaceVariables(template.title, variables);
    const outline = template.outline.map(item => replaceVariables(item, variables));

    // Define links
    const internalLinks: Link[] = [
      { text: 'Marketing Automation Tips', url: '/blog/marketing-automation-tips' },
      { text: 'In-Depth SEO Checklist', url: '/blog/seo-checklist' }
    ];

    const externalLinks: Link[] = [
      { text: "Google's SEO Guidelines", url: 'https://developers.google.com/search/docs/beginner/seo' },
      { text: "HubSpot's CRM", url: 'https://www.hubspot.com/products/crm' }
    ];

    // Generate content
    const options: GenerateContentOptions = {
      title,
      keywords: template.keywords,
      outline,
      tone: 'professional but approachable',
      voice: 'business-focused',
      internalLinks,
      externalLinks,
      wordCount: 3000
    };

    const content = await generateContent(options);

    // Write initial content to file
    const contentPath = path.join(process.cwd(), 'scripts', 'latest-blog-content.md');
    const frontmatter = `---
title: ${title}
tags: ${template.keywords.join(', ')}
---\n\n`;
    
    await fs.promises.writeFile(contentPath, frontmatter + content, 'utf8');

    // Enhance content with images
    await enhanceContent();

    // Read back enhanced content
    const enhancedContent = await fs.promises.readFile(contentPath, 'utf8');

    return {
      title,
      content: enhancedContent,
      tags: template.keywords
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Unknown error occurred while generating blog post');
  }
}

// If called directly
if (require.main === module) {
  generateBlogPost().catch(error => {
    console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  });
}