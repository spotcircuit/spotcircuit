import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Marketing Solutions for Contractors | SpotCircuit',
  description: 'Grow your contracting business with AI-powered marketing automation that generates qualified leads and streamlines your operations.',
  keywords: 'contractor marketing, general contractor leads, construction marketing, contractor SEO, home improvement marketing',
  alternates: {
    canonical: 'https://www.spotcircuit.com/industries/contracting',
    languages: {
      'x-default': 'https://www.spotcircuit.com/industries/contracting',
      'en': 'https://www.spotcircuit.com/industries/contracting',
    },
  },
  openGraph: {
    title: 'AI Marketing Solutions for Contractors | SpotCircuit',
    description: 'Grow your contracting business with AI-powered marketing automation that generates qualified leads and streamlines your operations.',
    url: 'https://www.spotcircuit.com/industries/contracting',
    images: ['/static/images/contracting-og.webp'],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Solutions for Contractors | SpotCircuit',
    description: 'Grow your contracting business with AI-powered marketing automation that generates qualified leads and streamlines your operations.',
    images: ['/static/images/contracting-og.webp'],
    creator: '@spotcircuit',
  },
};