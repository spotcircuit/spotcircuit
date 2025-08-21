'use client';

import Script from 'next/script';
import { sanitizeSchema } from '@/lib/schema-validation';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  provider?: string | {
    '@type': string;
    name: string;
    url?: string;
  };
  areaServed?: string[];
  hasOfferCatalog?: {
    name: string;
    itemListElement: {
      name: string;
      description?: string;
    }[];
  };
  offers?: {
    price?: string | number;
    priceCurrency?: string;
    priceValidUntil?: string;
    availability?: string;
  };
  image?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export default function ServiceSchema(props: ServiceSchemaProps) {
  const {
    name,
    description,
    url,
    serviceType,
    provider,
    areaServed,
    hasOfferCatalog,
    offers,
    image,
    aggregateRating
  } = props;

  const schemaData = sanitizeSchema({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    ...(serviceType && { serviceType }),
    ...(provider && {
      provider: typeof provider === 'string' 
        ? {
            '@type': 'Organization',
            name: provider
          }
        : provider
    }),
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image
      }
    }),
    ...(areaServed && areaServed.length > 0 && {
      areaServed: areaServed.map(area => ({
        '@type': 'State',
        name: area
      }))
    }),
    ...(hasOfferCatalog && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: hasOfferCatalog.name,
        itemListElement: hasOfferCatalog.itemListElement.map((item, index) => ({
          '@type': 'Offer',
          position: index + 1,
          name: item.name,
          ...(item.description && { description: item.description })
        }))
      }
    }),
    ...(offers && {
      offers: {
        '@type': 'Offer',
        ...(offers.price && { price: offers.price }),
        ...(offers.priceCurrency && { priceCurrency: offers.priceCurrency }),
        ...(offers.priceValidUntil && { priceValidUntil: offers.priceValidUntil }),
        ...(offers.availability && { availability: offers.availability })
      }
    }),
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
        bestRating: 5,
        worstRating: 1
      }
    })
  });

  return (
    <Script 
      id="service-schema" 
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }}
    />
  );
}