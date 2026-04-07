import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Marketing Solutions for Medical Spas | SpotCircuit',
  description: 'Attract more clients to your medical spa with AI-powered marketing that showcases your treatments and builds trust with potential patients.',
  keywords: 'medical spa marketing, medspa marketing, aesthetic clinic marketing, botox marketing, laser treatment marketing, medspa SEO',
  alternates: {
    canonical: 'https://www.spotcircuit.com/industries/medical-spas',
    languages: {
      'x-default': 'https://www.spotcircuit.com/industries/medical-spas',
      'en': 'https://www.spotcircuit.com/industries/medical-spas',
    },
  },
  openGraph: {
    title: 'AI Marketing Solutions for Medical Spas | SpotCircuit',
    description: 'Attract more clients to your medical spa with AI-powered marketing that showcases your treatments and builds trust with potential patients.',
    url: 'https://www.spotcircuit.com/industries/medical-spas',
    images: ['/static/images/medical-spas-og.webp'],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Solutions for Medical Spas | SpotCircuit',
    description: 'Attract more clients to your medical spa with AI-powered marketing that showcases your treatments and builds trust with potential patients.',
    images: ['/static/images/medical-spas-og.webp'],
    creator: '@spotcircuit',
  },
};