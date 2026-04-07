import React from 'react';
import Script from 'next/script';

interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': '#breadcrumb-list',
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      '@id': `#breadcrumb-item-${index + 1}`,
      position: item.position,
      name: item.name,
      item: {
        '@type': 'WebPage',
        '@id': `${item.url}#webpage`,
        name: item.name,
        url: item.url
      }
    }))
  };

  return (
    <Script id="breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(breadcrumbSchema)}
    </Script>
  );
}