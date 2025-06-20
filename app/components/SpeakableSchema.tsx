import React from 'react';
import Script from 'next/script';

interface SpeakableSchemaProps {
  cssSelectors?: string[];  // CSS selectors for speakable content
  xpath?: string[];         // XPath selectors for speakable content (alternative to CSS)
}

export default function SpeakableSchema({ cssSelectors, xpath }: SpeakableSchemaProps) {
  // Ensure at least one type of selector is provided
  if ((!cssSelectors || cssSelectors.length === 0) && (!xpath || xpath.length === 0)) {
    console.warn('SpeakableSchema: No selectors provided. Component will not render.');
    return null;
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      ...(cssSelectors && cssSelectors.length > 0 && { cssSelector: cssSelectors }),
      ...(xpath && xpath.length > 0 && { xpath: xpath })
    },
    url: 'https://spotcircuit.com'
  };

  return (
    <Script id="speakable-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(speakableSchema)}
    </Script>
  );
}