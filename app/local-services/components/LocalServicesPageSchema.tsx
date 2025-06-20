'use client';

import React from 'react';
import Script from 'next/script';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import SpeakableSchema from '@/app/components/SpeakableSchema';
import PlumbingServiceSchema from './PlumbingServiceSchema';
import HVACServiceSchema from './HVACServiceSchema';
import ElectricalServiceSchema from './ElectricalServiceSchema';

export default function LocalServicesPageSchema() {
  // Define breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: 'https://spotcircuit.com/', position: 1 },
    { name: 'Local Services', url: 'https://spotcircuit.com/local-services/', position: 2 }
  ];

  // Define service areas
  const serviceAreas = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin'
  ];

  // Define local service types
  const serviceTypes = [
    {
      name: 'Plumbing Services',
      description: 'Professional plumbing services for residential and commercial properties',
      url: 'https://spotcircuit.com/local-services/#plumbing'
    },
    {
      name: 'HVAC Services',
      description: 'Heating, ventilation, and air conditioning installation and repair',
      url: 'https://spotcircuit.com/local-services/#hvac'
    },
    {
      name: 'Electrical Services',
      description: 'Residential and commercial electrical services and repairs',
      url: 'https://spotcircuit.com/local-services/#electrical'
    },
    {
      name: 'Contracting Services',
      description: 'General contracting and home improvement services',
      url: 'https://spotcircuit.com/local-services/#contracting'
    },
    {
      name: 'Roofing Services',
      description: 'Roof installation, repair, and maintenance services',
      url: 'https://spotcircuit.com/local-services/#roofing'
    }
  ];

  // JSON-LD schema for LocalBusiness
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://spotcircuit.com/local-services/#organization',
    'name': 'SpotCircuit Local Services',
    'description': 'AI-powered marketing solutions for local service businesses including plumbers, HVAC professionals, electricians, and contractors.',
    'url': 'https://spotcircuit.com/local-services/',
    'logo': 'https://spotcircuit.com/images/logo.png',
    'image': 'https://spotcircuit.com/images/local-services-hero.jpg',
    'telephone': '+1-800-123-4567',
    'email': 'info@spotcircuit.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '123 Marketing Ave',
      'addressLocality': 'San Francisco',
      'addressRegion': 'CA',
      'postalCode': '94105',
      'addressCountry': 'US'
    },
    'areaServed': serviceAreas.map(area => ({
      '@type': 'City',
      'name': area
    })),
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Local Service Marketing Solutions',
      'itemListElement': serviceTypes.map((service, index) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': service.name,
          'description': service.description,
          'url': service.url
        }
      }))
    },
    'sameAs': [
      'https://www.facebook.com/spotcircuit',
      'https://twitter.com/spotcircuit',
      'https://www.linkedin.com/company/spotcircuit',
      'https://www.instagram.com/spotcircuit'
    ]
  };

  // JSON-LD schema for Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://spotcircuit.com/local-services/#service',
    'name': 'Local Service Marketing',
    'description': 'AI-powered marketing solutions designed specifically for local service businesses to increase leads, improve online reputation, and maximize ROI.',
    'provider': {
      '@type': 'Organization',
      'name': 'SpotCircuit',
      'url': 'https://spotcircuit.com'
    },
    'serviceType': 'Digital Marketing',
    'areaServed': serviceAreas,
    'audience': {
      '@type': 'Audience',
      'audienceType': 'Local Service Businesses'
    },
    'serviceOutput': 'Increased leads, improved online visibility, and higher ROI for local service businesses',
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
    }
  };

  // Define CSS selectors for speakable content
  const speakableCssSelectors = [
    '.hero-description',
    '.services-overview h2',
    '.services-overview p',
    '.testimonial-section h2',
    '.testimonial-section blockquote',
    '.faq-section h3',
    '.faq-section p',
    '.cta-section h2',
    '.cta-section p'
  ];

  return (
    <>
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* SpeakableSchema for voice assistant optimization */}
      <SpeakableSchema 
        cssSelectors={speakableCssSelectors}
      />

      {/* LocalBusiness Schema */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      {/* Specific Service Schemas */}
      <PlumbingServiceSchema />
      <HVACServiceSchema />
      <ElectricalServiceSchema />
    </>
  );
}
