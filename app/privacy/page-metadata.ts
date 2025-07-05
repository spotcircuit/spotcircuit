import type { Metadata } from 'next';

export const privacyMetadata: Metadata = {
  title: 'Privacy Policy | SpotCircuit',
  description: 'Learn how SpotCircuit collects, uses, and protects your personal data. Our privacy policy outlines our commitment to safeguarding your information.',
  keywords: 'privacy policy, data protection, personal information, GDPR, data security, SpotCircuit privacy',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | SpotCircuit',
    description: 'Learn how SpotCircuit collects, uses, and protects your personal data. Our privacy policy outlines our commitment to safeguarding your information.',
    url: 'https://spotcircuit.com/privacy',
    images: [
      {
        url: '/static/images/services.webp',
        width: 1200,
        height: 630,
        alt: 'SpotCircuit Privacy Policy',
      },
    ],
  },
  twitter: {
    title: 'Privacy Policy | SpotCircuit',
    description: 'Learn how SpotCircuit collects, uses, and protects your personal data. Our privacy policy outlines our commitment to safeguarding your information.',
  },
};
