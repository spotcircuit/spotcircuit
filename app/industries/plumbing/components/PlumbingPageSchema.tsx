'use client';

import React from 'react';
import ServiceSchema from '@/app/components/ServiceSchema';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import EntitySchema from '@/app/components/EntitySchema';
import SpeakableSchema from '@/app/components/SpeakableSchema';

export default function PlumbingPageSchema() {
  // Define breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.spotcircuit.com/' },
    { name: 'Industries', url: 'https://www.spotcircuit.com/industries/' },
    { name: 'Plumbing', url: 'https://www.spotcircuit.com/industries/plumbing/' }
  ];

  // Define related services
  const relatedEntities = [
    {
      name: 'Local SEO for Plumbers',
      url: 'https://www.spotcircuit.com/services/local-seo/',
      description: 'Rank higher in local search results for plumbing services',
      type: 'Service'
    },
    {
      name: 'Plumber PPC Advertising',
      url: 'https://www.spotcircuit.com/services/ppc/',
      description: 'Targeted pay-per-click campaigns for plumbing companies',
      type: 'Service'
    },
    {
      name: 'Plumber Reputation Management',
      url: 'https://www.spotcircuit.com/services/reputation/',
      description: 'Build and manage online reviews for your plumbing business',
      type: 'Service'
    }
  ];

  return (
    <>
      {/* Service Schema for Plumbing Marketing */}
      <ServiceSchema
        name="AI-Powered Marketing for Plumbing Companies"
        description="Grow your plumbing business with targeted digital marketing that generates qualified leads, builds your online reputation, and maximizes your ROI."
        url="https://www.spotcircuit.com/industries/plumbing/"
        image="https://www.spotcircuit.com/images/plumbing-marketing.jpg"
        provider="SpotCircuit"
        areaServed={['United States']}
        serviceType="Plumbing Marketing Services"
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Entity Schema for Plumbing Marketing */}
      <EntitySchema
        type="Service"
        name="Plumbing Marketing Services"
        description="AI-powered marketing solutions designed specifically for plumbing businesses to increase leads, improve online reputation, and maximize ROI."
        url="https://www.spotcircuit.com/industries/plumbing/"
        image="https://www.spotcircuit.com/images/plumbing-marketing.jpg"
        sameAs={[
          { url: 'https://www.linkedin.com/company/spotcircuit' },
          { url: 'https://twitter.com/spotcircuit' }
        ]}
        relatedEntities={relatedEntities}
        additionalProperties={{
          audience: {
            '@type': 'Audience',
            audienceType: 'Plumbing Business Owners'
          },
          provider: {
            '@type': 'Organization',
            name: 'SpotCircuit',
            url: 'https://www.spotcircuit.com'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Plumbing Marketing Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Local SEO for Plumbers'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Plumber PPC Advertising'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Plumber Reputation Management'
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
        url="https://www.spotcircuit.com/industries/plumbing/"
      />
    </>
  );
}
