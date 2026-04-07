import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { generatePageMetadata } from '@/utils/metadata-generator';

export const metadata: Metadata = generatePageMetadata({
  pageType: 'industry',
  industry: 'landscaping'
});

export default function LandscapingIndustryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-16 md:py-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Landscaping Marketing</h1>
        <p className="text-blue-100 max-w-2xl mb-8">
          We help landscaping businesses grow with AI-powered lead generation, local SEO, and conversion optimization.
        </p>
        <div className="flex gap-4">
          <Link href="/contact" className="inline-block"><span className="bg-white text-black font-semibold py-3 px-6 rounded-lg">Talk to Us</span></Link>
          <Link href="/industries" className="inline-block"><span className="bg-transparent border border-white/40 text-white font-semibold py-3 px-6 rounded-lg">All Industries</span></Link>
        </div>
      </section>
    </main>
  );
}
