import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedContent from '@/components/RelatedContent';
import FaqSchema from '@/app/components/FaqSchema';

export const metadata = {
  title: 'API Docs | SpotCircuit',
  description: 'Complete SpotCircuit API documentation covering authentication, endpoints, rate limits, and changelog. Integrate our AI-powered marketing solutions easily.',
  alternates: {
    canonical: 'https://www.spotcircuit.com/api-docs',
    languages: {
      'x-default': 'https://www.spotcircuit.com/api-docs',
      'en': 'https://www.spotcircuit.com/api-docs',
    },
  },
  openGraph: {
    title: 'API Docs | SpotCircuit',
    description: 'Overview of SpotCircuit API documentation: authentication, endpoints, rate limits, and changelog stub.',
    url: 'https://www.spotcircuit.com/api-docs',
    images: ['/static/images/api-docs-og.webp'],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'API Docs | SpotCircuit',
    description: 'Overview of SpotCircuit API documentation: authentication, endpoints, rate limits, and changelog stub.',
    images: ['/static/images/api-docs-og.webp'],
    creator: '@spotcircuit',
  },
};

const faqs = [
  { question: 'Is there a public API?', answer: 'This page is a placeholder for the initial API surface. Join the waitlist to get notified.' },
  { question: 'How do I get an API key?', answer: 'We will announce key distribution when endpoints are ready for partners.' },
];

export default function ApiDocsPage() {
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Developers', url: '/api-docs' },
  ];

  const related = [
    { title: 'AI Automation', href: '/ai-automation', tag: 'Guide' },
    { title: 'Resources', href: '/resources', tag: 'Library' },
    { title: 'Webinars', href: '/webinars', tag: 'Sessions' },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Breadcrumbs items={crumbs} />
      <h1 className="text-3xl font-bold text-white">API Documentation</h1>
      <p className="mt-2 text-white/80 max-w-2xl">Authentication model, endpoints, and usage guidelines will be posted here as features roll out.</p>

      <section className="mt-8 rounded-lg border border-white/10 bg-white/5 p-4">
        <h2 className="text-lg font-semibold text-white">Changelog (stub)</h2>
        <ul className="mt-2 list-disc list-inside text-white/80 text-sm">
          <li>v0.1: Placeholder with planned endpoints for analytics and content automation.</li>
        </ul>
      </section>

      <RelatedContent title="Related resources" items={related} />

      {/* JSON-LD FAQ */}
      <FaqSchema faqs={faqs} schemaType="FAQPage" id="api-faq" />
    </main>
  );
}
