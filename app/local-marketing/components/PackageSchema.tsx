'use client';

import React from 'react';

/**
 * Schema markup component for service packages 
 * Implements proper Product/Offer schema for better search visibility
 */
const PackageSchema: React.FC = () => {
  // Define the schema for each package
  const packageSchemas = [
    {
      name: "Essential Marketing Package",
      description: "Basic visibility package for small local service businesses",
      price: "997.00",
      priceCurrency: "USD",
      features: [
        "Local SEO & Google Maps optimization",
        "Basic review management",
        "Monthly performance reporting",
        "Single location support",
        "Standard response time"
      ]
    },
    {
      name: "Advanced Marketing Package",
      description: "Comprehensive solution for established businesses ready to grow",
      price: "1997.00",
      priceCurrency: "USD",
      features: [
        "All Essential package features",
        "AI Lead Generation system",
        "ROI-focused advertising campaigns",
        "Multi-location support (up to 3)",
        "Priority support & weekly check-ins"
      ]
    },
    {
      name: "Premium Marketing Package",
      description: "Enterprise-level solution for maximum growth and ROI",
      price: "3997.00",
      priceCurrency: "USD",
      features: [
        "All Advanced package features",
        "Complete mobile customer experience",
        "Custom analytics dashboard",
        "Unlimited location support",
        "24/7 VIP support & dedicated manager"
      ]
    }
  ];

  return (
    <>
      {packageSchemas.map((pkg, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": pkg.name,
              "description": pkg.description,
              "offers": {
                "@type": "Offer",
                "url": `https://spotcircuit.com/local-services#packages`,
                "priceCurrency": pkg.priceCurrency,
                "price": pkg.price,
                "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "SpotCircuit"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "200"
              }
            })
          }}
        />
      ))}
      
      {/* Add AggregateOffer schema that covers all packages */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "AggregateOffer",
            "offerCount": "3",
            "lowPrice": "997",
            "highPrice": "3997",
            "priceCurrency": "USD",
            "offers": packageSchemas.map(pkg => ({
              "@type": "Offer",
              "name": pkg.name,
              "description": pkg.description,
              "price": pkg.price,
              "priceCurrency": pkg.priceCurrency
            }))
          })
        }}
      />
    </>
  );
};

export default PackageSchema;
