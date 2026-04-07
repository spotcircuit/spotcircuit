import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Marketing Demo - See SpotCircuit in Action | SpotCircuit',
  description: 'Experience our AI-powered marketing platform firsthand. Book a live demo to see how SpotCircuit can transform your business growth and automate your marketing workflows.',
  keywords: 'SpotCircuit demo, AI marketing demo, marketing automation demo, live demo, product demonstration, AI platform demo',
  alternates: {
    canonical: 'https://www.spotcircuit.com/demo',
    languages: {
      'x-default': 'https://www.spotcircuit.com/demo',
      'en': 'https://www.spotcircuit.com/demo',
    },
  },
  openGraph: {
    title: 'AI Marketing Demo - See SpotCircuit in Action | SpotCircuit',
    description: 'Experience our AI-powered marketing platform firsthand. Book a live demo to see how SpotCircuit can transform your business growth and automate your marketing workflows.',
    url: 'https://www.spotcircuit.com/demo',
    images: ['/static/images/demo-og.webp'],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Demo - See SpotCircuit in Action | SpotCircuit',
    description: 'Experience our AI-powered marketing platform firsthand. Book a live demo to see how SpotCircuit can transform your business growth and automate your marketing workflows.',
    images: ['/static/images/demo-og.webp'],
    creator: '@spotcircuit',
  },
};