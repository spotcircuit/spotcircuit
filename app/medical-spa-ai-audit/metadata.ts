import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spotcircuit.com';

export const metadata: Metadata = {
  title: 'Free AI Visibility Audit for Medical Spas | SpotCircuit',
  description: 'Discover why AI recommends your competitors over you. Get a free personalized audit showing exactly how to make your medical spa AI search ready.',
  keywords: [
    'medical spa AI audit',
    'AI search visibility',
    'ChatGPT medical spa',
    'AI recommendations medspa',
    'medical spa marketing',
    'AI search optimization',
    'medspa SEO',
    'aesthetic practice marketing'
  ],
  openGraph: {
    title: 'Is Your Medical Spa Invisible to AI? Get Your Free Audit',
    description: '40% of patients now search via AI before booking treatments. See exactly what ChatGPT says about your med spa vs competitors.',
    url: `${baseUrl}/medical-spa-ai-audit`,
    siteName: 'SpotCircuit',
    images: [
      {
        url: `${baseUrl}/og-medical-spa-ai-audit.jpg`,
        width: 1200,
        height: 630,
        alt: 'Medical Spa AI Visibility Audit',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Visibility Audit for Medical Spas',
    description: 'Discover why AI recommends your competitors. Get your personalized audit in 48 hours.',
    images: [`${baseUrl}/og-medical-spa-ai-audit.jpg`],
  },
  alternates: {
    canonical: `/medical-spa-ai-audit`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};