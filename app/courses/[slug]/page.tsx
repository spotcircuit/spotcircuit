import React from 'react';
import Link from 'next/link';

export default function CoursePage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-16 md:py-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-blue-100 max-w-2xl mb-8">This course is coming soon. Join the waitlist and well notify you when it launches.</p>
        <Link href="/contact" className="inline-block">
          <span className="bg-white text-black font-semibold py-3 px-6 rounded-lg">Join Waitlist</span>
        </Link>
      </section>
    </main>
  );
}
