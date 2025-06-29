'use client';

import React from 'react';
import Script from 'next/script';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import SpeakableSchema from '@/app/components/SpeakableSchema';
import PlumbingServiceSchema from './PlumbingServiceSchema';
import HVACServiceSchema from './HVACServiceSchema';
import ElectricalServiceSchema from './ElectricalServiceSchema';

export default function LocalMarketingPageSchema() {
  // Define breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: 'https://spotcircuit.com/', position: 1 },
    { name: 'Local Marketing', url: 'https://spotcircuit.com/local-marketing/', position: 2 }
  ];

  // Define service areas
  const serviceAreas = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin'
  ];

  // Define local service types
  const serviceTypes = [
    {
      'name': 'Plumbing Services',
      'description': 'Professional plumbing services for residential and commercial properties',
      'url': 'https://spotcircuit.com/local-marketing/#plumbing'
    },
    {
      'name': 'HVAC Services',
      'description': 'Heating, ventilation, and air conditioning installation and repair',
      'url': 'https://spotcircuit.com/local-marketing/#hvac'
    },
    {
      'name': 'Electrical Services',
      'description': 'Residential and commercial electrical services and repairs',
      'url': 'https://spotcircuit.com/local-marketing/#electrical'
    },
    {
      'name': 'Contracting Services',
      'description': 'General contracting and home improvement services',
      'url': 'https://spotcircuit.com/local-marketing/#contracting'
    },
    {
      'name': 'Roofing Services',
      'description': 'Roof installation, repair, and maintenance services',
      'url': 'https://spotcircuit.com/local-marketing/#roofing'
    }
  ];

  // JSON-LD schema for LocalBusiness
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://spotcircuit.com/local-marketing/#organization',
    'name': 'SpotCircuit Local Marketing',
      'description': 'AI-powered marketing solutions for local service businesses including plumbers, HVAC professionals, electricians, and contractors.',
      'url': 'https://spotcircuit.com/local-marketing/',
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
    '@id': 'https://spotcircuit.com/local-marketing/#service',
    'name': 'Local Marketing',
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

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly will I see results from your local SEO services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients see initial ranking improvements within 30-60 days. Local map pack results often appear faster than organic rankings. Our comprehensive strategy includes immediate optimizations to your Google Business Profile and citation cleanup, followed by ongoing content and link building for lasting results. We will provide weekly progress reports so you can track your improvement in real-time."
        }
      },
      {
        "@type": "Question",
        "name": "What is your pricing structure for local service businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible packages starting at $997/month for our essential local visibility services. For businesses looking for comprehensive marketing solutions, our premium packages range from $1,997-$3,997/month based on service area size and competition level. All packages include our AI-powered tools, dedicated account management, and detailed performance reporting. We also offer a 30-day satisfaction guarantee for new clients."
        }
      },
      {
        "@type": "Question",
        "name": "How does your AI technology differ from traditional marketing agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our proprietary AI technology analyzes thousands of successful local service businesses to identify what drives visibility and lead generation in your specific industry. Unlike traditional agencies that rely on manual processes and one-size-fits-all strategies, our AI constantly adapts to algorithm changes and customer behavior patterns. This allows us to implement more precise targeting, create more effective content, and optimize your marketing budget with significantly better ROI than conventional methods."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to sign a long-term contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. While our most successful clients stay with us for years, we do not believe in locking you into long-term contracts. Our services are month-to-month after an initial 3-month commitment period that allows our strategies enough time to demonstrate meaningful results. We are confident in our ability to deliver value, which is why we let our results speak for themselves instead of relying on lengthy contract terms."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure success and track ROI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We track multiple key performance indicators including search rankings, website traffic, lead volume, conversion rates, cost per acquisition, and overall ROI. You will receive access to our client dashboard with real-time performance data and comprehensive monthly reports. We also integrate with your CRM or booking system to track leads all the way to booked jobs, giving you full visibility into how our marketing efforts directly impact your bottom line."
        }
      }
    ]
  };

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

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Specific Service Schemas */}
      <PlumbingServiceSchema />
      <HVACServiceSchema />
      <ElectricalServiceSchema />
    </>
  );
}
