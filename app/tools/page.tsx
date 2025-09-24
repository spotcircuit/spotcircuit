import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedContent from '@/components/RelatedContent';
import SoftwareApplicationSchema from '@/app/components/SoftwareApplicationSchema';

export const metadata = {
  title: 'Marketing Tools | SpotCircuit',
  description: 'Free tools for AI search visibility, analytics, and automation. Explore calculators, generators, and checkers to grow pipeline.',
  alternates: {
    canonical: '/tools',
  },
};

const tools = [
  { name: 'AI Visibility Checker', href: '#', description: 'Assess how well your pages map to AI search patterns.' },
  { name: 'Schema Generator', href: '#', description: 'Create JSON-LD for common content types in minutes.' },
  { name: 'ROI Calculator', href: '/roi-calculator', description: 'Estimate ROI from lead-gen improvements.' },
];

export default function ToolsPage() {
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
  ];

  const related = [
    { title: 'AI Search Visibility', href: '/ai-search-visibility', tag: 'Guide' },
    { title: 'ROI Calculator', href: '/roi-calculator', tag: 'Tool' },
    { title: 'Resources', href: '/resources', tag: 'Library' },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Breadcrumbs items={crumbs} />
      <h1 className="text-3xl font-bold text-white">Marketing Tools</h1>
      <p className="mt-2 text-white/80 max-w-2xl">Use these free utilities to plan, optimize, and measure growth initiatives.</p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {tools.map((t) => (
          <article key={t.name} className="rounded-lg border border-white/10 bg-white/5 p-4">
            <h2 className="text-lg font-semibold text-white">
              <a href={t.href} className="hover:underline">{t.name}</a>
            </h2>
            <p className="text-sm text-white/80 mt-1">{t.description}</p>
          </article>
        ))}
      </section>

      <RelatedContent title="Related" items={related} />

      {/* SoftwareApplication schema for the primary tool on the page (ROI Calculator) */}
      <SoftwareApplicationSchema
        name="ROI Calculator"
        description="Estimate ROI from improvements in traffic, conversion, and average deal size."
        url="https://spotcircuit.com/roi-calculator"
        applicationCategory="BusinessApplication"
        operatingSystem="Web"
        offers={[{ price: 0, priceCurrency: 'USD' }]}
      />
    </main>
  );
}
