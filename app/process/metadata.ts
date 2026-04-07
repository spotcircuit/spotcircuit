import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Process | SpotCircuit',
  description: 'Learn about SpotCircuit\'s proven process for implementing AI-powered marketing solutions that drive real business results.',
  keywords: 'our process, how it works, implementation process, marketing strategy, AI implementation, business growth process',
  alternates: {
    canonical: 'https://www.spotcircuit.com/process',
    languages: {
      'x-default': 'https://www.spotcircuit.com/process',
      'en': 'https://www.spotcircuit.com/process',
    },
  },
  openGraph: {
    title: 'Our Process | SpotCircuit',
    description: 'Learn about SpotCircuit\'s proven process for implementing AI-powered marketing solutions that drive real business results.',
    url: 'https://www.spotcircuit.com/process',
    images: ['/static/images/process-og.webp'],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Process | SpotCircuit',
    description: 'Learn about SpotCircuit\'s proven process for implementing AI-powered marketing solutions that drive real business results.',
    images: ['/static/images/process-og.webp'],
    creator: '@spotcircuit',
  },
};