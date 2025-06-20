import type { Metadata } from 'next';

export const servicesMetadata: Metadata = {
  title: 'AI-Powered Home Service Business Solutions | SpotCircuit',
  description: 'Custom AI automation and SEO solutions for home service businesses. Optimize scheduling, generate leads, build teams faster, and reclaim your time.',
  keywords: 'home service business automation, AI for contractors, HVAC marketing, plumber SEO, roofing leads, local service automation, field service optimization',
  openGraph: {
    title: 'AI-Powered Home Service Business Solutions | SpotCircuit',
    description: 'Custom AI automation and SEO solutions for home service businesses. Optimize scheduling, generate leads, build teams faster, and reclaim your time.',
    url: 'https://spotcircuit.com/services',
    images: [
      {
        url: '/static/images/services.webp',
        width: 1200,
        height: 630,
        alt: 'SpotCircuit Home Service Business Solutions',
      },
    ],
  },
  twitter: {
    title: 'AI-Powered Home Service Business Solutions | SpotCircuit',
    description: 'Custom AI automation and SEO solutions for home service businesses. Optimize scheduling, generate leads, build teams faster, and reclaim your time.',
    images: ['/static/images/services.webp'],
  },
};
