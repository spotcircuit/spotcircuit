import React from 'react';
import Script from 'next/script';

export default function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://spotcircuit.com/#organization',
    name: 'SpotCircuit',
    url: 'https://spotcircuit.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://spotcircuit.com/spotcircuit-logo.png',
      width: 200,
      height: 60
    },
    description: 'SpotCircuit helps businesses optimize content for large language models and AI search engines with a focus on semantic understanding and structured data.',
    sameAs: [
      'https://www.linkedin.com/company/spotcircuit',
      'https://twitter.com/spotcircuit'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: '+1-800-123-4567',
      email: 'info@spotcircuit.com'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 AI Drive',
      addressLocality: 'Seattle',
      addressRegion: 'WA',
      postalCode: '98101',
      addressCountry: 'US'
    }
  };

  return (
    <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(organizationSchema)}
    </Script>
  );
}