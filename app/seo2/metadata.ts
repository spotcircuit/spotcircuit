import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO 2.0: The AI-First Revolution | SpotCircuit',
  description: 'Dominate the new era of search with AI-First SEO strategies engineered for AI comprehension, visibility, and citation in platforms like ChatGPT, Claude, and Google AI.',
  keywords: 'SEO 2.0, AI-First SEO, AI search optimization, LLM optimization, AI citation, ChatGPT optimization, structured data for AI',
  alternates: {
    canonical: '/seo2',
  },
  openGraph: {
    title: 'SEO 2.0: The AI-First Revolution | SpotCircuit',
    description: 'Dominate the new era of search with AI-First SEO strategies engineered for AI comprehension, visibility, and citation in platforms like ChatGPT, Claude, and Google AI.',
    url: 'https://spotcircuit.com/seo2',
    type: 'website',
    siteName: 'SpotCircuit',
    images: [
      {
        url: 'https://spotcircuit.com/static/images/seo20.webp',
        width: 1200,
        height: 630,
        alt: 'SEO 2.0: The AI-First Revolution'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO 2.0: The AI-First Revolution | SpotCircuit',
    description: 'Dominate the new era of search with AI-First SEO strategies engineered for AI comprehension, visibility, and citation in platforms like ChatGPT, Claude, and Google AI.',
    images: ['https://spotcircuit.com/static/images/seo20.webp']
  }
};

export default metadata;