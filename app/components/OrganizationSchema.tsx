import React from 'react';
import Script from 'next/script';

export default function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.spotcircuit.com/#organization',
    name: 'SpotCircuit',
    alternateName: 'SpotCircuit AI',
    url: 'https://www.spotcircuit.com',
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://www.spotcircuit.com/#logo',
      url: 'https://www.spotcircuit.com/spotcircuit-logo.png',
      width: 200,
      height: 60,
      caption: 'SpotCircuit Logo'
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://www.spotcircuit.com/spotcircuit-logo.png',
      width: 200,
      height: 60
    },
    description: 'SpotCircuit helps businesses optimize content for large language models and AI search engines with a focus on semantic understanding and structured data.',
    foundingDate: '2023-01-01',
    foundingLocation: {
      '@type': 'Place',
      name: 'Seattle, WA'
    },
    knowsAbout: [
      'AI Search Optimization',
      'Large Language Models',
      'Structured Data',
      'Schema.org Implementation',
      'SEO',
      'Content Optimization'
    ],
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    sameAs: [
      'https://www.linkedin.com/company/spotcircuit',
      'https://twitter.com/spotcircuit'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: '+1-800-123-4567',
        email: 'info@spotcircuit.com',
        availableLanguage: ['English'],
        areaServed: 'US'
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'sales@spotcircuit.com',
        availableLanguage: ['English'],
        areaServed: 'US'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 AI Drive',
      addressLocality: 'Seattle',
      addressRegion: 'WA',
      postalCode: '98101',
      addressCountry: 'US'
    },
    brand: {
      '@type': 'Brand',
      name: 'SpotCircuit'
    },
    slogan: 'AI-First SEO & LLM Optimization Platform'
  };

  return (
    <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(organizationSchema)}
    </Script>
  );
}