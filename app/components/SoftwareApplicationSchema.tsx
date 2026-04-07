import React from 'react';
import Script from 'next/script';

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem?: string;
  offers?: {
    price: number;
    priceCurrency: string;
    priceValidUntil?: string;
  }[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export default function SoftwareApplicationSchema({
  name,
  description,
  url,
  applicationCategory,
  operatingSystem = 'Web',
  offers,
  aggregateRating
}: SoftwareApplicationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    ...(offers && {
      offers: offers.map(offer => ({
        '@type': 'Offer',
        price: offer.price,
        priceCurrency: offer.priceCurrency,
        ...(offer.priceValidUntil && { priceValidUntil: offer.priceValidUntil })
      }))
    }),
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount
      }
    })
  };

  return (
    <Script id="software-application-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  );
}