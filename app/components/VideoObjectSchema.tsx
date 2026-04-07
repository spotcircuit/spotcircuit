import Script from 'next/script';

interface TranscriptPart {
  startOffset: number; // Start time in seconds
  endOffset: number;   // End time in seconds
  text: string;
}

interface VideoObjectSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;  // ISO 8601 format (YYYY-MM-DD)
  duration?: string;   // ISO 8601 duration format (e.g., "PT1H30M")
  contentUrl?: string;
  embedUrl?: string;
  transcript?: TranscriptPart[];
}

export default function VideoObjectSchema(props: VideoObjectSchemaProps) {
  const {
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    contentUrl,
    embedUrl,
    transcript
  } = props;

  // Create the base VideoObject schema
  const videoSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    ...(duration && { duration }),
    ...(contentUrl && { contentUrl }),
    ...(embedUrl && { embedUrl })
  };

  // Add transcript parts if provided
  if (transcript && transcript.length > 0) {
    videoSchema.hasPart = transcript.map(part => ({
      '@type': 'Clip',
      name: `Transcript segment ${part.startOffset}-${part.endOffset}`,
      startOffset: part.startOffset,
      endOffset: part.endOffset,
      transcript: part.text
    }));
  }

  return (
    <Script id="video-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(videoSchema)}
    </Script>
  );
}
