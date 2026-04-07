import React from 'react';
import Link from 'next/link';

export default function IntegrationPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-16 md:py-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title} Integrations</h1>
        <p className="text-blue-100 max-w-2xl mb-8">
          We're building dedicated integration guides and connectors for {title}. In the meantime, contact us to discuss your integration needs and timeline.
        </p>
        <Link href="/contact" className="inline-block">
          <span className="bg-white text-black font-semibold py-3 px-6 rounded-lg">Contact Us</span>
        </Link>
      </section>
    </main>
  );
}
