'use client';

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SpotCircuit",
    "url": "https://spotcircuit.com",
    "logo": "https://spotcircuit.com/logo.png",
    "sameAs": [
      "https://twitter.com/spotcircuit",
      "https://www.linkedin.com/company/spotcircuit"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
