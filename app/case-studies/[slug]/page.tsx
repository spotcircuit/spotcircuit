import React from 'react';
import Link from 'next/link';

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-16 md:py-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title} Case Study</h1>
        <p className="text-blue-100 max-w-2xl mb-8">
          We're preparing a detailed write-up for this case study. In the meantime, explore our overview page for highlights and related results.
        </p>
        <div className="flex gap-4">
          <Link href="/case-studies" className="inline-block"><span className="bg-white text-black font-semibold py-3 px-6 rounded-lg">View All Case Studies</span></Link>
          <Link href="/contact" className="inline-block"><span className="bg-transparent border border-white/40 text-white font-semibold py-3 px-6 rounded-lg">Request Details</span></Link>
        </div>
      </section>
    </main>
  );
}
