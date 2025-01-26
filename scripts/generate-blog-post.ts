import * as fs from 'fs';
import * as path from 'path';
import fetch from 'node-fetch';

// Try to load from .env.local if it exists
try {
    const envLocalPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envLocalPath)) {
        const envConfig = require('dotenv').parse(fs.readFileSync(envLocalPath));
        for (const k in envConfig) {
            process.env[k] = envConfig[k];
        }
    }
} catch (error) {
    console.warn('Warning: Error loading .env.local file:', error);
}

// Validate environment variables
if (!process.env.DEEPSEEK_API_KEY) {
    console.error('Error: DEEPSEEK_API_KEY environment variable is not set');
    console.error('Please ensure you have set up your .env.local file with the required API keys');
    process.exit(1);
}

// Setup logging
const logDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logFile = path.join(logDir, `blog-generation-${new Date().toISOString().replace(/[:.]/g, '-')}.log`);

function log(message: string) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    process.stdout.write(logMessage + '\n');
    fs.appendFileSync(logFile, logMessage + '\n');
}

function logError(error: unknown) {
    const timestamp = new Date().toISOString();
    let errorMessage = 'Unknown error';
    
    if (error instanceof Error) {
        errorMessage = `${error.name}: ${error.message}\n${error.stack}`;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        errorMessage = JSON.stringify(error);
    }
    
    const logMessage = `[${timestamp}] ERROR: ${errorMessage}`;
    process.stderr.write(logMessage + '\n');
    fs.appendFileSync(logFile, logMessage + '\n');
}

// Export interfaces for other modules
export interface BlogTemplate {
    title: string;
    keywords: string[];
    outline: string[];
}

export interface Category {
    category: string;
    templates: BlogTemplate[];
}

export interface TemplateData {
    topics: Category[];
    variables: {
        [key: string]: string[];
    };
}

interface KeywordLink {
    keyword: string;
    url: string;
}

const commonLinks: KeywordLink[] = [
    { keyword: "Shopify", url: "https://www.shopify.com/" },
    { keyword: "SEO", url: "https://blog.spotcircuit.com/tag/seo/" },
    { keyword: "Local SEO", url: "https://blog.spotcircuit.com/tag/local-seo/" },
    { keyword: "e-commerce", url: "https://blog.spotcircuit.com/tag/e-commerce/" },
    { keyword: "digital marketing", url: "https://blog.spotcircuit.com/tag/digital-marketing/" },
    { keyword: "AI", url: "https://blog.spotcircuit.com/tag/ai/" },
    { keyword: "automation", url: "https://blog.spotcircuit.com/tag/automation/" },
    { keyword: "content marketing", url: "https://blog.spotcircuit.com/tag/content-marketing/" },
    { keyword: "product optimization", url: "https://blog.spotcircuit.com/tag/product-optimization/" },
    { keyword: "lead generation", url: "https://blog.spotcircuit.com/tag/lead-generation/" },
    { keyword: "SaaS", url: "https://blog.spotcircuit.com/tag/saas/" },
    { keyword: "AI automation", url: "https://blog.spotcircuit.com/tag/ai-automation/" },
    { keyword: "business automation", url: "https://blog.spotcircuit.com/tag/business-automation/" }
].map(link => ({
    ...link,
    // Ensure URLs are properly formatted without using URL class
    url: link.url.replace(/\s+/g, '-').toLowerCase()
}));

function addHyperlinks(content: string): string {
    let linkedContent = content;
    commonLinks.forEach(({ keyword, url }) => {
        const regex = new RegExp(`(?<!\\[)\\b${keyword}\\b(?!\\])`, 'g');
        linkedContent = linkedContent.replace(regex, `[${keyword}](${url})`);
    });
    return linkedContent;
}

function cleanupContent(content: string): string {
    // Remove any excessive repetition at the end
    const repetitionPattern = /(\b\w+\b)(?:\s+\1){3,}/g;
    content = content.replace(repetitionPattern, '$1');
    
    // Ensure proper spacing around headings
    content = content.replace(/([^#])(#{1,3}\s)/g, '$1\n\n$2');
    content = content.replace(/(#{1,3}.*)\n(?!#|\n)/g, '$1\n\n');
    
    // Clean up any multiple consecutive newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    return content.trim();
}

async function generateContent(title: string, keywords: string[], outline: string[]): Promise<string> {
    log('Generating content for: ' + title);
    
    const prompt = `Write a comprehensive, 3000-word blog post with the following:
Title: ${title}
Keywords: ${keywords.join(', ')}
Outline:
${outline.map(item => `- ${item}`).join('\n')}

Requirements:
1. Write exactly 3000 words
2. Use proper markdown formatting with ## for main headings and ### for subheadings
3. Include practical examples, case studies, and actionable tips
4. Add bullet points and numbered lists where appropriate
5. Include a brief conclusion section
6. Make the content engaging and informative for business owners`;

    log('Sending prompt to DeepSeek...');
    
    const apiEndpoint = 'https://api.deepseek.com/v1/chat/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
    };
    const body = {
        model: "deepseek-chat",
        messages: [
            {
                role: "system",
                content: `You are an expert digital transformation consultant specializing in multiple areas:

1. SEO & Digital Marketing:
   - Local SEO optimization for businesses
   - E-commerce SEO strategies
   - Content marketing and optimization
   - Digital marketing automation

2. E-commerce & Online Business:
   - Shopify store optimization
   - E-commerce automation solutions
   - Product listing optimization
   - Conversion rate optimization

3. AI & Automation Solutions:
   - AI-powered business automation
   - Workflow automation systems
   - Lead generation automation
   - Proposal generation tools
   - Custom AI integrations

4. SaaS & Technology:
   - SaaS implementation strategies
   - Business process automation
   - Technology stack optimization
   - Integration solutions`
            },
            {
                role: "user",
                content: prompt
            }
        ],
        temperature: 0.7,
        max_tokens: 4000,
        top_p: 0.9,
        frequency_penalty: 0.3,
        presence_penalty: 0.3
    };

    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`DeepSeek API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        log('DeepSeek response received');
        
        if (!data.choices?.[0]?.message?.content) {
            throw new Error('No content received from DeepSeek API');
        }

        let content = data.choices[0].message.content;
        
        // Ensure content starts with a title
        if (!content.startsWith('#')) {
            content = `# ${title}\n\n${content}`;
        }

        // Add hyperlinks to common keywords
        content = addHyperlinks(content);
        
        log('Content length (words): ' + content.split(/\s+/).length);
        
        return content;
    } catch (error) {
        throw new Error(`Failed to generate content: ${error.message}`);
    }
}

export async function generateBlogPost() {
    try {
        // Clear console first
        console.clear();
        
        log('Starting blog post generation...');
        log('--------------------------------------------------');
        
        // Read templates
        const templatesPath = path.join(process.cwd(), 'scripts', 'blog-templates.json');
        log('Reading templates from: ' + templatesPath);
        const templates = JSON.parse(fs.readFileSync(templatesPath, 'utf-8')) as TemplateData;
        
        // Randomly select a category and template
        const category = templates.topics[Math.floor(Math.random() * templates.topics.length)];
        const template = category.templates[Math.floor(Math.random() * category.templates.length)];
        
        log('Selected category: ' + category.category);
        log('Selected template title: ' + template.title);
        
        // Replace variables in title and outline with random values
        let title = template.title;
        let outline = [...template.outline];
        
        // Get all unique variables from the template
        const uniqueVars = new Set<string>();
        const varRegex = /{([^}]+)}/g;
        let match;
        
        // Find all variables in title and outline
        [title, ...outline].forEach(text => {
            while ((match = varRegex.exec(text)) !== null) {
                uniqueVars.add(match[1]);
            }
        });
        
        // Replace each variable with a consistent value
        for (const varName of uniqueVars) {
            if (templates.variables[varName]) {
                const values = templates.variables[varName];
                const randomValue = values[Math.floor(Math.random() * values.length)];
                const pattern = new RegExp(`{${varName}}`, 'g');
                
                title = title.replace(pattern, randomValue);
                outline = outline.map(item => item.replace(pattern, randomValue));
                log(`Replaced {${varName}} with: ${randomValue}`);
            } else {
                log(`Warning: Variable {${varName}} not found in templates`);
            }
        }
        
        log('Final title: ' + title);
        
        // Generate content
        const content = await generateContent(title, template.keywords, outline);
        
        // Save the content to a file
        const outputPath = path.join(process.cwd(), 'scripts', 'latest-blog-content.md');
        fs.writeFileSync(outputPath, content, 'utf-8');
        log(`Content saved to: ${outputPath}`);
        
        log('Blog post generation completed successfully!');
        
    } catch (error) {
        logError(error);
        throw error; // Re-throw to be handled by the wrapper
    }
}

// Only run directly if this is the main module
if (require.main === module) {
    generateBlogPost().catch(error => {
        process.exit(1);
    });
}
