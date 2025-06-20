'use client';

import React from 'react';
import Script from 'next/script';

export default function ElectricalServiceSchema() {
  // Define electrical service schema
  const electricalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://spotcircuit.com/local-services/#electrical-service',
    'name': 'Electrical Contractor Marketing Services',
    'description': 'AI-powered marketing solutions designed specifically for electrical contractors to increase leads, improve online reputation, and maximize ROI.',
    'provider': {
      '@type': 'Organization',
      'name': 'SpotCircuit',
      'url': 'https://spotcircuit.com'
    },
    'serviceType': 'Digital Marketing for Electricians',
    'areaServed': [
      'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
      'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin'
    ],
    'audience': {
      '@type': 'Audience',
      'audienceType': 'Electrical Contractors'
    },
    'serviceOutput': 'Increased leads, improved online visibility, and higher ROI for electrical contracting businesses',
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
      'name': 'Electrical Contractor Marketing Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Local SEO for Electricians',
            'description': 'Optimize your electrical business for local search results and Google Maps visibility.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Electrician Website Design',
            'description': 'Custom website design optimized for electrical service businesses to convert visitors into customers.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Electrician PPC Advertising',
            'description': 'Targeted pay-per-click advertising campaigns to generate immediate leads for your electrical business.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Electrical Contractor Review Management',
            'description': 'Build and manage your online reputation with automated review collection and response systems.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Emergency Service Marketing',
            'description': 'Specialized marketing for emergency electrical services to capture urgent service requests.'
          }
        }
      ]
    }
  };

  return (
    <Script
      id="electrical-service-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(electricalServiceSchema) }}
    />
  );
}
