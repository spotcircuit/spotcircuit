import React from 'react';

export default function ToolPage({ params }: { params: { slug: string } }) {
  const name = params.slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-16 md:py-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
        <p className="text-blue-100 max-w-2xl mb-8">This tool is coming soon. Check back shortly or contact us for early access.</p>
      </section>
    </main>
  );
}
