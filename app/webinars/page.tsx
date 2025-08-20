import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedContent from '@/components/RelatedContent';
import FaqSchema from '@/app/components/FaqSchema';

export const metadata = {
  title: 'Webinars | SpotCircuit',
  description: 'Explore SpotCircuit webinars: AI search visibility, lead generation analytics, and automation. Watch recordings and see upcoming sessions.',
};

const faqs = [
  { question: 'Do you provide webinar recordings?', answer: 'Yes, recordings are posted on this page within 3–5 days after each live session.' },
  { question: 'How do I register for upcoming webinars?', answer: 'Registration links are added to each webinar card when dates are announced.' },
  { question: 'Are webinars free?', answer: 'Yes. We keep them open to help the community learn and apply AI-driven marketing.' },
];

export default function WebinarsPage() {
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Webinars', url: '/webinars' },
  ];

  const related = [
    { title: 'AI Search Visibility', href: '/ai-search-visibility', tag: 'Guide' },
    { title: 'Lead Generation Analytics', href: '/lead-generation/analytics', tag: 'Playbook' },
    { title: 'AI Automation', href: '/ai-automation', tag: 'Guide' },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Breadcrumbs items={crumbs} />
      <h1 className="text-3xl font-bold text-white">Webinars</h1>
      <p className="mt-2 text-white/80 max-w-2xl">Deep dives on AI search visibility, analytics, and automation. Watch recordings and see what’s coming next.</p>

      {/* Placeholder grid for recordings/upcoming */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <article className="rounded-lg border border-white/10 bg-white/5 p-4">
          <h2 className="text-lg font-semibold text-white">AI Search Visibility Fundamentals</h2>
          <p className="text-sm text-white/80 mt-1">How to structure content and schema for AI-powered search experiences.</p>
        </article>
        <article className="rounded-lg border border-white/10 bg-white/5 p-4">
          <h2 className="text-lg font-semibold text-white">Lead Generation Analytics</h2>
          <p className="text-sm text-white/80 mt-1">Measuring pipeline, attribution, and ROI—without the noise.</p>
        </article>
      </section>

      <RelatedContent title="Related resources" items={related} />

      {/* JSON-LD FAQ */}
      <FaqSchema faqs={faqs} schemaType="FAQPage" id="webinars-faq" />
    </main>
  );
}
