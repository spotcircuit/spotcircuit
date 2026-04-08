import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spotcircuit.com';

export const metadata: Metadata = {
  title: 'SpotCircuit - Agentic AI Engineering',
  description: 'Agentic AI engineering for teams that ship. Framework licensing, Claude Code implementation, knowledge bases, and data pipelines.',
  keywords: ['agentic AI', 'AI engineering', 'Claude Code', 'knowledge base', 'LLM framework', 'Clarity Framework'],
  authors: [{ name: 'Brian Pyatt' }],
  creator: 'SpotCircuit',
  publisher: 'SpotCircuit',
  generator: 'Next.js',
  applicationName: 'SpotCircuit',
  alternates: {
    canonical: 'https://www.spotcircuit.com/',
  },
  openGraph: {
    title: 'SpotCircuit - Agentic AI Engineering',
    description: 'Agentic AI engineering for teams that ship. Frameworks, Claude Code, knowledge bases, and data pipelines.',
    url: baseUrl,
    siteName: 'SpotCircuit',
    images: [
      {
        url: new URL('/og-image.jpg', baseUrl).toString(),
        width: 1200,
        height: 630,
        alt: 'SpotCircuit - Agentic AI Engineering',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpotCircuit - Agentic AI Engineering',
    description: 'Agentic AI engineering for teams that ship.',
    images: [{
      url: new URL('/og-image.jpg', baseUrl).toString(),
      alt: 'SpotCircuit - Agentic AI Engineering',
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
