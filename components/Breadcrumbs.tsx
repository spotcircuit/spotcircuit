import React from 'react';
import Link from 'next/link';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <BreadcrumbSchema items={items} />
      
      <nav aria-label="breadcrumbs" className="mb-6">
        <ol className="flex flex-wrap items-center text-sm text-gray-400">
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {index === items.length - 1 ? (
                <span className="text-white font-medium" aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.url} className="hover:text-blue-400 transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}