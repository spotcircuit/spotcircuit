import fs from 'fs';
import path from 'path';
import GhostAdminAPI from '@tryghost/admin-api';

// Initialize Ghost Admin API
const ghost = new GhostAdminAPI({
    url: process.env.GHOST_API_URL,
    key: process.env.GHOST_ADMIN_API_KEY,
    version: 'v5.0'
});

interface BlogTemplate {
    title: string;
    keywords: string[];
    outline: string[];
}

interface Variable {
    [key: string]: string[];
}

async function generateBlogPost() {
    try {
        // Read templates
        const templatesPath = path.join(process.cwd(), 'scripts', 'blog-templates.json');
        const templates = JSON.parse(fs.readFileSync(templatesPath, 'utf-8'));
        
        // Randomly select a category and template
        const category = templates.topics[Math.floor(Math.random() * templates.topics.length)];
        const template = category.templates[Math.floor(Math.random() * category.templates.length)];
        
        // Replace variables in title and outline
        let title = template.title;
        let outline = [...template.outline];
        
        // Replace variables with random values
        for (const [key, values] of Object.entries(templates.variables)) {
            const pattern = new RegExp(`{${key}}`, 'g');
            const randomValue = values[Math.floor(Math.random() * values.length)];
            title = title.replace(pattern, randomValue);
            outline = outline.map(item => item.replace(pattern, randomValue));
        }

        // Generate content using DeepSeek API
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    {
                        role: "system",
                        content: "You are a professional e-commerce and SEO content writer specializing in Shopify stores and digital marketing."
                    },
                    {
                        role: "user",
                        content: `Write a detailed blog post with the following:
Title: ${title}
Keywords: ${template.keywords.join(', ')}
Outline:
${outline.map(item => `- ${item}`).join('\n')}

The blog post should be informative, engaging, and include practical examples. Format the response in markdown.`
                    }
                ],
                temperature: 0.7,
                max_tokens: 2000
            })
        });

        const data = await response.json();
        const content = data.choices[0].message.content;

        // Post to Ghost
        await ghost.posts.add({
            title: title,
            html: content,
            status: 'scheduled',
            published_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Schedule for tomorrow
            tags: [
                { name: category.category },
                ...template.keywords.map(keyword => ({ name: keyword }))
            ]
        });

        console.log(`Successfully scheduled blog post: ${title}`);
    } catch (error) {
        console.error('Error generating blog post:', error);
    }
}

// Run the script
generateBlogPost();
