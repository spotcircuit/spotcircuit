import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedContent from '@/components/RelatedContent';
import SoftwareApplicationSchema from '@/app/components/SoftwareApplicationSchema';

export const metadata = {
  title: 'ROI Calculator | SpotCircuit',
  description: 'Estimate ROI from improvements in traffic, conversion rate, and deal size. Plan growth scenarios with SpotCircuit.',
};

export default function ROICalculatorPage() {
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
    { name: 'ROI Calculator', url: '/roi-calculator' },
  ];

  const related = [
    { title: 'Lead Generation Analytics', href: '/lead-generation/analytics', tag: 'Playbook' },
    { title: 'AI Search Visibility', href: '/ai-search-visibility', tag: 'Guide' },
    { title: 'Webinars', href: '/webinars', tag: 'Sessions' },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Breadcrumbs items={crumbs} />
      <h1 className="text-3xl font-bold text-white">ROI Calculator</h1>
      <p className="mt-2 text-white/80 max-w-2xl">Adjust inputs to estimate impact on pipeline and revenue. Use it to prioritize growth work.</p>

      {/* Placeholder form UI */}
      <form className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col">
          <span className="text-sm text-white/80 mb-1">Monthly visitors</span>
          <input type="number" className="rounded bg-white/10 border border-white/10 px-3 py-2 text-white" defaultValue={10000} />
        </label>
        <label className="flex flex-col">
          <span className="text-sm text-white/80 mb-1">Conversion rate (%)</span>
          <input type="number" className="rounded bg-white/10 border border-white/10 px-3 py-2 text-white" defaultValue={2.5} step={0.1} />
        </label>
        <label className="flex flex-col">
          <span className="text-sm text-white/80 mb-1">Close rate (%)</span>
          <input type="number" className="rounded bg-white/10 border border-white/10 px-3 py-2 text-white" defaultValue={20} step={1} />
        </label>
        <label className="flex flex-col">
          <span className="text-sm text-white/80 mb-1">Avg. deal size (USD)</span>
          <input type="number" className="rounded bg-white/10 border border-white/10 px-3 py-2 text-white" defaultValue={5000} step={100} />
        </label>
      </form>

      <section className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
        <p className="text-white/80 text-sm">Tip: Pair this with attribution tracking in your analytics to verify improvements.</p>
      </section>

      <RelatedContent items={related} />

      <SoftwareApplicationSchema
        name="ROI Calculator"
        description="Estimate ROI from improvements in traffic, conversion, close rate, and deal size."
        url="https://spotcircuit.com/roi-calculator"
        applicationCategory="BusinessApplication"
        operatingSystem="Web"
        offers={[{ price: 0, priceCurrency: 'USD' }]}
      />
    </main>
  );
}
