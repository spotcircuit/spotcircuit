import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Marketing Solutions for Medical Practices | SpotCircuit',
  description: 'Grow your medical practice with HIPAA-compliant AI marketing that attracts new patients and improves patient engagement.',
  keywords: 'medical practice marketing, healthcare marketing, doctor SEO, patient acquisition, medical clinic marketing, physician marketing',
  alternates: {
    canonical: 'https://www.spotcircuit.com/industries/medical',
    languages: {
      'x-default': 'https://www.spotcircuit.com/industries/medical',
      'en': 'https://www.spotcircuit.com/industries/medical',
    },
  },
  openGraph: {
    title: 'AI Marketing Solutions for Medical Practices | SpotCircuit',
    description: 'Grow your medical practice with HIPAA-compliant AI marketing that attracts new patients and improves patient engagement.',
    url: 'https://www.spotcircuit.com/industries/medical',
    images: ['/static/images/medical-og.webp'],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Solutions for Medical Practices | SpotCircuit',
    description: 'Grow your medical practice with HIPAA-compliant AI marketing that attracts new patients and improves patient engagement.',
    images: ['/static/images/medical-og.webp'],
    creator: '@spotcircuit',
  },
};