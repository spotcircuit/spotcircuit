import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/ghost';

export default async function newsSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://spotcircuit.com';
  
  try {
    // Fetch blog posts from Ghost CMS
    const posts = await getPosts({ limit: 100 });
    
    if (!posts || posts.length === 0) {
      return [];
    }
    
    // Create sitemap entries for each blog post
    return posts.map(post => {
      // Use post's published date, or fallback to current date
      const publishDate = post.published_at 
        ? new Date(post.published_at) 
        : new Date();
        
      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: publishDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      };
    });
  } catch (error) {
    console.error('Error generating news sitemap:', error);
    return [];
  }
}