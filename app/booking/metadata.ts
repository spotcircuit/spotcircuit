import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Consultation | SpotCircuit',
  description: 'Schedule a free consultation with SpotCircuit to discuss your AI marketing needs and discover how we can accelerate your business growth.',
  keywords: 'book consultation, schedule meeting, free consultation, marketing consultation, AI strategy session',
  alternates: {
    canonical: 'https://www.spotcircuit.com/booking',
    languages: {
      'x-default': 'https://www.spotcircuit.com/booking',
      'en': 'https://www.spotcircuit.com/booking',
    },
  },
  openGraph: {
    title: 'Book a Consultation | SpotCircuit',
    description: 'Schedule a free consultation with SpotCircuit to discuss your AI marketing needs and discover how we can accelerate your business growth.',
    url: 'https://www.spotcircuit.com/booking',
    images: [
      {
        url: '/static/images/booking-og.webp',
        width: 1200,
        height: 630,
        alt: 'Book a Consultation with SpotCircuit',
      },
    ],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Consultation | SpotCircuit',
    description: 'Schedule a free consultation with SpotCircuit to discuss your AI marketing needs and discover how we can accelerate your business growth.',
    images: ['/static/images/booking-og.webp'],
    creator: '@spotcircuit',
  },
};