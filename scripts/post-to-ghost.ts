import * as fs from 'fs';
import * as path from 'path';
import GhostAdminAPI from '@tryghost/admin-api';
import fetch from 'node-fetch';
import { marked } from 'marked';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

interface UnsplashResponse {
    urls: {
        regular: string;
    };
}

// Initialize Ghost Admin API
const ghost = new GhostAdminAPI({
    url: process.env.GHOST_API_URL || '',
    key: process.env.GHOST_ADMIN_API_KEY || '',
    version: "v5.0"
});

async function getOrCreateTag(name: string, slug: string): Promise<string> {
    try {
        // Try to get the tag by slug
        const existingTags = await ghost.tags.browse({ filter: `slug:${slug}` });
        if (existingTags && existingTags.length > 0 && existingTags[0].id) {
            console.log(`Found existing tag: ${name}`);
            return existingTags[0].id;
        } else {
            // Create new tag
            console.log(`Creating new tag: ${name}`);
            const newTag = await ghost.tags.add({
                name,
                slug
            });
            if (!newTag.id) {
                throw new Error(`Failed to create tag: ${name}`);
            }
            return newTag.id;
        }
    } catch (error) {
        console.error('Error handling tag:', error);
        throw error;
    }
}

async function validateContent(content: string): Promise<void> {
    if (!content || content.trim().length === 0) {
        throw new Error('Content is empty');
    }
    console.log('Content validation passed');
    console.log('Content length:', content.length);
    console.log('First 100 characters:', content.substring(0, 100));
}

async function postToGhost(): Promise<void> {
    try {
        // Read the markdown content
        const contentPath = path.join(process.cwd(), 'scripts', 'latest-blog-content.md');
        console.log(`Reading content from: ${contentPath}`);
        const content = fs.readFileSync(contentPath, 'utf-8');
        
        // Validate content
        await validateContent(content);

        // Get image from Unsplash
        console.log('Getting image from Unsplash...');
        const imageResponse = await fetch(
            'https://api.unsplash.com/photos/random?query=saas%20business&orientation=landscape',
            {
                headers: {
                    'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
                }
            }
        );

        if (!imageResponse.ok) {
            throw new Error(`Unsplash API error: ${imageResponse.status}`);
        }

        const imageData = await imageResponse.json() as UnsplashResponse;
        const imageUrl = imageData.urls.regular;
        console.log(`Image URL: ${imageUrl}`);

        // Get or create the tag
        const tagId = await getOrCreateTag('AI Automation', 'ai-automation');
        console.log('Using tag ID:', tagId);

        // Extract title and remove it from content
        const titleMatch = content.match(/^#\s+(.+)$/m);
        if (!titleMatch) {
            throw new Error('No title found in the blog post');
        }
        const title = titleMatch[1];
        
        // Remove the title line from the content
        const contentWithoutTitle = content.replace(/^#\s+.+\n+/, '').trim();

        // Create mobiledoc version as backup
        const mobiledocContent = JSON.stringify({
            version: "0.3.1",
            markups: [],
            atoms: [],
            cards: [
                ["markdown", { cardName: "markdown", markdown: contentWithoutTitle }]
            ],
            sections: [[10, 0]]
        });

        // Convert markdown to HTML
        const htmlContent = marked(contentWithoutTitle);

        // Create draft post
        console.log('Creating draft post...');
        await ghost.posts.add({
            title,
            html: htmlContent,
            mobiledoc: mobiledocContent,
            feature_image: imageUrl,
            status: 'draft',
            tags: [{ id: tagId }]
        });

        console.log('Post created successfully!');
        console.log(`Title: ${title}`);
        console.log(`Status: draft`);
        console.log(`URL: ${imageUrl}`);

    } catch (error) {
        console.error('Error:', error);
        if (error instanceof Error) {
            console.error('Error details:', error.message);
            console.error('Stack trace:', error.stack);
        }
        process.exit(1);
    }
}

postToGhost();
