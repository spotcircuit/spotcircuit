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
    name,
    description,
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.spotcircuit.com/#organization',
      name: provider
    },
    url,
    ...(image && { image }),
    ...(serviceType && { serviceType }),
    areaServed: areaServed.map(area => ({
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        name: area
      }
    }))
  };

  return (
    <Script id="service-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(serviceSchema)}
    </Script>
  );
}