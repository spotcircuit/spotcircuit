// Shared data file for blog posts and categories

import categoriesData from './categories.json';
import { Category, BlogPost, CategoriesData } from './types';

// Categories imported from JSON file
export const categories: Category[] = (categoriesData as CategoriesData).categories.map((category: Category) => ({
  ...category,
  postCount: 0, // Will be calculated dynamically
}));

// Blog posts data structure
export const blogPosts: BlogPost[] = [
  {
    slug: 'seo-isnt-dead',
    title: "SEO Isn't Dead: Take a Masterclass in Fighting Yesterday's War",
    date: 'June 1, 2025',
    readTime: '15 min read',
    excerpt: "Stop optimizing for 2019 while your competitors dominate the AI-first search landscape of 2025. The search revolution is here, and most businesses are fighting yesterday's war with yesterday's weapons.",
    coverImage: '/static/images/seo20.webp',
    tags: ['SEO 2.0', 'AI Search', 'Content Strategy', 'Digital Marketing', 'LLM Optimization', 'Search Evolution', 'Entity SEO', 'Semantic Search', 'AI Citations', 'Search Strategy'],
    categories: ['SEO & Online Brand Protection', 'AI & Automation in Business'],
    featured: true,
  },
  {
    slug: 'ai-transforming-service-businesses',
    title: 'How AI is Transforming Service Businesses: A Strategic Guide for 2025',
    date: 'May 12, 2025',
    readTime: '8 min read',
    excerpt: "In today's rapidly evolving digital landscape, service businesses face unprecedented challenges and opportunities. Artificial intelligence is no longer a futuristic concept—it's a present-day competitive advantage.",
    coverImage: '/static/images/blog.webp',
    tags: ['AI', 'Automation', 'Business Strategy', 'Digital Transformation', 'Service Business'],
    categories: ['AI Applications & Industry Solutions', 'Business Growth & Scalability'],
    featured: false,
  },
  {
    slug: 'ai-automation-for-roofing-construction-lead-generation',
    title: 'AI Automation for Lead Generation: A Game-Changer for Roofers and Construction Contractors',
    date: 'June 2, 2025',
    readTime: '16 min read',
    excerpt: "Discover how AI automation is revolutionizing lead generation for roofing and construction businesses. From intelligent chatbots to automated follow-ups, learn the practical strategies that are helping contractors close more deals and scale faster.",
    coverImage: '/static/images/blog.webp',
    tags: ['AI Automation', 'Lead Generation', 'Construction Marketing', 'Roofing Business', 'Contractor Lead Gen', 'AI Chatbots', 'Construction Tech', 'Digital Marketing', 'Business Automation', '2025 Marketing'],
    categories: ['AI & Automation in Business', 'AI Applications & Industry Solutions'],
    featured: false,
  }
];