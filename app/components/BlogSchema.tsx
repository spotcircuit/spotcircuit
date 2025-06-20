import React from 'react';
import Script from 'next/script';

interface BlogPostItem {
  title: string;
  url: string;
  datePublished: string;
  description: string;
  author?: {
    name: string;
    url?: string;
  };
  image?: string;
}

interface BlogPageSchemaProps {
  blogPosts: BlogPostItem[];
  blogUrl: string;
}

export default function BlogPageSchema({ blogPosts, blogUrl }: BlogPageSchemaProps) {
  // Blog page schema
  const blogPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${blogUrl}#blog`,
    name: 'SpotCircuit Blog',
    description: 'Articles and insights on AI-First SEO, LLM optimization, and home service business growth strategies',
    url: blogUrl,
    publisher: {
      '@type': 'Organization',
      '@id': 'https://spotcircuit.com/#organization',
      name: 'SpotCircuit'
    },
    // Include BlogPosting entries for each blog post
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: post.url,
      datePublished: post.datePublished,
      description: post.description,
      ...(post.author && {
        author: {
          '@type': 'Person',
          name: post.author.name,
          ...(post.author.url && { url: post.author.url })
        }
      }),
      ...(post.image && { image: post.image }),
      publisher: {
        '@type': 'Organization',
        '@id': 'https://spotcircuit.com/#organization',
        name: 'SpotCircuit'
      }
    }))
  };

  return (
    <Script id="blog-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(blogPageSchema)}
    </Script>
  );
}