import type { Metadata } from 'next';

export const accessibilityMetadata: Metadata = {
  title: 'Accessibility Statement | SpotCircuit',
  description: 'Learn about SpotCircuit\'s commitment to digital accessibility and our efforts to ensure our website is accessible to all users, including those with disabilities.',
  keywords: 'accessibility, web accessibility, WCAG, ADA compliance, accessible website, disability access, SpotCircuit accessibility',
  alternates: {
    canonical: 'https://www.spotcircuit.com/accessibility',
  },
  openGraph: {
    title: 'Accessibility Statement | SpotCircuit',
    description: 'Learn about SpotCircuit\'s commitment to digital accessibility and our efforts to ensure our website is accessible to all users, including those with disabilities.',
    url: 'https://www.spotcircuit.com/accessibility',
    images: [
      {
        url: '/static/images/services.webp',
        width: 1200,
        height: 630,
        alt: 'SpotCircuit Accessibility Statement',
      },
    ],
  },
  twitter: {
    title: 'Accessibility Statement | SpotCircuit',
    description: 'Learn about SpotCircuit\'s commitment to digital accessibility and our efforts to ensure our website is accessible to all users, including those with disabilities.',
  },
};
