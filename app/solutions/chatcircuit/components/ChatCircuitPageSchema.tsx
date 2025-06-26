'use client';

import React from 'react';

const ChatCircuitPageSchema: React.FC = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ChatCircuit",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "AI-powered customer support platform that deploys intelligent chatbots for instant customer service, lead qualification, and automated support across all channels.",
    "url": "https://spotcircuit.com/solutions/chatcircuit",
    "screenshot": "https://spotcircuit.com/images/chatcircuit-interface.png",
    "offers": {
      "@type": "Offer",
      "price": "497",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "497",
        "priceCurrency": "USD",
        "unitText": "month"
      },
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "203",
      "bestRating": "5"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SpotCircuit",
      "url": "https://spotcircuit.com"
    },
    "featureList": [
      "AI Conversations",
      "24/7 Support",
      "Multi-Language Support",
      "Human Handoff",
      "Omnichannel Deployment",
      "Lead Qualification",
      "Smart Analytics"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can I deploy ChatCircuit on my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ChatCircuit can be deployed on your website in minutes with our simple embed code. No technical expertise required. Our AI training process takes 24-48 hours to learn your business specifics and can immediately handle basic inquiries."
        }
      },
      {
        "@type": "Question",
        "name": "Can ChatCircuit understand and respond in multiple languages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ChatCircuit supports over 50 languages with automatic language detection and seamless switching. The AI maintains consistent personality and knowledge across all languages while respecting cultural communication preferences."
        }
      },
      {
        "@type": "Question",
        "name": "How does ChatCircuit handle complex customer issues that require human intervention?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ChatCircuit intelligently recognizes when conversations require human expertise and seamlessly transfers to your support team with full context. Agents receive conversation history, customer data, and suggested solutions for efficient resolution."
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
        "name": "ChatCircuit",
        "item": "https://spotcircuit.com/solutions/chatcircuit"
      }
    ]
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ChatCircuit - AI Customer Support Revolution - SpotCircuit",
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

export default ChatCircuitPageSchema;