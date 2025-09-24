import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lead Generation Solutions | SpotCircuit',
  description: 'Generate high-quality leads consistently with our AI-powered lead generation system. Convert more visitors into customers with proven strategies.',
  keywords: 'lead generation, lead capture, conversion optimization, lead nurturing, sales funnel, customer acquisition',
  alternates: {
    canonical: 'https://www.spotcircuit.com/lead-generation',
    languages: {
      'x-default': 'https://www.spotcircuit.com/lead-generation',
      'en': 'https://www.spotcircuit.com/lead-generation',
    },
  },
  openGraph: {
    title: 'Lead Generation Solutions | SpotCircuit',
    description: 'Generate high-quality leads consistently with our AI-powered lead generation system. Convert more visitors into customers with proven strategies.',
    url: 'https://www.spotcircuit.com/lead-generation',
    images: ['/static/images/lead-generation-og.webp'],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lead Generation Solutions | SpotCircuit',
    description: 'Generate high-quality leads consistently with our AI-powered lead generation system. Convert more visitors into customers with proven strategies.',
    images: ['/static/images/lead-generation-og.webp'],
    creator: '@spotcircuit',
  },
};