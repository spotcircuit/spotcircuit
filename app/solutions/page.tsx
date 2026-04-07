import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedContent from '@/components/RelatedContent';

export const metadata = {
  title: 'Solutions | SpotCircuit',
  description: 'Discover SpotCircuit\'s comprehensive AI solutions: ClientCircuit for pipeline growth, ContentCircuit for content operations, AnalyticsCircuit for insights, and ChatCircuit for conversational experiences.',
  alternates: {
    canonical: 'https://www.spotcircuit.com/solutions',
    languages: {
      'x-default': 'https://www.spotcircuit.com/solutions',
      'en': 'https://www.spotcircuit.com/solutions',
    },
  },
  openGraph: {
    title: 'Solutions | SpotCircuit',
    description: 'Explore SpotCircuit solutions: ClientCircuit, ContentCircuit, AnalyticsCircuit, and ChatCircuit.',
    url: 'https://www.spotcircuit.com/solutions',
    images: ['/static/images/solutions-og.webp'],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions | SpotCircuit',
    description: 'Explore SpotCircuit solutions: ClientCircuit, ContentCircuit, AnalyticsCircuit, and ChatCircuit.',
    images: ['/static/images/solutions-og.webp'],
    creator: '@spotcircuit',
  },
};

const solutions = [
  {
    title: 'ClientCircuit',
    href: '/solutions/clientcircuit',
    description: 'Pipeline growth with AI-assisted capture and nurturing.'
  },
  {
    title: 'ContentCircuit',
    href: '/solutions/contentcircuit',
    description: 'Content operations for AI search visibility and engagement.'
  },
  {
    title: 'AnalyticsCircuit',
    href: '/solutions/analyticscircuit',
    description: 'Attribution and ROI insights that drive better decisions.'
  },
  {
    title: 'ChatCircuit',
    href: '/solutions/chatcircuit',
    description: 'Conversational experiences that convert across channels.'
  }
];

export default function SolutionsIndexPage() {
  const crumbs = [
    { name: 'Home', url: '/' },
    { name: 'Solutions', url: '/solutions' },
  ];

  const related = [
    { title: 'Services', href: '/services', tag: 'Overview' },
    { title: 'Case Studies', href: '/case-studies', tag: 'Proof' },
    { title: 'Resources', href: '/resources', tag: 'Library' },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Breadcrumbs items={crumbs} />
      <h1 className="text-3xl font-bold text-white">Solutions</h1>
      <p className="mt-2 text-white/80 max-w-2xl">Choose the solution that aligns with your growth priorities.</p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {solutions.map((s) => (
          <article key={s.href} className="rounded-lg border border-white/10 bg-white/5 p-4">
            <h2 className="text-lg font-semibold text-white">
              <a href={s.href} className="hover:underline">{s.title}</a>
            </h2>
            <p className="text-sm text-white/80 mt-1">{s.description}</p>
          </article>
        ))}
      </section>

      <RelatedContent title="Related" items={related} />
    </main>
  );
}
