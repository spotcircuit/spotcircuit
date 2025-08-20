import React from 'react';

const ConsultingPageSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.spotcircuit.com/industries/consulting",
        "url": "https://www.spotcircuit.com/industries/consulting",
        "name": "AI Solutions for Consulting Firms | SpotCircuit",
        "description": "Scale your consulting practice with AI-powered research, automated insights generation, and intelligent project management. Deliver 3x more value with SpotCircuit.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://www.spotcircuit.com",
                "name": "Home"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@id": "https://www.spotcircuit.com/industries",
                "name": "Industries"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "https://www.spotcircuit.com/industries/consulting",
                "name": "Consulting"
              }
            }
          ]
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.spotcircuit.com/#consulting-ai-service",
        "name": "SpotCircuit AI for Consulting",
        "description": "AI-powered solutions for consulting firms including research automation, insights generation, and project management",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.spotcircuit.com/#organization"
        },
        "serviceType": "Consulting Technology Solutions",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Consulting AI Solutions",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "AI Research Assistant",
              "description": "Accelerate market research and competitive analysis with AI-powered insights"
            },
            {
              "@type": "Offer",
              "name": "Automated Report Generation",
              "description": "Create professional deliverables in hours, not weeks"
            },
            {
              "@type": "Offer",
              "name": "Knowledge Management AI",
              "description": "Instantly access and leverage your firm's collective expertise"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does AI enhance consulting research and analysis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AI instantly processes vast amounts of data from multiple sources, identifying patterns and insights that would take weeks to uncover manually. It generates comprehensive market analyses, competitive landscapes, and strategic recommendations based on your specific methodology and client needs."
            }
          },
          {
            "@type": "Question",
            "name": "Will AI replace our consultants or augment them?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SpotCircuit AI augments your consultants' capabilities, not replaces them. It handles time-consuming research and analysis tasks, allowing consultants to focus on strategic thinking, client relationships, and high-value problem-solving. Think of it as giving each consultant a team of AI assistants."
            }
          },
          {
            "@type": "Question",
            "name": "How does SpotCircuit maintain confidentiality and data security?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We understand consulting requires the highest levels of confidentiality. SpotCircuit uses enterprise-grade encryption, isolated client environments, and strict access controls. We're SOC 2 certified and comply with all major data protection regulations including GDPR and CCPA."
            }
          },
          {
            "@type": "Question",
            "name": "Can SpotCircuit adapt to our proprietary methodologies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! SpotCircuit's AI can be trained on your firm's unique frameworks, methodologies, and best practices. It learns from your past engagements to deliver insights and recommendations that align perfectly with your consulting approach and maintain your competitive differentiation."
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

export default ConsultingPageSchema;