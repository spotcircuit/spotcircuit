'use client';

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "SpotCircuit",
    "url": "https://spotcircuit.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://spotcircuit.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
