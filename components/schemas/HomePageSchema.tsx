import { Metadata } from 'next';

export const HomePageSchema = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SpotCircuit',
    url: 'https://www.spotcircuit.com',
    logo: 'https://www.spotcircuit.com/spotcircuit-logo.png',
    description: 'AI-Powered Growth Solutions for Local Services & B2B SaaS',
    sameAs: [
      'https://twitter.com/spotcircuit',
      'https://www.linkedin.com/company/spotcircuit',
      'https://www.facebook.com/spotcircuit',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-555-123-4567',
        contactType: 'customer service',
        availableLanguage: 'English',
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SpotCircuit',
    url: 'https://www.spotcircuit.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.spotcircuit.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default HomePageSchema;
