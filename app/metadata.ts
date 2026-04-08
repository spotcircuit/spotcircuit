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
  title: 'SpotCircuit - Agentic AI Engineering',
  description: 'Agentic AI engineering for teams that ship. Framework licensing, Claude Code implementation, knowledge bases, and data pipelines.',
  openGraph: {
    title: 'SpotCircuit - Agentic AI Engineering',
    description: 'Agentic AI engineering for teams that ship. Frameworks, Claude Code, knowledge bases, and data pipelines.',
    type: 'website',
    siteName: 'SpotCircuit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpotCircuit - Agentic AI Engineering',
    description: 'Agentic AI engineering for teams that ship.',
  },
};

export default siteMetadata;
