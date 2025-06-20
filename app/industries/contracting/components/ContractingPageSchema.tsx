'use client';

import React from 'react';
import ServiceSchema from '@/app/components/ServiceSchema';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import EntitySchema from '@/app/components/EntitySchema';
import SpeakableSchema from '@/app/components/SpeakableSchema';

export default function ContractingPageSchema() {
  // Define breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: 'https://spotcircuit.com/' },
    { name: 'Industries', url: 'https://spotcircuit.com/industries/' },
    { name: 'Contracting', url: 'https://spotcircuit.com/industries/contracting/' }
  ];

  // Define related services
  const relatedEntities = [
    {
      name: 'Local SEO for Contractors',
      url: 'https://spotcircuit.com/services/local-seo/',
      description: 'Rank higher in local search results for contracting services',
      type: 'Service'
    },
    {
      name: 'Contractor PPC Advertising',
      url: 'https://spotcircuit.com/services/ppc/',
      description: 'Targeted pay-per-click campaigns for general contractors',
      type: 'Service'
    },
    {
      name: 'Contractor Reputation Management',
      url: 'https://spotcircuit.com/services/reputation/',
      description: 'Build and manage online reviews for your contracting business',
      type: 'Service'
    }
  ];

  return (
    <>
      {/* Service Schema for Contracting Marketing */}
      <ServiceSchema
        name="AI-Powered Marketing for General Contractors"
        description="Grow your contracting business with targeted digital marketing that generates qualified leads, builds your online reputation, and maximizes your ROI."
        url="https://spotcircuit.com/industries/contracting/"
        image="https://spotcircuit.com/images/contracting-marketing.jpg"
        provider="SpotCircuit"
        areaServed={['United States']}
        serviceType="Contractor Marketing Services"
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Entity Schema for Contracting Marketing */}
      <EntitySchema
        type="Service"
        name="Contractor Marketing Services"
        description="AI-powered marketing solutions designed specifically for general contractors to increase leads, improve online reputation, and maximize ROI."
        url="https://spotcircuit.com/industries/contracting/"
        image="https://spotcircuit.com/images/contracting-marketing.jpg"
        sameAs={[
          { url: 'https://www.linkedin.com/company/spotcircuit' },
          { url: 'https://twitter.com/spotcircuit' }
        ]}
        relatedEntities={relatedEntities}
        additionalProperties={{
          audience: {
            '@type': 'Audience',
            audienceType: 'General Contractors'
          },
          provider: {
            '@type': 'Organization',
            name: 'SpotCircuit',
            url: 'https://spotcircuit.com'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Contractor Marketing Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Local SEO for Contractors'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Contractor PPC Advertising'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Contractor Reputation Management'
                }
              }
            ]
          }
        }}
      />

      {/* Speakable Schema */}
      <SpeakableSchema
        cssSelectors={[
          'h1',
          '.hero-description',
          '.services-overview h2',
          '.testimonial blockquote'
        ]}
        url="https://spotcircuit.com/industries/contracting/"
      />
    </>
  );
}
