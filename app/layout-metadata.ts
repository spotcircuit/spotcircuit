import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spotcircuit.com';

export const metadata: Metadata = {
  title: 'SpotCircuit - AI-Powered Local SEO & Marketing',
  description: 'Optimize your local business with AI-powered SEO and marketing solutions from SpotCircuit. Increase visibility, attract more customers, and grow your business.',
  keywords: ['local SEO', 'digital marketing', 'AI marketing', 'business growth', 'online visibility'],
  authors: [{ name: 'SpotCircuit Team' }],
  creator: 'SpotCircuit',
  publisher: 'SpotCircuit',
  generator: 'Next.js',
  applicationName: 'SpotCircuit',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'SpotCircuit - AI-Powered Local SEO & Marketing',
    description: 'Optimize your local business with AI-powered SEO and marketing solutions',
    url: baseUrl,
    siteName: 'SpotCircuit',
    images: [
      {
        url: new URL('/og-image.jpg', baseUrl).toString(),
        width: 1200,
        height: 630,
        alt: 'SpotCircuit - AI-Powered Local SEO & Marketing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpotCircuit - AI-Powered Local SEO & Marketing',
    description: 'Optimize your local business with AI-powered SEO and marketing solutions',
    images: [{
      url: new URL('/og-image.jpg', baseUrl).toString(),
      alt: 'SpotCircuit - AI-Powered Local SEO & Marketing',
    }],
    creator: '@spotcircuit',
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover' as const,
  interactiveWidget: 'resizes-visual' as const,
};
