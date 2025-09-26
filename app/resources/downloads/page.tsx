import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedContent from '@/components/RelatedContent';

export const metadata = {
  title: 'Downloads | SpotCircuit',
  description: 'Download free marketing resources, SEO checklists, and growth templates. Access comprehensive PDFs and spreadsheets to accelerate your business growth.',
  alternates: {
    canonical: 'https://www.spotcircuit.com/resources/downloads',
    languages: {
      'x-default': 'https://www.spotcircuit.com/resources/downloads',
      'en': 'https://www.spotcircuit.com/resources/downloads',
    },
  },
  openGraph: {
    title: 'Downloads | SpotCircuit',
    description: 'Free marketing resources and checklists to help you grow. Download PDFs and spreadsheets.',
    url: 'https://www.spotcircuit.com/resources/downloads',
    images: ['/static/images/downloads-og.webp'],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Downloads | SpotCircuit',
    description: 'Free marketing resources and checklists to help you grow. Download PDFs and spreadsheets.',
    images: ['/static/images/downloads-og.webp'],
    creator: '@spotcircuit',
  },
};

const items = [
  {
    title: 'Local SEO Checklist (PDF)',
    href: '/downloads/local-seo-checklist.pdf',
    description: 'Printable checklist covering GBP, NAP, reviews, and on‑page essentials.',
    tag: 'PDF'
  },
  {
    title: 'Local SEO Checklist (XLSX)',
    href: '/resources/downloads/local-seo-checklist',
    description: 'Spreadsheet version with owners and statuses (download from detail page).',
    tag: 'XLSX'
  }
];

export default function DownloadsIndexPage() {
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
    { name: 'Downloads', url: '/resources/downloads' },
  ];

  const related = [
    { title: 'API Docs', href: '/api-docs', tag: 'Developers' },
    { title: 'Tools', href: '/tools', tag: 'Utilities' },
    { title: 'Solutions', href: '/solutions', tag: 'Overview' },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Breadcrumbs items={crumbs} />
      <h1 className="text-3xl font-bold text-white">Downloads</h1>
      <p className="mt-2 text-white/80 max-w-2xl">Grab free checklists and templates to accelerate your growth programs.</p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((d) => (
          <article key={d.href} className="rounded-lg border border-white/10 bg-white/5 p-4">
            <h2 className="text-lg font-semibold text-white">
              <a href={d.href} className="hover:underline">{d.title}</a>
            </h2>
            <p className="text-sm text-white/80 mt-1">{d.description}</p>
            <span className="inline-block mt-2 text-xs text-blue-300 bg-blue-900/40 px-2 py-0.5 rounded">{d.tag}</span>
          </article>
        ))}
      </section>

      <RelatedContent title="Related" items={related} />
    </main>
  );
}
