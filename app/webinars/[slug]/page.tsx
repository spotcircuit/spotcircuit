import React from 'react';

export default function WebinarPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-16 md:py-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title} Webinar</h1>
        <p className="text-blue-100 max-w-2xl mb-8">This webinar page is being finalized. In the meantime, explore our resources or contact us for details.</p>
      </section>
    </main>
  );
}
