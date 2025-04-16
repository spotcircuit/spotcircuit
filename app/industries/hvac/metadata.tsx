import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC Business Automation Platform | Book 3 More Jobs Weekly | SpotCircuit',
  description: 'AI-powered scheduling & client management for HVAC businesses. Book 25% more appointments in 60 days or your implementation fee is refunded.',
  keywords: 'HVAC automation, HVAC business software, HVAC scheduling, HVAC client management, HVAC business growth, automated booking, HVAC marketing',
  openGraph: {
    title: 'HVAC Business Automation Platform | Book 3 More Jobs Weekly',
    description: 'AI-powered scheduling & client management for HVAC businesses. Book 25% more appointments in 60 days or your implementation fee is refunded.',
    images: [
      {
        url: '/static/images/hvac-dashboard.jpg',
        width: 1200,
        height: 630,
        alt: 'HVAC Business Automation Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC Business Automation Platform | Book 3 More Jobs Weekly',
    description: 'AI-powered scheduling & client management for HVAC businesses. Book 25% more appointments in 60 days or your implementation fee is refunded.',
    images: ['/static/images/hvac-dashboard.jpg'],
  },
};
