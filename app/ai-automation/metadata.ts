import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation Solutions | SpotCircuit',
  description: 'Streamline your business operations with intelligent AI automation. Save time, reduce costs, and scale your business with our automation solutions.',
  keywords: 'AI automation, business automation, workflow automation, process automation, AI tools, marketing automation',
  alternates: {
    canonical: 'https://www.spotcircuit.com/ai-automation',
    languages: {
      'x-default': 'https://www.spotcircuit.com/ai-automation',
      'en': 'https://www.spotcircuit.com/ai-automation',
    },
  },
  openGraph: {
    title: 'AI Automation Solutions | SpotCircuit',
    description: 'Streamline your business operations with intelligent AI automation. Save time, reduce costs, and scale your business with our automation solutions.',
    url: 'https://www.spotcircuit.com/ai-automation',
    images: [{
      url: '/static/images/ai-automation-og.webp',
      width: 1200,
      height: 630,
      alt: 'AI Automation Solutions'
    }],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Solutions | SpotCircuit',
    description: 'Streamline your business operations with intelligent AI automation. Save time, reduce costs, and scale your business with our automation solutions.',
    images: [{
      url: '/static/images/ai-automation-og.webp',
      alt: 'AI Automation Solutions'
    }],
    creator: '@spotcircuit',
  },
};