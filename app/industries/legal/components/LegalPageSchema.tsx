'use client';

import React from 'react';

const LegalPageSchema: React.FC = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Law Firm Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "SpotCircuit",
      "url": "https://spotcircuit.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Law Firm Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Practice Area Targeting",
            "description": "Specialized marketing campaigns for specific legal practice areas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ethics-Compliant Marketing",
            "description": "Bar association approved marketing strategies for law firms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Case Intake Automation",
            "description": "AI-powered case qualification and intake systems for law firms"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can digital marketing help my law firm while staying compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital marketing helps law firms attract qualified clients through bar-compliant strategies including educational content marketing, ethical PPC campaigns, local SEO optimization, and automated intake systems that pre-qualify cases while adhering to all professional rules."
        }
      },
      {
        "@type": "Question",
        "name": "What makes SpotCircuit different for law firm marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SpotCircuit specializes in legal marketing with deep understanding of bar association rules, practice area-specific targeting strategies, advanced case qualification technology, and proven ROI tracking specifically designed for law firms and legal practices."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure marketing compliance with bar association rules?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We ensure compliance by following state bar advertising guidelines, including proper disclaimers and disclosures, avoiding prohibited claims and guarantees, and maintaining client confidentiality standards. Our team stays updated on all relevant ethics rules to protect your practice."
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
        "name": "Industries",
        "item": "https://spotcircuit.com/industries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Legal",
        "item": "https://spotcircuit.com/industries/legal"
      }
    ]
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Law Firm Marketing Services - SpotCircuit",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".hero-description", ".feature-benefit-section"]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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

export default LegalPageSchema;