import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Marketing Solutions for Electrical Contractors | SpotCircuit',
  description: 'Transform your electrical contracting business with AI-powered marketing that drives qualified leads and builds your reputation.',
  keywords: 'electrical contractor marketing, electrician leads, electrical service marketing, commercial electrical marketing, residential electrician SEO',
  alternates: {
    canonical: 'https://www.spotcircuit.com/industries/electrical',
    languages: {
      'x-default': 'https://www.spotcircuit.com/industries/electrical',
      'en': 'https://www.spotcircuit.com/industries/electrical',
    },
  },
  openGraph: {
    title: 'AI Marketing Solutions for Electrical Contractors | SpotCircuit',
    description: 'Transform your electrical contracting business with AI-powered marketing that drives qualified leads and builds your reputation.',
    url: 'https://www.spotcircuit.com/industries/electrical',
    images: ['/static/images/electrical-og.webp'],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Solutions for Electrical Contractors | SpotCircuit',
    description: 'Transform your electrical contracting business with AI-powered marketing that drives qualified leads and builds your reputation.',
    images: ['/static/images/electrical-og.webp'],
    creator: '@spotcircuit',
  },
};