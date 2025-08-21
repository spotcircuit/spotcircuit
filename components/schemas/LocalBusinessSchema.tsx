'use client';

import Script from 'next/script';
import { sanitizeSchema } from '@/lib/schema-validation';

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string[];
  priceRange?: string;
  image?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  openingHours?: string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export default function LocalBusinessSchema(props: LocalBusinessSchemaProps) {
  const {
    name,
    description,
    url,
    serviceType,
    areaServed,
    priceRange,
    image,
    telephone,
    email,
    address,
    openingHours,
    aggregateRating
  } = props;

  const schemaData = sanitizeSchema({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${url}#localbusiness`,
    name,
    description,
    url,
    ...(serviceType && { additionalType: `https://schema.org/${serviceType}` }),
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image
      }
    }),
    ...(telephone && { telephone }),
    ...(email && { email }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address
      }
    }),
    ...(areaServed && areaServed.length > 0 && {
      areaServed: areaServed.map(area => ({
        '@type': 'State',
        name: area
      }))
    }),
    ...(priceRange && { priceRange }),
    ...(openingHours && openingHours.length > 0 && { openingHours }),
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
        bestRating: 5,
        worstRating: 1
      }
    }),
    potentialAction: {
      '@type': 'ContactAction',
      name: 'Contact Us',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: url,
        actionPlatform: [
          'https://schema.org/DesktopWebPlatform',
          'https://schema.org/MobileWebPlatform'
        ]
      }
    }
  });

  return (
    <Script 
      id="local-business-schema" 
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }}
    />
  );
}