import Script from 'next/script';

// Define valid item types that can be reviewed according to Google's guidelines
type ValidReviewItemType = 
  | 'Book'
  | 'Course'
  | 'CreativeWorkSeason'
  | 'CreativeWorkSeries'
  | 'Episode'
  | 'Event'
  | 'Game'
  | 'HowTo'
  | 'LocalBusiness'
  | 'MediaObject'
  | 'Movie'
  | 'MusicPlaylist'
  | 'MusicRecording'
  | 'Organization'
  | 'Product'
  | 'Recipe'
  | 'Service'
  | 'SoftwareApplication';

interface Author {
  name: string;
  type?: 'Person' | 'Organization';
  url?: string;
}

interface ReviewSchemaProps {
  itemReviewed: {
    type: ValidReviewItemType; // Using the strict type for better validation
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
    '@id': `#review-${(itemReviewed?.name || 'unknown').replace(/\s+/g, '-').toLowerCase()}`,

    inLanguage: 'en-US',
    itemReviewed: {
      '@type': itemReviewed.type,
      '@id': itemReviewed.url ? `${itemReviewed.url}#${(itemReviewed?.type || 'unknown').toLowerCase()}` : undefined,
      name: itemReviewed.name,
      ...(itemReviewed.url && { url: itemReviewed.url }),
      ...(itemReviewed.image && {
        image: {
          '@type': 'ImageObject',
          url: itemReviewed.image
        }
      }),
      ...(itemReviewed.description && { description: itemReviewed.description })
    },
    reviewRating: {
      '@type': 'Rating',
      '@id': `#rating-${(itemReviewed?.name || 'unknown').replace(/\s+/g, '-').toLowerCase()}`,

      ratingValue: reviewRating.ratingValue,
      bestRating: reviewRating.bestRating || 5,
      worstRating: reviewRating.worstRating || 1,
      ratingExplanation: `Rating of ${reviewRating.ratingValue} out of ${reviewRating.bestRating || 5}`
    },
    author: {
      '@type': author.type || 'Person',
      name: author.name,
      ...(author.url && { url: author.url })
    },
    reviewBody,
    ...(datePublished && {
      datePublished,
      dateCreated: datePublished
    }),
    ...(publisher && {
      publisher: {
        '@type': publisher.type || 'Organization',
        name: publisher.name,
        ...(publisher.url && { url: publisher.url })
      }
    }),
    headline: `Review of ${itemReviewed.name}`
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