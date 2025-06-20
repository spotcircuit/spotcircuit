import React from 'react';
import Script from 'next/script';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  faqs: FaqItem[];
  schemaType?: string;
  id?: string;
}

export default function FaqSchema({ faqs, schemaType = 'QAContent', id = 'faq-schema' }: FaqSchemaProps) {
  // Using a different schema type than FAQPage to avoid duplication
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    'name': 'Frequently Asked Questions',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <Script id={id} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(faqSchema)}
    </Script>
  );
}
