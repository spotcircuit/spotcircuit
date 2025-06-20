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
    'itemListElement': items.map(item => ({
      '@type': 'ListItem',
      'position': item.position,
      'name': item.name,
      'item': item.url
    }))
  };

  return (
    <Script id="breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(breadcrumbSchema)}
    </Script>
  );
}