import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata-helpers';

export const metadata: Metadata = createMetadata(
  'HVAC Business Automation Platform | Book 3 More Jobs Weekly | SpotCircuit',
  'AI-powered scheduling & client management for HVAC businesses. Book 25% more appointments in 60 days or your implementation fee is refunded.',
  '/industries/hvac',
  {
    keywords: 'HVAC automation, HVAC business software, HVAC scheduling, HVAC client management, HVAC business growth, automated booking, HVAC marketing',
    openGraph: {
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
      images: ['/static/images/hvac-dashboard.jpg'],
    },
  }
);
