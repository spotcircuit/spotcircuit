import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Marketing Resources & Guides | SpotCircuit',
  description: 'Access our library of free marketing resources, guides, templates, and tools to improve your SEO, content strategy, and digital marketing results.',
  keywords: 'marketing resources, SEO guides, digital marketing tools, content strategy templates, AI search optimization, local SEO guide',
  authors: [{ name: 'SpotCircuit Team' }],
  creator: 'SpotCircuit',
  publisher: 'SpotCircuit',
  openGraph: {
    type: 'website',
    title: 'Free Marketing Resources & Guides | SpotCircuit',
    description: 'Access our library of free marketing resources, guides, templates, and tools to improve your digital marketing results.',
    url: 'https://www.spotcircuit.com/resources',
    images: [{
      url: '/static/images/resources-og.png',
      width: 1200,
      height: 630,
      alt: 'SpotCircuit Marketing Resources',
    }],
    siteName: 'SpotCircuit',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Marketing Resources & Guides | SpotCircuit',
    description: 'Access our library of free marketing resources, guides, templates, and tools.',
    images: ['/static/images/resources-og.png'],
    creator: '@spotcircuit',
  },
  alternates: {
    canonical: '/resources',
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
  category: 'resources',
  classification: 'marketing',
};