import React from 'react';
import Link from 'next/link';

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-16 md:py-24 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Demo</h1>
        <p className="text-blue-100 max-w-2xl mx-auto mb-8">
          Want to see SpotCircuit in action? Schedule a live walkthrough tailored to your business.
        </p>
        <Link href="/contact" className="inline-block">
          <span className="bg-white text-black font-semibold py-3 px-6 rounded-lg">Schedule Now</span>
        </Link>
      </section>
    </main>
  );
}
