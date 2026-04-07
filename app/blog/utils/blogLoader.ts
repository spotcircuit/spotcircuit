// Blog loading utilities
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { blogPosts as staticBlogPosts } from '../lib/blog-data';
import { getBlogPostContent } from '../lib/content-loader';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  tags: string[];
  category: string;
  readTime: number;
  coverImage: string;
};

export type BlogCategory = {
  name: string;
  count: number;
};

export type BlogTag = {
  name: string;
  count: number;
};

// Calculate estimated reading time
function calculateReadTime(content: string): number {
  const wordsPerMinute = 225;
  const wordCount = content.split(/\s+/g).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Get all blog posts
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    // First, convert static blog posts from blog-data.tsx
    const staticPosts: BlogPost[] = staticBlogPosts.map(post => {
      const content = getBlogPostContent(post.slug);
      const readTime = calculateReadTime(content);
      
      return {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        date: new Date(post.date).toISOString(),
        content: content,
        tags: post.tags,
        category: post.categories[0] || 'Uncategorized', // Use first category
        readTime: readTime,
        coverImage: post.coverImage
      };
    });

    // Then check for markdown posts in the filesystem
    const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
    if (!fs.existsSync(postsDirectory)) {
      // If no posts directory exists, create it
      fs.mkdirSync(postsDirectory, { recursive: true });
      
      // Create a sample post if there are no posts
      const samplePost = `---
title: How AI is Transforming Service Businesses - A Strategic Guide for 2025
excerpt: In today's rapidly evolving digital landscape, service businesses face unprecedented challenges and opportunities. Artificial intelligence is a present-day competitive advantage reshaping operations.
date: 2025-06-01
tags: ["AI Strategy", "Service Business", "Automation"]
category: "Business Growth"
coverImage: "/static/images/blog.webp"
---

# The AI Revolution in Service Industries

Service businesses—from plumbing and HVAC to legal and financial services—are discovering that AI isn't just for tech giants. Small and medium-sized service providers are leveraging AI to streamline operations, enhance customer experiences, and drive growth in ways that were previously unimaginable.

## Key Benefits of AI for Service Businesses

1. **Automated Customer Service**: 24/7 support through chatbots and virtual assistants
2. **Predictive Maintenance**: Anticipating equipment failures before they happen
3. **Smart Scheduling**: Optimizing staff allocation and reducing downtime
4. **Personalized Marketing**: Targeting customers with tailored offers and content

## Implementation Strategies

Getting started with AI doesn't have to be overwhelming. Here's a simple roadmap:

1. **Assess Current Processes**: Identify pain points and inefficiencies
2. **Start Small**: Begin with a single use case
3. **Measure Results**: Track improvements in efficiency, customer satisfaction, and revenue
4. **Expand Gradually**: Apply successful approaches to other areas of your business

## Case Study: Local Plumbing Company

A mid-sized plumbing company implemented AI-powered dispatch and routing, resulting in:

- 32% increase in service calls completed per day
- 47% reduction in fuel costs
- 28% improvement in customer satisfaction ratings

## Future Trends to Watch

As we look toward 2025 and beyond, keep an eye on these emerging trends:

1. **Voice-First Interfaces**: Making services more accessible to all customers
2. **Augmented Reality Support**: Enabling remote diagnostics and customer self-service
3. **Predictive Analytics**: Anticipating customer needs before they arise
4. **Autonomous Service Vehicles**: Revolutionizing service delivery logistics

Contact us today to learn how we can help your service business leverage AI for growth.
`;
      
      fs.writeFileSync(path.join(postsDirectory, 'ai-transforming-service-businesses.md'), samplePost);
    }
    
    // Get all markdown files from the posts directory
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '');
        
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents);
        
        // Ensure data has all required properties
        const date = data.date ? new Date(data.date).toISOString() : new Date().toISOString();
        const tags = data.tags || [];
        const category = data.category || 'Uncategorized';
        const excerpt = data.excerpt || content.slice(0, 150) + '...';
        const coverImage = data.coverImage || '/static/images/blog.webp';
        
        // Calculate reading time
        const readTime = calculateReadTime(content);
        
        // Combine the data
        return {
          slug,
          title: data.title || 'Untitled Post',
          excerpt,
          date,
          content,
          tags,
          category,
          readTime,
          coverImage
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

// Get a single blog post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getAllPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

// Get all tags with count
export async function getAllTags(): Promise<BlogTag[]> {
  try {
    const posts = await getAllPosts();
    const tagCounts: Record<string, number> = {};
    
    posts.forEach(post => {
      post.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });
    
    return Object.entries(tagCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  } catch (error) {
    console.error('Error getting tags:', error);
    return [];
  }
}

// Get all categories with count
export async function getAllCategories(): Promise<BlogCategory[]> {
  try {
    const posts = await getAllPosts();
    const categoryCounts: Record<string, number> = {};
    
    posts.forEach(post => {
      categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
    });
    
    return Object.entries(categoryCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  } catch (error) {
    console.error('Error getting categories:', error);
    return [];
  }
}
