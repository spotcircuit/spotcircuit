'use client';

import React from 'react';

const MedicalPageSchema: React.FC = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Medical Practice Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "SpotCircuit",
      "url": "https://www.spotcircuit.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Practice Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HIPAA-Compliant Marketing",
            "description": "Privacy-compliant marketing strategies for medical practices"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Patient Education Hub",
            "description": "Educational content marketing for healthcare providers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Referral Network Building",
            "description": "Professional referral network development for medical practices"
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
        "name": "How can digital marketing help my medical practice while maintaining HIPAA compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital marketing helps medical practices attract new patients through HIPAA-compliant strategies including secure patient communications, privacy-protected testimonials, educational content marketing, and targeted advertising that respects patient privacy while effectively growing your practice."
        }
      },
      {
        "@type": "Question",
        "name": "What makes SpotCircuit different for medical practice marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SpotCircuit specializes in healthcare marketing with deep understanding of HIPAA requirements, medical ethics compliance, patient privacy protection, and proven strategies specifically designed for medical practices. Our team ensures all marketing efforts maintain the highest standards of patient confidentiality."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from medical practice marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most medical practices see initial increases in patient inquiries within 30-45 days. Significant growth in new patient appointments typically occurs within 60-90 days. Our strategies focus on both immediate patient acquisition and long-term practice growth through reputation building and referral networks."
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
        "item": "https://www.spotcircuit.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Industries",
        "item": "https://www.spotcircuit.com/industries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Medical",
        "item": "https://www.spotcircuit.com/industries/medical"
      }
    ]
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Medical Practice Marketing Services - SpotCircuit",
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

export default MedicalPageSchema;