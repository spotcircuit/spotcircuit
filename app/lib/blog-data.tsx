// Shared data file for blog posts and categories

// Predefined list of categories (these are the only valid categories)
export const categories = [
  {
    slug: 'technology',
    name: 'Technology',
    description: 'Articles about AI, automation, and emerging tech trends',
    postCount: 0, // Will be calculated dynamically
  },
  {
    slug: 'business-strategy',
    name: 'Business Strategy',
    description: 'Strategic insights for service business growth and optimization',
    postCount: 0,
  },
  {
    slug: 'marketing',
    name: 'Marketing',
    description: 'Modern marketing approaches for digital and AI-first businesses',
    postCount: 0,
  }
];

// Blog posts data structure
export const blogPosts = [
  {
    slug: 'seo-isnt-dead',
    title: "SEO Isn't Dead: Take a Masterclass in Fighting Yesterday's War",
    date: 'May 15, 2025',
    readTime: '10 min read',
    excerpt: "As AI reshapes search, businesses clinging to outdated SEO strategies are being left behind. Here's how to adapt to the new landscape.",
    coverImage: '/static/images/seo-cover.webp',
    tags: ['SEO', 'AI Search', 'Content Strategy', 'Digital Marketing', 'LLM Optimization'],
    categories: ['Marketing', 'Technology'],
    featured: false,
  },
  {
    slug: 'ai-transforming-service-businesses',
    title: 'How AI is Transforming Service Businesses: A Strategic Guide for 2025',
    date: 'May 12, 2025',
    readTime: '8 min read',
    excerpt: "In today's rapidly evolving digital landscape, service businesses face unprecedented challenges and opportunities. Artificial intelligence is no longer a futuristic concept—it's a present-day competitive advantage.",
    coverImage: '/static/images/blog.webp',
    tags: ['AI', 'Automation', 'Business Strategy', 'Digital Transformation', 'Service Business'],
    categories: ['Technology', 'Business Strategy'],
    featured: true,
  }
];