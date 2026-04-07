import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Marketing Solutions for Recruiting Firms | SpotCircuit',
  description: 'Attract top talent and clients with AI-powered marketing that positions your recruiting firm as the industry leader.',
  keywords: 'recruiting firm marketing, staffing agency marketing, recruitment SEO, talent acquisition marketing, executive search marketing',
  alternates: {
    canonical: 'https://www.spotcircuit.com/industries/recruiting',
    languages: {
      'x-default': 'https://www.spotcircuit.com/industries/recruiting',
      'en': 'https://www.spotcircuit.com/industries/recruiting',
    },
  },
  openGraph: {
    title: 'AI Marketing Solutions for Recruiting Firms | SpotCircuit',
    description: 'Attract top talent and clients with AI-powered marketing that positions your recruiting firm as the industry leader.',
    url: 'https://www.spotcircuit.com/industries/recruiting',
    images: ['/static/images/recruiting-og.webp'],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Solutions for Recruiting Firms | SpotCircuit',
    description: 'Attract top talent and clients with AI-powered marketing that positions your recruiting firm as the industry leader.',
    images: ['/static/images/recruiting-og.webp'],
    creator: '@spotcircuit',
  },
};