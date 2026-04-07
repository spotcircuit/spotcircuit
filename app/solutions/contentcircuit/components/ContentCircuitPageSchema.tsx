'use client';

import React from 'react';

const ContentCircuitPageSchema: React.FC = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ContentCircuit",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "AI-powered content creation engine that generates high-converting content at scale with brand voice alignment, SEO optimization, and strategic content planning.",
    "url": "https://www.spotcircuit.com/solutions/contentcircuit",
    "screenshot": "https://www.spotcircuit.com/images/contentcircuit-dashboard.png",
    "offers": {
      "@type": "Offer",
      "price": "697",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "697",
        "priceCurrency": "USD",
        "unitText": "month"
      },
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "89",
      "bestRating": "5"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SpotCircuit",
      "url": "https://www.spotcircuit.com"
    },
    "featureList": [
      "AI Content Generation",
      "Brand Voice Training",
      "SEO Optimization",
      "Content Calendar",
      "Multi-format Creation",
      "Performance Analytics",
      "Auto-scheduling"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does ContentCircuit maintain my brand voice across all content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ContentCircuit analyzes your existing content, brand guidelines, and writing samples to learn your unique voice, tone, and style. Our AI then applies this understanding to all generated content, ensuring consistency across all platforms and content types."
        }
      },
      {
        "@type": "Question",
        "name": "Can ContentCircuit help with SEO and content optimization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ContentCircuit includes advanced SEO features including keyword research, content optimization suggestions, meta tag generation, and schema markup implementation. All content is automatically optimized for search engines while maintaining readability and engagement."
        }
      },
      {
        "@type": "Question",
        "name": "What types of content can ContentCircuit create?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ContentCircuit can generate blog posts, social media content, email campaigns, video scripts, product descriptions, ad copy, press releases, and more. The AI adapts to any content format while maintaining your brand voice and marketing objectives."
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
        "name": "Solutions",
        "item": "https://www.spotcircuit.com/solutions"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "ContentCircuit",
        "item": "https://www.spotcircuit.com/solutions/contentcircuit"
      }
    ]
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ContentCircuit - AI Content Creation Engine - SpotCircuit",
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

export default ContentCircuitPageSchema;