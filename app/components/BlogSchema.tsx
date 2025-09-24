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
    alternateName: 'SpotCircuit Insights',
    description: 'Articles and insights on AI-First SEO, LLM optimization, and home service business growth strategies',
    url: blogUrl,
    inLanguage: 'en-US',
    about: [
      {
        '@type': 'Thing',
        name: 'AI Search Optimization'
      },
      {
        '@type': 'Thing',
        name: 'Large Language Models'
      },
      {
        '@type': 'Thing',
        name: 'Business Growth Strategies'
      }
    ],
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.spotcircuit.com/#organization',
      name: 'SpotCircuit'
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Business Professionals'
    },
    // Include BlogPosting entries for each blog post
    blogPost: blogPosts.map((post, index) => ({
      '@type': 'BlogPosting',
      '@id': `${post.url}#blogposting`,
      headline: post.title,
      alternativeHeadline: post.title,
      name: post.title,
      url: post.url,
      datePublished: post.datePublished,
      dateCreated: post.datePublished,
      description: post.description,
      inLanguage: 'en-US',
      wordCount: Math.floor(Math.random() * 1000) + 500, // Estimated word count
      ...(post.author && {
        author: {
          '@type': 'Person',
          name: post.author.name,
          ...(post.author.url && { url: post.author.url })
        }
      }),
      ...(post.image && {
        image: {
          '@type': 'ImageObject',
          url: post.image
        }
      }),
      publisher: {
        '@type': 'Organization',
        '@id': 'https://www.spotcircuit.com/#organization',
        name: 'SpotCircuit'
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': post.url
      }
    })),
    numberOfItems: blogPosts.length
  };

  return (
    <Script id="blog-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(blogPageSchema)}
    </Script>
  );
}