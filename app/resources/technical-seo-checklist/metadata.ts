import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical SEO Audit Checklist: The Complete Guide | SpotCircuit',
  description: "Our comprehensive technical SEO audit checklist helps you identify and fix the technical issues affecting your website's search visibility and performance.",
  keywords: 'technical SEO checklist, technical SEO audit, site crawlability, indexation issues, mobile optimization, page speed optimization, technical SEO tools, SEO audit guide',
  authors: [{ name: 'SpotCircuit Team' }],
  creator: 'SpotCircuit',
  publisher: 'SpotCircuit',
  openGraph: {
    type: 'article',
    title: 'Technical SEO Audit Checklist: The Complete Guide',
    description: "A comprehensive checklist to identify and fix technical SEO issues affecting your website's search performance.",
    url: 'https://www.spotcircuit.com/resources/technical-seo-checklist',
    images: [{
      url: '/static/images/tech-seo-checklist-og.png',
      width: 1200,
      height: 630,
      alt: 'Technical SEO Audit Checklist',
    }],
    siteName: 'SpotCircuit',
    locale: 'en_US',
    publishedTime: '2025-04-01T00:00:00.000Z',
    modifiedTime: '2025-04-01T00:00:00.000Z',
    authors: ['SpotCircuit Team'],
    section: 'Resources',
    tags: ['Technical SEO', 'SEO Audit', 'Crawlability', 'Page Speed', 'Mobile-Friendly', 'Structured Data'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical SEO Audit Checklist: The Complete Guide',
    description: "Identify and fix technical issues affecting your website's search performance.",
    images: ['/static/images/tech-seo-checklist-og.png'],
    creator: '@spotcircuit',
  },
  alternates: {
    canonical: '/resources/technical-seo-checklist',
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
  category: 'SEO',
  classification: 'guide',
  other: {
    'article:author': 'SpotCircuit Team',
    'article:section': 'Technical SEO',
    'article:tag': 'Technical SEO, SEO Audit, Website Performance',
  },
};