'use client';

import React from 'react';
import ServiceSchema from '@/app/components/ServiceSchema';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import EntitySchema from '@/app/components/EntitySchema';
import SpeakableSchema from '@/app/components/SpeakableSchema';

export default function ElectricalPageSchema() {
  // Define breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.spotcircuit.com/' },
    { name: 'Industries', url: 'https://www.spotcircuit.com/industries/' },
    { name: 'Electrical', url: 'https://www.spotcircuit.com/industries/electrical/' }
  ];

  // Define related services
  const relatedEntities = [
    {
      name: 'Local SEO for Electricians',
      url: 'https://www.spotcircuit.com/services/local-seo/',
      description: 'Rank higher in local search results for electrical services',
      type: 'Service'
    },
    {
      name: 'Electrician PPC Advertising',
      url: 'https://www.spotcircuit.com/services/ppc/',
      description: 'Targeted pay-per-click campaigns for electrical contractors',
      type: 'Service'
    },
    {
      name: 'Electrician Reputation Management',
      url: 'https://www.spotcircuit.com/services/reputation/',
      description: 'Build and manage online reviews for your electrical business',
      type: 'Service'
    }
  ];

  return (
    <>
      {/* Service Schema for Electrical Marketing */}
      <ServiceSchema
        name="AI-Powered Marketing for Electrical Contractors"
        description="Grow your electrical business with targeted digital marketing that generates qualified leads, builds your online reputation, and maximizes your ROI."
        url="https://www.spotcircuit.com/industries/electrical/"
        image="https://www.spotcircuit.com/images/electrical-marketing.jpg"
        provider="SpotCircuit"
        areaServed={['United States']}
        serviceType="Electrical Marketing Services"
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Entity Schema for Electrical Marketing */}
      <EntitySchema
        type="Service"
        name="Electrical Marketing Services"
        description="AI-powered marketing solutions designed specifically for electrical contractors to increase leads, improve online reputation, and maximize ROI."
        url="https://www.spotcircuit.com/industries/electrical/"
        image="https://www.spotcircuit.com/images/electrical-marketing.jpg"
        sameAs={[
          { url: 'https://www.linkedin.com/company/spotcircuit' },
          { url: 'https://twitter.com/spotcircuit' }
        ]}
        relatedEntities={relatedEntities}
        additionalProperties={{
          audience: {
            '@type': 'Audience',
            audienceType: 'Electrical Contractors'
          },
          provider: {
            '@type': 'Organization',
            name: 'SpotCircuit',
            url: 'https://www.spotcircuit.com'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Electrical Marketing Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Local SEO for Electricians'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Electrician PPC Advertising'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Electrician Reputation Management'
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
        url="https://www.spotcircuit.com/industries/electrical/"
      />
    </>
  );
}
