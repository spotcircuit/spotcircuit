import React from 'react';
import Script from 'next/script';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: string;
  areaServed?: string[];
  serviceType?: string;
}

export default function ServiceSchema({
  name,
  description,
  url,
  image,
  provider = 'SpotCircuit',
  areaServed = ['United States'],
  serviceType
}: ServiceSchemaProps) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.spotcircuit.com/#organization',
      name: provider,
      url: 'https://www.spotcircuit.com'
    },
    url,
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image
      }
    }),
    ...(serviceType && {
      category: serviceType,
      additionalType: `https://schema.org/${serviceType.replace(/\s+/g, '')}`
    }),
    areaServed: areaServed.map(area => ({
      '@type': area === 'United States' ? 'Country' : 'State',
      name: area
    })),
    serviceOutput: 'Business Growth and Optimization',
    audience: {
      '@type': 'Audience',
      audienceType: 'Business'
    },
    brand: {
      '@type': 'Brand',
      name: 'SpotCircuit'
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      availableLanguage: ['English'],
      serviceUrl: url,
      processingTime: 'P1D'
    }
  };

  return (
    <Script id="service-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(serviceSchema)}
    </Script>
  );
}