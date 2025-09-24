import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | SpotCircuit',
  description: 'Get in touch with SpotCircuit for AI-powered marketing solutions. Schedule a consultation or send us a message to discuss how we can help grow your business.',
  keywords: 'contact SpotCircuit, schedule consultation, marketing consultation, AI marketing help, business growth consultation',
  alternates: {
    canonical: 'https://www.spotcircuit.com/contact',
    languages: {
      'x-default': 'https://www.spotcircuit.com/contact',
      'en': 'https://www.spotcircuit.com/contact',
    },
  },
  openGraph: {
    title: 'Contact SpotCircuit | AI Marketing Solutions',
    description: 'Get in touch with SpotCircuit for AI-powered marketing solutions. Schedule a consultation to grow your business.',
    url: 'https://www.spotcircuit.com/contact',
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/static/images/contact-og.webp',
        width: 1200,
        height: 630,
        alt: 'Contact SpotCircuit for AI Marketing Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact SpotCircuit | AI Marketing Solutions',
    description: 'Get in touch with SpotCircuit for AI-powered marketing solutions. Schedule a consultation to grow your business.',
    images: ['/static/images/contact-og.webp'],
    creator: '@spotcircuit',
  },
};