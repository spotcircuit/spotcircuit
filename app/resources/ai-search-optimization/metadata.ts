import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complete Guide to AI Search Optimization (ASO) for SaaS | SpotCircuit',
  description: 'Learn how to optimize your SaaS content for AI search engines like ChatGPT, Claude, and Perplexity. Free templates, examples, and implementation guide included.',
  keywords: 'AI SEO guide, AI search optimization tutorial, ASO guide, AEO guide, LLMO guide, GEO guide, ChatGPT SEO, Claude SEO, how to optimize for AI, SaaS AI visibility, schema markup guide, semantic SEO tutorial',
  authors: [{ name: 'SpotCircuit Team' }],
  creator: 'SpotCircuit',
  publisher: 'SpotCircuit',
  openGraph: {
    type: 'article',
    title: 'The Complete Guide to AI Search Optimization for SaaS',
    description: 'Everything you need to know about getting cited by AI search engines. Free templates and implementation guide.',
    url: 'https://spotcircuit.com/resources/ai-search-optimization',
    images: [{
      url: '/static/images/ai-seo-guide-og.png',
      width: 1200,
      height: 630,
      alt: 'AI Search Optimization Guide for SaaS Companies',
    }],
    siteName: 'SpotCircuit',
    locale: 'en_US',
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: '2024-01-01T00:00:00.000Z',
    authors: ['SpotCircuit Team'],
    section: 'AI & SEO',
    tags: ['AI SEO', 'SaaS Marketing', 'Content Optimization', 'Schema Markup', 'ChatGPT Optimization'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Guide: AI Search Optimization for SaaS',
    description: 'Learn how to get cited by ChatGPT, Claude, and other AI platforms.',
    images: ['/static/images/ai-seo-guide-og.png'],
    creator: '@spotcircuit',
  },
  alternates: {
    canonical: 'https://spotcircuit.com/resources/ai-search-optimization',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
  classification: 'guide',
  other: {
    'article:author': 'SpotCircuit Team',
    'article:section': 'AI & SEO Resources',
    'article:tag': 'AI SEO, SaaS Marketing, Content Optimization, Schema Markup',
  },
};
