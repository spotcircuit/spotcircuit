import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Marketing Solutions for Law Firms | SpotCircuit',
  description: 'Attract more clients to your law firm with ethical AI-powered marketing that showcases your expertise and builds trust.',
  keywords: 'law firm marketing, attorney marketing, legal SEO, personal injury marketing, family law leads, criminal defense marketing',
  alternates: {
    canonical: 'https://www.spotcircuit.com/industries/legal',
    languages: {
      'x-default': 'https://www.spotcircuit.com/industries/legal',
      'en': 'https://www.spotcircuit.com/industries/legal',
    },
  },
  openGraph: {
    title: 'AI Marketing Solutions for Law Firms | SpotCircuit',
    description: 'Attract more clients to your law firm with ethical AI-powered marketing that showcases your expertise and builds trust.',
    url: 'https://www.spotcircuit.com/industries/legal',
    images: ['/static/images/legal-og.webp'],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Solutions for Law Firms | SpotCircuit',
    description: 'Attract more clients to your law firm with ethical AI-powered marketing that showcases your expertise and builds trust.',
    images: ['/static/images/legal-og.webp'],
    creator: '@spotcircuit',
  },
};