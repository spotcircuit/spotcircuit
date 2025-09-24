import type { Metadata } from 'next';

export const cookiesMetadata: Metadata = {
  title: 'Cookie Policy | SpotCircuit',
  description: 'Learn about how SpotCircuit uses cookies and similar technologies on our website. Understand what cookies are, how we use them, and how you can manage them.',
  keywords: 'cookie policy, cookies, website cookies, tracking technologies, cookie management, SpotCircuit cookies',
  alternates: {
    canonical: 'https://www.spotcircuit.com/cookies',
  },
  openGraph: {
    title: 'Cookie Policy | SpotCircuit',
    description: 'Learn about how SpotCircuit uses cookies and similar technologies on our website. Understand what cookies are, how we use them, and how you can manage them.',
    url: 'https://www.spotcircuit.com/cookies',
    images: [
      {
        url: '/static/images/services.webp',
        width: 1200,
        height: 630,
        alt: 'SpotCircuit Cookie Policy',
      },
    ],
  },
  twitter: {
    title: 'Cookie Policy | SpotCircuit',
    description: 'Learn about how SpotCircuit uses cookies and similar technologies on our website. Understand what cookies are, how we use them, and how you can manage them.',
  },
};
