import { LegalDocument } from '@/types/schema';

interface LegalPageSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
}

export const LegalPageSchema = ({
  title,
  description,
  datePublished,
  dateModified,
  url,
}: LegalPageSchemaProps) => {
  const schema: LegalDocument = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    publisher: {
      '@type': 'Organization',
      name: 'SpotCircuit',
      url: 'https://www.spotcircuit.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.spotcircuit.com/static/images/logo.png',
        width: '600',
        height: '60',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LegalPageSchema;
