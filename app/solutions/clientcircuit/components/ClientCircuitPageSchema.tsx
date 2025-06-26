'use client';

import React from 'react';

const ClientCircuitPageSchema: React.FC = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ClientCircuit",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "AI-powered client relationship management platform that automates lead nurturing, manages communications, and drives conversion through intelligent insights.",
    "url": "https://spotcircuit.com/solutions/clientcircuit",
    "screenshot": "https://spotcircuit.com/images/clientcircuit-dashboard.png",
    "offers": {
      "@type": "Offer",
      "price": "997",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "997",
        "priceCurrency": "USD",
        "unitText": "month"
      },
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SpotCircuit",
      "url": "https://spotcircuit.com"
    },
    "featureList": [
      "Intelligent Lead Scoring",
      "Automated Communication Campaigns",
      "CRM Integration",
      "Performance Analytics",
      "Multi-channel Messaging",
      "Behavioral Tracking",
      "Revenue Attribution"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does ClientCircuit integrate with existing CRM systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ClientCircuit seamlessly integrates with popular CRM platforms including Salesforce, HubSpot, Pipedrive, and many others through native APIs and webhooks. Our integration process typically takes less than 24 hours with full data synchronization."
        }
      },
      {
        "@type": "Question",
        "name": "What makes ClientCircuit's AI different from other client management tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI learns from your specific business patterns, client behaviors, and successful conversions to create personalized strategies. Unlike generic solutions, ClientCircuit adapts to your industry, communication style, and client preferences to optimize engagement and conversion rates."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I see results from ClientCircuit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most businesses see improved lead response times within the first week and increased conversion rates within 30 days. Our AI requires a 2-4 week learning period to fully optimize for your specific business, after which you'll see maximum performance improvements."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://spotcircuit.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Solutions",
        "item": "https://spotcircuit.com/solutions"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "ClientCircuit",
        "item": "https://spotcircuit.com/solutions/clientcircuit"
      }
    ]
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ClientCircuit - AI-Powered Client Management - SpotCircuit",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".hero-description", ".feature-benefit-section"]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
    </>
  );
};

export default ClientCircuitPageSchema;