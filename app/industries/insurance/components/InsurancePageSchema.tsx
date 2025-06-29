import React from 'react';

const InsurancePageSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://spotcircuit.com/industries/insurance",
        "url": "https://spotcircuit.com/industries/insurance",
        "name": "AI Solutions for Insurance Brokerages | SpotCircuit",
        "description": "Transform your insurance brokerage with AI-powered lead generation, automated quoting, and intelligent client management. Increase policy sales by 45% with SpotCircuit.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://spotcircuit.com",
                "name": "Home"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@id": "https://spotcircuit.com/industries",
                "name": "Industries"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "https://spotcircuit.com/industries/insurance",
                "name": "Insurance"
              }
            }
          ]
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://spotcircuit.com/#insurance-ai-service",
        "name": "SpotCircuit AI for Insurance",
        "description": "AI-powered solutions for insurance brokerages including lead generation, automated quoting, and client management",
        "provider": {
          "@type": "Organization",
          "@id": "https://spotcircuit.com/#organization"
        },
        "serviceType": "Insurance Technology Solutions",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Insurance AI Solutions",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "AI Lead Qualification",
              "description": "Automatically qualify leads based on risk profiles and coverage needs"
            },
            {
              "@type": "Offer",
              "name": "Instant Quote Generation",
              "description": "Generate accurate quotes in seconds with AI-powered underwriting"
            },
            {
              "@type": "Offer",
              "name": "Policy Recommendation Engine",
              "description": "Match clients with optimal coverage based on their unique needs"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does AI improve insurance quote accuracy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AI analyzes thousands of data points including claims history, risk factors, and market trends to generate highly accurate quotes instantly. It learns from your successful policies to continuously improve pricing recommendations while maintaining profitability."
            }
          },
          {
            "@type": "Question",
            "name": "Can SpotCircuit integrate with my existing insurance systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! SpotCircuit integrates seamlessly with major insurance CRMs, agency management systems, and carrier platforms including Applied Epic, AMS360, Salesforce Financial Services Cloud, and direct carrier APIs. Our team handles the entire integration process."
            }
          },
          {
            "@type": "Question",
            "name": "How does AI help with compliance and regulations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AI continuously monitors regulatory changes across all states where you operate, automatically updating forms, disclosures, and processes. It flags potential compliance issues before they become problems and maintains detailed audit trails for all client interactions."
            }
          },
          {
            "@type": "Question",
            "name": "What types of insurance can SpotCircuit handle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SpotCircuit supports all major insurance lines including auto, home, life, health, commercial, and specialty coverage. Our AI adapts to your specific product mix and can handle complex multi-line policies and bundling strategies."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default InsurancePageSchema;