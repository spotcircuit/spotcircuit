'use client';

import React from 'react';
import Script from 'next/script';

export default function PlumbingServiceSchema() {
  // Define plumbing service schema
  const plumbingServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.spotcircuit.com/local-services/#plumbing-service',
    'name': 'Plumbing Marketing Services',
    'description': 'AI-powered marketing solutions designed specifically for plumbing businesses to increase leads, improve online reputation, and maximize ROI.',
    'provider': {
      '@type': 'Organization',
      'name': 'SpotCircuit',
      'url': 'https://www.spotcircuit.com'
    },
    'serviceType': 'Digital Marketing for Plumbers',
    'areaServed': [
      'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
      'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin'
    ],
    'audience': {
      '@type': 'Audience',
      'audienceType': 'Plumbing Businesses'
    },
    'serviceOutput': 'Increased leads, improved online visibility, and higher ROI for plumbing businesses',
    'offers': {
      '@type': 'Offer',
      'price': '997',
      'priceCurrency': 'USD',
      'priceSpecification': {
        '@type': 'UnitPriceSpecification',
        'price': '997',
        'priceCurrency': 'USD',
        'unitText': 'month'
      }
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Plumbing Marketing Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Local SEO for Plumbers',
            'description': 'Optimize your plumbing business for local search results and Google Maps visibility.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Plumbing Website Design',
            'description': 'Custom website design optimized for plumbing service businesses to convert visitors into customers.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Plumber PPC Advertising',
            'description': 'Targeted pay-per-click advertising campaigns to generate immediate leads for your plumbing business.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Plumbing Review Management',
            'description': 'Build and manage your online reputation with automated review collection and response systems.'
          }
        }
      ]
    }
  };

  return (
    <Script
      id="plumbing-service-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(plumbingServiceSchema) }}
    />
  );
}
