'use client';

import React from 'react';

/**
 * Schema markup component for the Recruiting industry page
 * Implements JSON-LD structured data for better search visibility
 */
const RecruitingPageSchema: React.FC = () => {
  return (
    <>
      {/* Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI-Powered Recruiting & Staffing Marketing Solutions",
            "serviceType": "Digital Marketing for Recruiters",
            "description": "Specialized digital marketing solutions for recruiting and staffing agencies to attract quality candidates, build employer brands, and streamline talent acquisition.",
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
              "name": "Recruiting Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Candidate Attraction System",
                    "description": "AI-powered marketing campaigns to attract qualified candidates for your recruiting agency"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Client Acquisition Marketing",
                    "description": "Digital strategies to attract businesses in need of staffing services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Employer Brand Development",
                    "description": "Build compelling employer brands that attract top talent"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How can digital marketing help my recruiting agency?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Digital marketing helps recruiting agencies establish targeted talent pipelines, position your firm as an industry leader, build client relationships through content marketing, and leverage AI for automated candidate matching and qualification."
                }
              },
              {
                "@type": "Question",
                "name": "What makes SpotCircuit different from other marketing agencies for recruiters?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SpotCircuit specializes in the recruiting industry with AI-powered solutions specifically designed for talent acquisition. Our platform optimizes for both candidate attraction and client acquisition simultaneously, provides industry-specific talent pools, and offers advanced candidate match technology with measurable ROI tracking."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to see results from recruiting marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most recruiting clients see initial improvements in candidate quality and volume within 30 days. Significant improvements in placement rates and client acquisition typically occur within 60-90 days. Our AI systems continuously improve over time, with peak performance usually achieved within 4-6 months."
                }
              }
            ]
          })
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                "name": "Recruiting Marketing",
                "item": "https://www.spotcircuit.com/industries/recruiting"
              }
            ]
          })
        }}
      />
      
      {/* With speakable content for voice search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".hero-description", ".feature-benefit-section"]
            },
            "url": "https://www.spotcircuit.com/industries/recruiting"
          })
        }}
      />
    </>
  );
};

export default RecruitingPageSchema;
