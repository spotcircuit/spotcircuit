'use client';

import React from 'react';

const MedicalSpasPageSchema: React.FC = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Medical Spa Marketing Services",
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
      "name": "Medical Spa Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medical Compliance Marketing",
            "description": "FDA-compliant marketing strategies for medical spas and aesthetic practices"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Visual Content Strategy",
            "description": "Before/after showcases and treatment marketing for medical spas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Client Journey Automation",
            "description": "Automated booking, reminders, and loyalty programs for medical spa clients"
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
        "name": "How can digital marketing help my medical spa grow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital marketing helps medical spas attract ideal clients through targeted campaigns, establish authority with educational content, showcase treatment results compliantly, and build long-term client relationships through automated nurturing and retention programs."
        }
      },
      {
        "@type": "Question",
        "name": "What makes SpotCircuit different for medical spa marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SpotCircuit specializes in medical spa marketing with deep understanding of compliance requirements, visual-first strategies for aesthetics businesses, advanced targeting for high-value treatment seekers, and proven ROI tracking specifically for medical spas and wellness centers."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure marketing compliance for medical treatments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We ensure compliance by following FDA advertising guidelines, adhering to medical board regulations, properly disclosing risks and benefits, and maintaining ethical standards in all promotional materials. Our team stays updated on all relevant regulations to protect your practice."
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
        "name": "Medical Spas",
        "item": "https://www.spotcircuit.com/industries/medical-spas"
      }
    ]
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Medical Spa Marketing Services - SpotCircuit",
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

export default MedicalSpasPageSchema;