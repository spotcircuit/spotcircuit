import React from 'react';
import OrganizationSchema from '../components/OrganizationSchema';
import WebsiteSchema from '../components/WebsiteSchema';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import SpeakableSchema from '../components/SpeakableSchema';
import EntitySchema from '../components/EntitySchema';
import DatasetSchema from '../components/DatasetSchema';
import ClaimReviewSchema from '../components/ClaimReviewSchema';
import ReviewSchema from '../components/ReviewSchema';

export const metadata = {
  title: 'Schema Testing Page - SpotCircuit',
  description: 'A comprehensive schema testing page for search engines and AI crawlers to discover all structured data on SpotCircuit.',
  alternates: {
    canonical: 'https://www.spotcircuit.com/schema-test',
    languages: {
      'x-default': 'https://www.spotcircuit.com/schema-test',
      'en': 'https://www.spotcircuit.com/schema-test',
    },
  },
  openGraph: {
    title: 'Schema Testing Page - SpotCircuit',
    description: 'A comprehensive schema testing page for search engines and AI crawlers to discover all structured data on SpotCircuit.',
    url: 'https://www.spotcircuit.com/schema-test',
    images: ['/static/images/schema-test-og.webp'],
    siteName: 'SpotCircuit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schema Testing Page - SpotCircuit',
    description: 'A comprehensive schema testing page for search engines and AI crawlers to discover all structured data on SpotCircuit.',
    images: ['/static/images/schema-test-og.webp'],
    creator: '@spotcircuit',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SchemaTestPage() {
  // Define breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.spotcircuit.com', position: 1 },
    { name: 'Schema Test', url: 'https://www.spotcircuit.com/schema-test', position: 2 },
  ];

  // Speakable CSS selectors
  const speakableSelectors = [
    '#speakable-intro',
    '#speakable-section-1',
    '#speakable-section-2',
  ];

  return (
    <div className="min-h-screen flex flex-col">      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Schema Testing Page</h1>
        
        <section id="speakable-intro" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            This page serves as a comprehensive schema testing ground for search engines and AI crawlers. 
            It contains examples of all structured data types used across SpotCircuit to help with indexing 
            and understanding our content semantically.
          </p>
        </section>
        
        <section id="speakable-section-1" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Schema Types for AI-First SEO</h2>
          <p className="mb-4">
            At SpotCircuit, we implement a variety of schema.org structured data types to optimize content 
            for both traditional search engines and AI platforms. Our schema strategy focuses on providing 
            clear context, establishing topic authority, and creating semantic relationships between content.
          </p>
        </section>
        
        <section id="speakable-section-2" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How AI Uses Schema Markup</h2>
          <p className="mb-4">
            Large Language Models (LLMs) like ChatGPT, Claude, and Google's AI Overview utilize schema markup to:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Understand content structure and context</li>
            <li>Extract key information efficiently</li>
            <li>Establish topic relevance and authority</li>
            <li>Verify factual information through citations</li>
            <li>Process speakable content for voice search</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Schema Examples</h2>
          <p className="mb-4">
            This page includes the following schema markup types:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Organization Schema</li>
            <li>Website Schema with Sitelinks Search Box</li>
            <li>BreadcrumbList Schema</li>
            <li>SpeakableSpecification Schema</li>
            <li>Entity Schema with Knowledge Graph connections</li>
            <li>Dataset Schema</li>
            <li>ClaimReview Schema</li>
            <li>Review Schema</li>
          </ul>
        </section>
      </main>      
      {/* Schema Components */}
      <OrganizationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpeakableSchema cssSelectors={speakableSelectors} />
      
      <EntitySchema 
        name="AI-First SEO"
        description="An innovative approach to search engine optimization that prioritizes AI platforms and large language models."
        url="https://www.spotcircuit.com/schema-test"
        type="Thing"
        sameAs={[
          { url: "https://en.wikipedia.org/wiki/Search_engine_optimization", name: "Search Engine Optimization - Wikipedia" },
          { url: "https://schema.org/Thing", name: "Thing - Schema.org" }
        ]}
        relatedEntities={[
          {
            name: "Large Language Models",
            url: "https://www.spotcircuit.com/resources/llm-optimization",
            description: "AI models trained on vast text datasets that can understand and generate human-like text."
          },
          {
            name: "Structured Data",
            url: "https://www.spotcircuit.com/resources/schema-markup",
            description: "Standardized format for providing information about a page and classifying its content."
          }
        ]}
      />
      
      <DatasetSchema 
        name="SEO Performance Dataset"
        description="A collection of SEO performance metrics and case studies demonstrating the effectiveness of AI-First SEO strategies."
        url="https://www.spotcircuit.com/schema-test"
        keywords={["SEO", "AI-First SEO", "Performance Metrics", "Case Studies"]}
        creator={{
          name: "SpotCircuit",
          url: "https://www.spotcircuit.com"
        }}
        distribution={{
          contentUrl: "https://www.spotcircuit.com/data/seo-performance.json",
          encodingFormat: "application/json"
        }}
      />
      
      <ClaimReviewSchema 
        claimReviewed="AI-First SEO produces better results than traditional SEO for modern search engines"
        author={{
          name: "SpotCircuit Research Team",
          url: "https://www.spotcircuit.com/about"
        }}
        reviewRating={{
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1"
        }}
        url="https://www.spotcircuit.com/schema-test"
        itemReviewed={{
          name: "AI-First SEO Methodology",
          description: "Modern approach to SEO focusing on AI and LLM optimization"
        }}
      />
      
      <ReviewSchema 
        itemReviewed={{
          name: "SpotCircuit AI-First SEO Services",
          description: "Professional SEO services focused on optimizing for AI platforms and large language models",
          url: "https://www.spotcircuit.com/services"
        }}
        reviewRating={{
          ratingValue: "4.9",
          bestRating: "5",
          reviewCount: 87
        }}
        author={{
          name: "John Smith",
          type: "Person"
        }}
        reviewBody="SpotCircuit transformed our content strategy with their AI-First SEO approach. We've seen a 215% increase in AI snippet appearances and a 78% boost in organic traffic. Their structured data implementation and semantic optimization were particularly effective."
      />
    </div>
  );
}