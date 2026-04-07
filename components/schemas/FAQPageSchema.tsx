'use client';

import Script from 'next/script';
import { sanitizeSchema } from '@/lib/schema-validation';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  faqs: FAQItem[];
  url?: string;
  name?: string;
  description?: string;
}

export default function FAQPageSchema(props: FAQPageSchemaProps) {
  const { faqs, url, name, description } = props;

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const schemaData = sanitizeSchema({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(url && { '@id': `${url}#faqpage` }),
    ...(name && { name }),
    ...(description && { description }),
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  });

  return (
    <Script 
      id="faq-page-schema" 
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }}
    />
  );
}