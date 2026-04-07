'use client';

import React from 'react';
import ServiceSchema from '@/app/components/ServiceSchema';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import EntitySchema from '@/app/components/EntitySchema';
import SpeakableSchema from '@/app/components/SpeakableSchema';

export default function HvacPageSchema() {
  // Define breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.spotcircuit.com/' },
    { name: 'Industries', url: 'https://www.spotcircuit.com/industries/' },
    { name: 'HVAC', url: 'https://www.spotcircuit.com/industries/hvac/' }
  ];

  // Define related services
  const relatedEntities = [
    {
      name: 'AI-Powered Scheduling',
      url: 'https://www.spotcircuit.com/services/ai-scheduling/',
      description: 'Automated scheduling system for HVAC businesses',
      type: 'Service'
    },
    {
      name: 'Technician Dispatching',
      url: 'https://www.spotcircuit.com/services/dispatching/',
      description: 'Smart dispatching system for HVAC technicians',
      type: 'Service'
    },
    {
      name: 'Customer Management',
      url: 'https://www.spotcircuit.com/services/customer-management/',
      description: 'Customer relationship management for HVAC businesses',
      type: 'Service'
    }
  ];

  return (
    <>
      {/* Service Schema for HVAC Business Automation */}
      <ServiceSchema
        name="HVAC Business Automation Platform"
        description="AI-Powered Scheduling & Client Management for HVAC businesses that works while you sleep. Book more jobs without adding staff."
        url="https://www.spotcircuit.com/industries/hvac/"
        image="https://www.spotcircuit.com/static/images/hvac-dashboard.png"
        provider="SpotCircuit"
        areaServed={['United States']}
        serviceType="HVAC Business Software"
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Entity Schema for HVAC Business Automation */}
      <EntitySchema
        type="Service"
        name="HVAC Business Automation"
        description="AI-powered platform for HVAC businesses to automate scheduling, dispatching, and customer management, helping them book more jobs without adding staff."
        url="https://www.spotcircuit.com/industries/hvac/"
        image="https://www.spotcircuit.com/static/images/hvac-dashboard.png"
        sameAs={[
          { url: 'https://www.linkedin.com/company/spotcircuit' },
          { url: 'https://twitter.com/spotcircuit' }
        ]}
        relatedEntities={relatedEntities}
        additionalProperties={{
          audience: {
            '@type': 'Audience',
            audienceType: 'HVAC Business Owners'
          },
          offers: {
            '@type': 'Offer',
            price: '199.00',
            priceCurrency: 'USD',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock'
          }
        }}
      />

      {/* Speakable Schema */}
      <SpeakableSchema
        cssSelectors={[
          '.hero-headline',
          '.hero-description',
          '.solution-overview-heading',
          '.solution-overview-description'
        ]}
        url="https://www.spotcircuit.com/industries/hvac/"
      />
    </>
  );
}