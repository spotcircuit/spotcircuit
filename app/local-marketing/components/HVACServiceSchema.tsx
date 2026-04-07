'use client';

import React from 'react';
import Script from 'next/script';

export default function HVACServiceSchema() {
  // Define HVAC service schema
  const hvacServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.spotcircuit.com/local-services/#hvac-service',
    'name': 'HVAC Marketing Services',
    'description': 'AI-powered marketing solutions designed specifically for HVAC businesses to increase leads, improve online reputation, and maximize ROI.',
    'provider': {
      '@type': 'Organization',
      'name': 'SpotCircuit',
      'url': 'https://www.spotcircuit.com'
    },
    'serviceType': 'Digital Marketing for HVAC Companies',
    'areaServed': [
      'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
      'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin'
    ],
    'audience': {
      '@type': 'Audience',
      'audienceType': 'HVAC Businesses'
    },
    'serviceOutput': 'Increased leads, improved online visibility, and higher ROI for HVAC businesses',
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
      'name': 'HVAC Marketing Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Local SEO for HVAC',
            'description': 'Optimize your HVAC business for local search results and Google Maps visibility.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'HVAC Website Design',
            'description': 'Custom website design optimized for HVAC service businesses to convert visitors into customers.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'HVAC PPC Advertising',
            'description': 'Targeted pay-per-click advertising campaigns to generate immediate leads for your HVAC business.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'HVAC Review Management',
            'description': 'Build and manage your online reputation with automated review collection and response systems.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Seasonal HVAC Marketing',
            'description': 'Targeted campaigns for heating in winter and cooling in summer to maximize seasonal business opportunities.'
          }
        }
      ]
    }
  };

  return (
    <Script
      id="hvac-service-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(hvacServiceSchema) }}
    />
  );
}
