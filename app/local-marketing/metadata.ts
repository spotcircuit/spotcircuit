import { Metadata } from 'next';

const title = 'Local Service Marketing Solutions | SpotCircuit';
const description = 'AI-powered marketing automation for home service businesses. Dominate local search, automate lead generation, and fill your schedule with quality jobs.';
const keywords = 'local service marketing, contractor marketing, plumber marketing, HVAC marketing, electrician marketing, local SEO, home service marketing, local business marketing';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spotcircuit.com';

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: {
    canonical: '/local-marketing',
  },
  openGraph: {
    title,
    description,
    url: `${baseUrl}/local-marketing`,
    siteName: 'SpotCircuit',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/images/og/local-marketing.jpg`,
        width: 1200,
        height: 630,
        alt: 'Local Service Marketing Solutions by SpotCircuit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [{
      url: `${baseUrl}/images/og/local-marketing.jpg`,
      alt: 'Local Service Marketing Solutions by SpotCircuit',
    }],
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
};
