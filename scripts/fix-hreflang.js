const fs = require('fs');
const path = require('path');

// List of pages that need hreflang fixes based on the issues.csv
const pagesToFix = [
  { path: '/local-marketing', file: 'app/local-marketing/metadata.ts' },
  { path: '/contact', file: 'app/contact/metadata.ts' },
  { path: '/blog', file: 'app/blog/metadata.ts' },
  { path: '/industries/electrical', file: 'app/industries/electrical/metadata.ts' },
  { path: '/industries/plumbing', file: 'app/industries/plumbing/metadata.ts' },
  { path: '/industries/roofing', file: 'app/industries/roofing/metadata.ts' },
  { path: '/industries/consulting', file: 'app/industries/consulting/metadata.ts' },
  { path: '/industries/financial-advisors', file: 'app/industries/financial-advisors/metadata.ts' },
  { path: '/industries/insurance', file: 'app/industries/insurance/metadata.ts' },
  { path: '/industries/marketing-agencies', file: 'app/industries/marketing-agencies/metadata.ts' },
  { path: '/resources/ai-search-optimization', file: 'app/resources/ai-search-optimization/metadata.ts' },
  { path: '/resources/local-seo-guide', file: 'app/resources/local-seo-guide/metadata.ts' },
  { path: '/resources/technical-seo-checklist', file: 'app/resources/technical-seo-checklist/metadata.ts' },
  { path: '/resources/ai-marketing-tools', file: 'app/resources/ai-marketing-tools/metadata.ts' },
  { path: '/resources/content-strategy-blueprint', file: 'app/resources/content-strategy-blueprint/metadata.ts' },
  { path: '/resources/analytics-conversion-guide', file: 'app/resources/analytics-conversion-guide/metadata.ts' },
  { path: '/process', file: 'app/process/metadata.ts' },
  { path: '/case-studies', file: 'app/case-studies/metadata.ts' },
  { path: '/answercircuit', file: 'app/answercircuit/metadata.ts' },
  { path: '/booking', file: 'app/booking/metadata.ts' },
];

console.log('🔧 Fixing hreflang issues in metadata files...\n');

pagesToFix.forEach(page => {
  const filePath = path.join(process.cwd(), page.file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Check if file already uses the helper
    if (content.includes('createMetadata')) {
      console.log(`✅ ${page.file} - Already using metadata helper`);
      return;
    }
    
    // Check if it has alternates with canonical
    if (content.includes('alternates:')) {
      // Extract the canonical path
      const canonicalMatch = content.match(/canonical:\s*['"`]([^'"`]+)['"`]/);
      const canonicalPath = canonicalMatch ? canonicalMatch[1] : page.path;
      
      // Update alternates to include proper hreflang
      const alternatesRegex = /alternates:\s*{[^}]*}/;
      const newAlternates = `alternates: {
    canonical: '${canonicalPath}',
    languages: {
      'x-default': '${canonicalPath}',
      'en': '${canonicalPath}',
    },
  }`;
      
      content = content.replace(alternatesRegex, newAlternates);
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ ${page.file} - Fixed hreflang tags`);
    } else {
      console.log(`⚠️  ${page.file} - No alternates found, may need manual update`);
    }
  } else {
    console.log(`❌ ${page.file} - File not found`);
  }
});

console.log('\n✨ Hreflang fixes complete!');
console.log('\n📝 Note: Some files may need manual review if they have complex metadata structures.');