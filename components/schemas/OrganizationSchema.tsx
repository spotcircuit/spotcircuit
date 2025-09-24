import React from 'react';
import { Organization, WithContext } from 'schema-dts';

const OrganizationSchema: React.FC = () => {
  const schema: WithContext<Organization> = {
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
    } as any,
    image: {
      '@type': 'ImageObject',
      url: 'https://www.spotcircuit.com/spotcircuit-logo.png',
      width: 200,
      height: 60
    } as any,
    description: 'SpotCircuit helps businesses optimize content for large language models and AI search engines with a focus on semantic understanding and structured data.',
    foundingDate: '2023-01-01',
    foundingLocation: {
      '@type': 'Place',
      name: 'Seattle, WA'
    } as any,
    knowsAbout: [
      'AI Search Optimization',
      'Large Language Models',
      'Structured Data',
      'Schema.org Implementation',
      'SEO',
      'Content Optimization'
    ] as any,
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    } as any,
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
    ] as any,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 AI Drive',
      addressLocality: 'Seattle',
      addressRegion: 'WA',
      postalCode: '98101',
      addressCountry: 'US'
    } as any,
    brand: {
      '@type': 'Brand',
      name: 'SpotCircuit'
    } as any,
    slogan: 'AI-First SEO & LLM Optimization Platform' as any
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;
