#!/usr/bin/env node
/**
 * Script to fix canonical URLs in all metadata files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Map of page paths to their canonical URLs
const canonicalMappings: { [key: string]: string } = {
  '/app/accessibility/page-metadata.ts': '/accessibility',
  '/app/answercircuit/metadata.ts': '/answercircuit',
  '/app/blog/metadata.ts': '/blog',
  '/app/cookies/page-metadata.ts': '/cookies',
  '/app/industries/page-metadata.ts': '/industries',
  '/app/industries/roofing/metadata.ts': '/industries/roofing',
  '/app/local-marketing/metadata.ts': '/local-marketing',
  '/app/medical-spa-ai-audit/metadata.ts': '/medical-spa-ai-audit',
  '/app/privacy/page-metadata.ts': '/privacy',
  '/app/resources/ai-search-optimization/metadata.ts': '/resources/ai-search-optimization',
  '/app/resources/content-strategy-blueprint/metadata.ts': '/resources/content-strategy-blueprint',
  '/app/resources/local-seo-guide/metadata.ts': '/resources/local-seo-guide',
  '/app/resources/metadata.ts': '/resources',
  '/app/resources/technical-seo-checklist/metadata.ts': '/resources/technical-seo-checklist',
  '/app/seo2/metadata.ts': '/seo2',
  '/app/services/page-metadata.ts': '/services',
  '/app/terms/page-metadata.ts': '/terms',
};

function fixCanonicalInFile(filePath: string, canonicalUrl: string) {
  const fullPath = path.join(dirname(__dirname), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${fullPath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf-8');
  
  // Check if alternates.canonical already exists
  if (content.includes('alternates:') && content.includes('canonical:')) {
    console.log(`✓ ${filePath} already has canonical URL`);
    return;
  }

  // Check if alternates exists but no canonical
  if (content.includes('alternates:') && !content.includes('canonical:')) {
    // Add canonical to existing alternates
    content = content.replace(
      /alternates:\s*{/,
      `alternates: {\n    canonical: '${canonicalUrl}',`
    );
  } else {
    // Add alternates block before openGraph or at the end of metadata object
    const openGraphMatch = content.match(/(\s*)openGraph:\s*{/);
    if (openGraphMatch) {
      const indent = openGraphMatch[1];
      content = content.replace(
        /(\s*)openGraph:\s*{/,
        `${indent}alternates: {\n${indent}  canonical: '${canonicalUrl}',\n${indent}},\n${indent}openGraph: {`
      );
    } else {
      // Find the closing of the metadata object
      const metadataMatch = content.match(/export\s+const\s+\w+:\s*Metadata\s*=\s*{[\s\S]*?(\n};)/);
      if (metadataMatch) {
        content = content.replace(
          metadataMatch[1],
          `,\n  alternates: {\n    canonical: '${canonicalUrl}',\n  },\n};`
        );
      }
    }
  }

  fs.writeFileSync(fullPath, content);
  console.log(`✅ Fixed canonical URL in ${filePath} -> ${canonicalUrl}`);
}

// Fix all files
console.log('🔧 Fixing canonical URLs in metadata files...\n');

for (const [filePath, canonicalUrl] of Object.entries(canonicalMappings)) {
  fixCanonicalInFile(filePath, canonicalUrl);
}

console.log('\n✨ Done! All metadata files should now have proper canonical URLs.');
console.log('\n⚠️  Note: The homepage (/) metadata is in app/metadata.ts and should have canonical: "/"');