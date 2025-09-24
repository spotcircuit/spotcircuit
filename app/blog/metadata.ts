import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | SpotCircuit - AI-First SEO & LLM Optimization',
  description: 'Discover insights on AI-First SEO, LLM optimization, business automation, and service optimization from SpotCircuit experts.',
  keywords: 'AI-First SEO, LLM optimization, AI search, chatbot citation, home service automation, business growth',
  alternates: {
    canonical: 'https://www.spotcircuit.com/blog',
    languages: {
      'x-default': 'https://www.spotcircuit.com/blog',
      'en': 'https://www.spotcircuit.com/blog',
    },
  },
  openGraph: {
    title: 'Blog | SpotCircuit - AI-First SEO & LLM Optimization',
    description: 'Discover insights on AI-First SEO, LLM optimization, business automation, and service optimization from SpotCircuit experts.',
    type: 'website',
    url: 'https://www.spotcircuit.com/blog',
    siteName: 'SpotCircuit',
    images: [
      {
        url: 'https://www.spotcircuit.com/static/images/blog.webp',
        width: 1200,
        height: 630,
        alt: 'SpotCircuit Blog - AI-First SEO & Business Automation Insights'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | SpotCircuit - AI-First SEO & LLM Optimization',
    description: 'Discover insights on AI-First SEO, LLM optimization, business automation, and service optimization from SpotCircuit experts.',
    images: ['https://www.spotcircuit.com/static/images/blog.webp']
  }
};