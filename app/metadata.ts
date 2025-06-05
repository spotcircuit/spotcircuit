// Main site metadata
export type Metadata = {
  title?: string;
  description?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: string;
    url?: string;
    siteName?: string;
    images?: {
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }[];
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: string | string[];
  };
};

export const siteMetadata: Metadata = {
  title: 'SpotCircuit - AI-First SEO & LLM Optimization Platform',
  description: 'SpotCircuit helps businesses optimize content for large language models and AI search engines with a focus on semantic understanding and structured data.',
  openGraph: {
    title: 'SpotCircuit - AI-First SEO & LLM Optimization Platform',
    description: 'SpotCircuit helps businesses optimize content for large language models and AI search engines with a focus on semantic understanding and structured data.',
    type: 'website',
    siteName: 'SpotCircuit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpotCircuit - AI-First SEO & LLM Optimization Platform',
    description: 'SpotCircuit helps businesses optimize content for large language models and AI search engines with a focus on semantic understanding and structured data.',
  },
};

export default siteMetadata;