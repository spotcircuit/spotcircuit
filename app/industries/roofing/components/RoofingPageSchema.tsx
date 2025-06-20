'use client';

import React from 'react';
import ServiceSchema from '@/app/components/ServiceSchema';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import EntitySchema from '@/app/components/EntitySchema';
import SpeakableSchema from '@/app/components/SpeakableSchema';

export default function RoofingPageSchema() {
  // Define breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: 'https://spotcircuit.com/' },
    { name: 'Industries', url: 'https://spotcircuit.com/industries/' },
    { name: 'Roofing', url: 'https://spotcircuit.com/industries/roofing/' }
  ];

  // Define related services
  const relatedEntities = [
    {
      name: 'Local SEO for Roofers',
      url: 'https://spotcircuit.com/services/local-seo/',
      description: 'Rank higher in local search results for roofing services',
      type: 'Service'
    },
    {
      name: 'Roofer PPC Advertising',
      url: 'https://spotcircuit.com/services/ppc/',
      description: 'Targeted pay-per-click campaigns for roofing companies',
      type: 'Service'
    },
    {
      name: 'Roofer Reputation Management',
      url: 'https://spotcircuit.com/services/reputation/',
      description: 'Build and manage online reviews for your roofing business',
      type: 'Service'
    }
  ];

  return (
    <>
      {/* Service Schema for Roofing Marketing */}
      <ServiceSchema
        name="AI-Powered Marketing for Roofing Companies"
        description="Grow your roofing business with targeted digital marketing that generates qualified leads, builds your online reputation, and maximizes your ROI."
        url="https://spotcircuit.com/industries/roofing/"
        image="https://spotcircuit.com/images/roofing-marketing.jpg"
        provider="SpotCircuit"
        areaServed={['United States']}
        serviceType="Roofing Marketing Services"
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Entity Schema for Roofing Marketing */}
      <EntitySchema
        type="Service"
        name="Roofing Marketing Services"
        description="AI-powered marketing solutions designed specifically for roofing contractors to increase leads, improve online reputation, and maximize ROI."
        url="https://spotcircuit.com/industries/roofing/"
        image="https://spotcircuit.com/images/roofing-marketing.jpg"
        sameAs={[
          { url: 'https://www.linkedin.com/company/spotcircuit' },
          { url: 'https://twitter.com/spotcircuit' }
        ]}
        relatedEntities={relatedEntities}
        additionalProperties={{
          audience: {
            '@type': 'Audience',
            audienceType: 'Roofing Contractors'
          },
          provider: {
            '@type': 'Organization',
            name: 'SpotCircuit',
            url: 'https://spotcircuit.com'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Roofing Marketing Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Local SEO for Roofers'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Roofer PPC Advertising'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Roofer Reputation Management'
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
        url="https://spotcircuit.com/industries/roofing/"
      />
    </>
  );
}
