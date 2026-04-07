import React from 'react';
import Script from 'next/script';

export default function WebsiteSchema() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.spotcircuit.com/#website',
    name: 'SpotCircuit',
    alternateName: 'SpotCircuit AI Platform',
    url: 'https://www.spotcircuit.com',
    description: 'AI-First SEO & LLM Optimization Platform',
    inLanguage: 'en-US',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@id': 'https://www.spotcircuit.com/#organization'
    },
    publisher: {
      '@id': 'https://www.spotcircuit.com/#organization'
    },
    about: [
      {
        '@type': 'Thing',
        name: 'AI Search Optimization'
      },
      {
        '@type': 'Thing',
        name: 'Large Language Models'
      },
      {
        '@type': 'Thing',
        name: 'Structured Data'
      }
    ],
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.spotcircuit.com/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      },
      {
        '@type': 'ReadAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.spotcircuit.com/blog/{article_slug}'
        }
      }
    ],
    mainEntity: {
      '@id': 'https://www.spotcircuit.com/#organization'
    }
  };

  return (
    <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(websiteSchema)}
    </Script>
  );
}