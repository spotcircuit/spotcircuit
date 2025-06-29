'use client';

import React from 'react';

/**
 * Schema markup component for the SaaS & Software industry page
 * Implements JSON-LD structured data for better search visibility
 */
const SaasPageSchema: React.FC = () => {
  return (
    <>
      {/* Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI-Powered SaaS & Software Marketing Solutions",
            "serviceType": "Digital Marketing for Software Companies",
            "description": "Specialized digital marketing solutions for SaaS and software companies to accelerate growth, reduce churn, and maximize customer lifetime value.",
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
              "name": "SaaS Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Product-Led Growth Optimization",
                    "description": "AI-powered optimization of free trials, onboarding, and feature adoption to maximize conversion rates"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Developer Marketing & API Growth",
                    "description": "Technical content marketing and community building strategies for developer-focused products"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Multi-Channel ABM Campaigns",
                    "description": "Account-based marketing strategies to accelerate enterprise sales cycles"
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
                "name": "How can digital marketing help my SaaS company grow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Digital marketing helps SaaS companies by optimizing product-led growth funnels, reducing customer acquisition costs through targeted campaigns, improving retention with data-driven engagement strategies, and scaling revenue through account-based marketing and expansion campaigns."
                }
              },
              {
                "@type": "Question",
                "name": "What makes SpotCircuit different for SaaS marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SpotCircuit specializes in SaaS growth with AI-powered solutions that understand software business models. We focus on metrics that matter like MRR, CAC, LTV, and churn rate. Our platform integrates with your tech stack and provides predictive analytics for proactive growth strategies."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to see results from SaaS marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most SaaS clients see initial improvements in trial signups and engagement within 30 days. Significant improvements in conversion rates and MRR typically occur within 60-90 days. Our AI systems continuously optimize, with compound growth effects typically visible within 3-6 months."
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
                "name": "SaaS & Software Marketing",
                "item": "https://spotcircuit.com/industries/saas"
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
            "url": "https://spotcircuit.com/industries/saas"
          })
        }}
      />
    </>
  );
};

export default SaasPageSchema;