import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Strategy Blueprint: AI-First Content Optimization | SpotCircuit',
  description: 'Learn how to develop a comprehensive content strategy that ranks in search engines, gets cited by AI platforms, and converts visitors into customers.',
  keywords: 'content strategy, AI-first content, content optimization, SEO content, content marketing blueprint, content planning, AI content strategy',
  authors: [{ name: 'SpotCircuit Team' }],
  creator: 'SpotCircuit',
  publisher: 'SpotCircuit',
  openGraph: {
    type: 'article',
    title: 'Content Strategy Blueprint: Create Content That Ranks & Converts',
    description: 'Comprehensive guide to developing a content strategy that ranks in search engines, gets cited by AI platforms, and converts visitors into customers.',
    url: 'https://www.spotcircuit.com/resources/content-strategy-blueprint',
    images: [{
      url: '/static/images/content-strategy-card.jpg',
      width: 1200,
      height: 630,
      alt: 'Content Strategy Blueprint Guide',
    }],
    siteName: 'SpotCircuit',
    locale: 'en_US',
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: '2024-01-01T00:00:00.000Z',
    authors: ['SpotCircuit Team'],
    section: 'Content Marketing',
    tags: ['Content Strategy', 'Content Marketing', 'SEO Content', 'AI Content Strategy', 'Content Planning'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Strategy Blueprint: Create Content That Ranks & Converts',
    description: 'Comprehensive guide to developing a content strategy that ranks in search engines, gets cited by AI platforms, and converts visitors into customers.',
    images: ['/static/images/content-strategy-card.jpg'],
    creator: '@spotcircuit',
  },
  alternates: {
    canonical: 'https://www.spotcircuit.com/resources/content-strategy-blueprint',
    languages: {
      'x-default': '/resources/content-strategy-blueprint',
      'en': '/resources/content-strategy-blueprint',
    },
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
  category: 'content marketing',
  classification: 'guide',
  other: {
    'article:author': 'SpotCircuit Team',
    'article:section': 'Content Marketing Resources',
    'article:tag': 'Content Strategy, Content Marketing, SEO Content, AI Content Strategy',
  },
};