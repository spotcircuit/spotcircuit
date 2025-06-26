'use client';

import React from 'react';

const AnalyticsCircuitPageSchema: React.FC = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AnalyticsCircuit",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "AI-powered business intelligence platform that transforms raw data into actionable insights with predictive analytics, real-time dashboards, and multi-touch attribution.",
    "url": "https://spotcircuit.com/solutions/analyticscircuit",
    "screenshot": "https://spotcircuit.com/images/analyticscircuit-dashboard.png",
    "offers": {
      "@type": "Offer",
      "price": "1297",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "1297",
        "priceCurrency": "USD",
        "unitText": "month"
      },
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SpotCircuit",
      "url": "https://spotcircuit.com"
    },
    "featureList": [
      "Real-time Dashboards",
      "Predictive Analytics",
      "Multi-Touch Attribution",
      "Custom Reports",
      "Data Integration",
      "Smart Alerts",
      "Customer Segmentation"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does AnalyticsCircuit integrate with my existing data sources?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AnalyticsCircuit connects with over 200 data sources including Google Analytics, Facebook Ads, CRM systems, e-commerce platforms, and databases through APIs, webhooks, and direct integrations. Setup typically takes minutes, not days."
        }
      },
      {
        "@type": "Question",
        "name": "What makes AnalyticsCircuit's AI predictions more accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our machine learning models are trained on millions of data points across various industries and continuously learn from your specific business patterns. The AI considers seasonal trends, market conditions, and customer behavior patterns to deliver 89% prediction accuracy."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize dashboards and reports for different team members?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, AnalyticsCircuit offers unlimited custom dashboards with role-based access controls. Create tailored views for executives, marketing teams, sales staff, and other stakeholders with relevant metrics and automated reporting schedules."
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
        "name": "AnalyticsCircuit",
        "item": "https://spotcircuit.com/solutions/analyticscircuit"
      }
    ]
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AnalyticsCircuit - AI-Powered Business Intelligence - SpotCircuit",
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

export default AnalyticsCircuitPageSchema;