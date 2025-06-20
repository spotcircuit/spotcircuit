import Script from 'next/script';

interface Author {
  name: string;
  type?: string; // 'Person' or 'Organization'
  url?: string;
}

interface ReviewSchemaProps {
  itemReviewed: {
    type: string; // e.g., 'Product', 'Service', 'LocalBusiness'
    name: string;
    url?: string;
    image?: string;
    description?: string;
  };
  reviewRating: {
    ratingValue: number;
    bestRating?: number; // default 5
    worstRating?: number; // default 1
  };
  author: Author;
  reviewBody: string;
  datePublished?: string; // ISO 8601 format
  publisher?: Author;
  positiveNotes?: string[];
  negativeNotes?: string[];
}

export default function ReviewSchema(props: ReviewSchemaProps) {
  const {
    itemReviewed,
    reviewRating,
    author,
    reviewBody,
    datePublished,
    publisher,
    positiveNotes,
    negativeNotes
  } = props;

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': itemReviewed.type,
      name: itemReviewed.name,
      ...(itemReviewed.url && { url: itemReviewed.url }),
      ...(itemReviewed.image && { image: itemReviewed.image }),
      ...(itemReviewed.description && { description: itemReviewed.description })
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: reviewRating.ratingValue,
      bestRating: reviewRating.bestRating || 5,
      worstRating: reviewRating.worstRating || 1
    },
    author: {
      '@type': author.type || 'Person',
      name: author.name,
      ...(author.url && { url: author.url })
    },
    reviewBody,
    ...(datePublished && { datePublished }),
    ...(publisher && {
      publisher: {
        '@type': publisher.type || 'Organization',
        name: publisher.name,
        ...(publisher.url && { url: publisher.url })
      }
    })
  };

  // Add positive and negative notes if provided
  if (positiveNotes && positiveNotes.length > 0) {
    reviewSchema.positiveNotes = {
      '@type': 'ItemList',
      itemListElement: positiveNotes.map((note, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: note
      }))
    };
  }

  if (negativeNotes && negativeNotes.length > 0) {
    reviewSchema.negativeNotes = {
      '@type': 'ItemList',
      itemListElement: negativeNotes.map((note, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: note
      }))
    };
  }

  return (
    <Script id="review-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(reviewSchema)}
    </Script>
  );
}
