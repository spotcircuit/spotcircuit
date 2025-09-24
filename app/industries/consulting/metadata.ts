import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Marketing Solutions for Consulting Firms | SpotCircuit',
  description: 'Scale your consulting practice with AI-powered marketing that positions you as an industry thought leader and attracts ideal clients.',
  keywords: 'consulting firm marketing, business consultant marketing, management consulting SEO, consulting leads, B2B consulting marketing',
  alternates: {
    canonical: 'https://www.spotcircuit.com/industries/consulting',
    languages: {
      'x-default': 'https://www.spotcircuit.com/industries/consulting',
      'en': 'https://www.spotcircuit.com/industries/consulting',
    },
  },
  openGraph: {
    title: 'AI Marketing Solutions for Consulting Firms | SpotCircuit',
    description: 'Scale your consulting practice with AI-powered marketing that positions you as an industry thought leader and attracts ideal clients.',
    url: 'https://www.spotcircuit.com/industries/consulting',
    images: ['/static/images/consulting-og.webp'],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Solutions for Consulting Firms | SpotCircuit',
    description: 'Scale your consulting practice with AI-powered marketing that positions you as an industry thought leader and attracts ideal clients.',
    images: ['/static/images/consulting-og.webp'],
    creator: '@spotcircuit',
  },
};