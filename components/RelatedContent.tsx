import React from 'react';
import Link from 'next/link';

export interface RelatedItem {
  title: string;
  href: string;
  description?: string;
  tag?: string;
}

interface RelatedContentProps {
  title?: string;
  items: RelatedItem[];
}

export default function RelatedContent({ title = 'Related content', items }: RelatedContentProps) {
  if (!items?.length) return null;
  return (
    <section aria-labelledby="related-heading" className="mt-16">
      <h2 id="related-heading" className="text-xl font-semibold text-white mb-4">
        {title}
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.href} className="rounded-lg border border-white/10 bg-white/5 p-4">
            {item.tag && (
              <span className="inline-block text-xs text-white/70 bg-white/10 rounded px-2 py-0.5 mb-2">
                {item.tag}
              </span>
            )}
            <h3 className="text-base font-semibold text-white">
              <Link href={item.href} className="hover:underline">
                {item.title}
              </Link>
            </h3>
            {item.description && (
              <p className="mt-1 text-sm text-white/80">{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
