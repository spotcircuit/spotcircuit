import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedContent from '@/components/RelatedContent';
import FaqSchema from '@/app/components/FaqSchema';
import OptimizedImage from '@/app/components/OptimizedImage';

export const metadata = {
  title: 'Local SEO Checklist (Download) | SpotCircuit',
  description: 'Free local SEO checklist to improve visibility in maps and AI results. Download PDF/XLSX and follow step-by-step best practices.',
};

const faqs = [
  { question: 'Is the checklist free?', answer: 'Yes, both PDF and XLSX formats are free to download.' },
  { question: 'How often is it updated?', answer: 'We review it quarterly to reflect ranking and AI search changes.' },
];

export default function LocalSEOChecklistDownloadPage() {
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
    { name: 'Downloads', url: '/resources' },
    { name: 'Local SEO Checklist', url: '/resources/downloads/local-seo-checklist' },
  ];

  const related = [
    { title: 'Local SEO Guide', href: '/resources/local-seo-guide', tag: 'Guide' },
    { title: 'AI Search Optimization', href: '/resources/ai-search-optimization', tag: 'Guide' },
    { title: 'Technical SEO Checklist', href: '/resources/technical-seo-checklist', tag: 'Checklist' },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Breadcrumbs items={crumbs} />
      <h1 className="text-3xl font-bold text-white">Local SEO Checklist</h1>
      <p className="mt-2 text-white/80 max-w-2xl">A practical, step-by-step checklist to improve local visibility and conversions. Download as PDF or spreadsheet.</p>

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <a
          className="rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
          href="/downloads/local-seo-checklist.pdf"
        >
          <h2 className="text-lg font-semibold text-white">Download PDF</h2>
          <p className="text-sm text-white/80 mt-1">Printable version with sections and guidance.</p>
        </a>
        <a
          className="rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
          href="/resources/downloads/local-seo-checklist.xlsx"
        >
          <h2 className="text-lg font-semibold text-white">Download XLSX</h2>
          <p className="text-sm text-white/80 mt-1">Spreadsheet with checkboxes and owners.</p>
        </a>
      </section>

      <section className="mt-8 rounded-lg border border-white/10 bg-white/5 p-4">
        <h2 className="text-lg font-semibold text-white">What’s inside</h2>
        <ul className="mt-2 list-disc list-inside text-white/80 text-sm">
          <li>GBP optimization, NAP consistency, and citation hygiene</li>
          <li>On-page, internal linking, and local content</li>
          <li>Reviews, UGC, and E-E-A-T elements</li>
        </ul>
      </section>

      <RelatedContent title="Related resources" items={related} />

      <FaqSchema faqs={faqs} schemaType="FAQPage" id="local-seo-checklist-faq" />
    </main>
  );
}
