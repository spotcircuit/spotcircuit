import React from 'react';
import { Organization, WithContext } from 'schema-dts';

const OrganizationSchema: React.FC = () => {
  const schema: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SpotCircuit',
    url: 'https://spotcircuit.com',
    logo: 'https://spotcircuit.com/logo.png',
    sameAs: [
      'https://twitter.com/spotcircuit',
      'https://www.linkedin.com/company/spotcircuit',
      'https://www.facebook.com/spotcircuit',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;
