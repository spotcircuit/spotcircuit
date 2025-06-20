import Script from 'next/script';

interface SameAsLink {
  url: string;
  name?: string;
}

interface RelatedEntity {
  name: string;
  url: string;
  description?: string;
  type?: string;
}

interface EntitySchemaProps {
  type: string;         // The type of entity (e.g., 'Person', 'Organization', 'Product', 'Service')
  name: string;
  description: string;
  url: string;
  image?: string;
  sameAs?: SameAsLink[];
  relatedEntities?: RelatedEntity[];
  additionalProperties?: Record<string, any>;
}

export default function EntitySchema(props: EntitySchemaProps) {
  const {
    type,
    name,
    description,
    url,
    image,
    sameAs,
    relatedEntities,
    additionalProperties
  } = props;

  // Build the base entity schema
  const entitySchema: any = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#entity`,
    name,
    description,
    url,
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image
      }
    }),
    ...(sameAs && sameAs.length > 0 && {
      sameAs: sameAs.map(link => link.url)
    }),
    ...(additionalProperties || {})
  };

  // Add related entities if provided
  if (relatedEntities && relatedEntities.length > 0) {
    entitySchema.mainEntityOfPage = {
      '@type': 'ItemList',
      itemListElement: relatedEntities.map((entity, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': entity.type || 'Thing',
          name: entity.name,
          url: entity.url,
          ...(entity.description && { description: entity.description })
        }
      }))
    };
  }

  return (
    <Script id="entity-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(entitySchema)}
    </Script>
  );
}
