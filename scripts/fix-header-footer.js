const fs = require('fs');
const path = require('path');

// List of files to fix (from the search results)
const filesToFix = [
  'app/(main)/booking/page.tsx',
  'app/(main)/layout.tsx',
  'app/accessibility/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-search-visibility/page.tsx',
  'app/answercircuit/page.tsx',
  'app/blog/[slug]/page.tsx',
  'app/blog/category/[slug]/page.tsx',
  'app/blog/category/page.tsx',
  'app/blog/page-fixed.tsx',
  'app/blog/page.tsx',
  'app/blog/tag/[slug]/page.tsx',
  'app/case-studies/page.tsx',
  'app/contact/page.tsx',
  'app/cookies/page.tsx',
  'app/industries/consulting/page.tsx',
  'app/industries/electrical/page.tsx',
  'app/industries/financial-advisors/page.tsx',
  'app/industries/hvac/page.tsx',
  'app/industries/insurance/page.tsx',
  'app/industries/legal/page.tsx',
  'app/industries/marketing-agencies/page.tsx',
  'app/industries/medical-spas/page.tsx',
  'app/industries/medical/page.tsx',
  'app/industries/page.tsx',
  'app/industries/plumbing/page.tsx',
  'app/industries/recruiting/page.tsx',
  'app/industries/roofing/page.tsx',
  'app/industries/saas/page.tsx',
  'app/launch/page.tsx',
  'app/lead-generation/ai-lead-capture/page.tsx',
  'app/lead-generation/analytics/page.tsx',
  'app/lead-generation/conversion-optimization/page.tsx',
  'app/lead-generation/lead-nurturing/page.tsx',
  'app/lead-generation/page.tsx',
  'app/local-marketing/page.tsx',
  'app/page.tsx',
  'app/privacy/page.tsx',
  'app/process/page.tsx',
  'app/resources/ai-marketing-tools/page.tsx',
  'app/resources/ai-search-optimization/page.tsx',
  'app/resources/analytics-conversion-guide/page.tsx',
  'app/resources/content-strategy-blueprint/page.tsx',
  'app/resources/local-seo-guide/page.tsx',
  'app/resources/page.tsx',
  'app/resources/technical-seo-checklist/page.tsx',
  'app/schema-test/page.tsx',
  'app/seo2/page.tsx',
  'app/services/page-old.tsx',
  'app/services/page.tsx',
  'app/solutions/analyticscircuit/page.tsx',
  'app/solutions/chatcircuit/page.tsx',
  'app/solutions/clientcircuit/page.tsx',
  'app/solutions/contentcircuit/page.tsx',
  'app/terms/page.tsx'
];

const projectRoot = path.resolve(__dirname, '..');

filesToFix.forEach(file => {
  const filePath = path.join(projectRoot, file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove Header import
    if (content.includes("import Header from '@/components/Header';")) {
      content = content.replace(/import Header from '@\/components\/Header';\n/g, '');
      modified = true;
    }
    
    // Remove Footer import
    if (content.includes("import Footer from '@/components/Footer';")) {
      content = content.replace(/import Footer from '@\/components\/Footer';\n/g, '');
      modified = true;
    }
    
    // Remove <Header /> usage
    if (content.includes('<Header />')) {
      content = content.replace(/\s*<Header \/>\n?/g, '');
      modified = true;
    }
    
    // Remove <Footer /> usage
    if (content.includes('<Footer />')) {
      content = content.replace(/\s*<Footer \/>\n?/g, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed: ${file}`);
    } else {
      console.log(`- Skipped: ${file} (no changes needed)`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${file}:`, error.message);
  }
});

console.log('\nDone! Header and Footer components have been removed from page files.');