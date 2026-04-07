import Script from 'next/script';

interface DatasetCreator {
  name: string;
  url?: string;
  type?: string; // 'Person' or 'Organization'
}

interface DatasetDistribution {
  contentUrl: string;
  encodingFormat: string;
  name?: string;
}

interface DatasetSchemaProps {
  name: string;
  description: string;
  url: string;
  keywords?: string[];
  creator?: DatasetCreator;
  datePublished?: string; // ISO 8601 format (YYYY-MM-DD)
  license?: string;
  distributions?: DatasetDistribution[];
  variableMeasured?: string[];
  temporalCoverage?: string;
  spatialCoverage?: string;
  isPartOf?: {
    name: string;
    url: string;
  };
}

export default function DatasetSchema(props: DatasetSchemaProps) {
  const {
    name,
    description,
    url,
    keywords,
    creator,
    datePublished,
    license,
    distributions,
    variableMeasured,
    temporalCoverage,
    spatialCoverage,
    isPartOf
  } = props;

  // Build the dataset schema
  const datasetSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name,
    description,
    url,
    ...(keywords && keywords.length > 0 && { keywords: keywords.join(',') }),
    ...(datePublished && { datePublished }),
    ...(license && { license }),
    ...(temporalCoverage && { temporalCoverage }),
    ...(spatialCoverage && { spatialCoverage })
  };

  // Add creator if provided
  if (creator) {
    datasetSchema.creator = {
      '@type': creator.type || 'Organization',
      name: creator.name,
      ...(creator.url && { url: creator.url })
    };
  }

  // Add distributions if provided
  if (distributions && distributions.length > 0) {
    datasetSchema.distribution = distributions.map(dist => ({
      '@type': 'DataDownload',
      contentUrl: dist.contentUrl,
      encodingFormat: dist.encodingFormat,
      ...(dist.name && { name: dist.name })
    }));
  }

  // Add measured variables if provided
  if (variableMeasured && variableMeasured.length > 0) {
    datasetSchema.variableMeasured = variableMeasured;
  }

  // Add parent catalog if provided
  if (isPartOf) {
    datasetSchema.isPartOf = {
      '@type': 'DataCatalog',
      name: isPartOf.name,
      url: isPartOf.url
    };
  }

  return (
    <Script id="dataset-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(datasetSchema)}
    </Script>
  );
}
