#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

const results = {
  structuredData: { valid: [], issues: [] },
  internalLinks: { valid: [], redirects: [] },
  images: { valid: [], missing: [] },
  technical: { issues: [], passed: [] }
};

async function validateStructuredData() {
  try {
    console.log('\n🔍 Validating Structured Data...');

    // Find all schema component files
    const { stdout } = await execAsync('find /mnt/c/Users/Big\\ Daddy\\ Pyatt/CascadeProjects/spotcircuit -name "*Schema*.tsx" -o -name "*schema*.tsx"');
    const schemaFiles = stdout.trim().split('\n').filter(file => file.trim());

    console.log(`Found ${schemaFiles.length} schema files to validate`);

    let validSchemas = 0;
    let schemaIssues = 0;

    for (const file of schemaFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const relativePath = file.replace('/mnt/c/Users/Big Daddy Pyatt/CascadeProjects/spotcircuit/', '');

        // Check for required schema properties
        const hasContext = content.includes('@context');
        const hasType = content.includes('@type');
        const hasJsonLd = content.includes('application/ld+json') || content.includes('JSON-LD');

        if (hasContext && hasType) {
          validSchemas++;
          results.structuredData.valid.push({
            file: relativePath,
            hasJsonLd,
            issues: []
          });
        } else {
          schemaIssues++;
          const issues = [];
          if (!hasContext) issues.push('missing @context');
          if (!hasType) issues.push('missing @type');

          results.structuredData.issues.push({
            file: relativePath,
            issues
          });
        }
      } catch (error) {
        schemaIssues++;
        results.structuredData.issues.push({
          file: file.replace('/mnt/c/Users/Big Daddy Pyatt/CascadeProjects/spotcircuit/', ''),
          issues: [`Error reading file: ${error.message}`]
        });
      }
    }

    console.log(`✅ Valid schemas: ${validSchemas}`);
    console.log(`⚠️  Schema issues: ${schemaIssues}`);

  } catch (error) {
    console.error('Error validating structured data:', error.message);
  }
}

async function validateInternalLinks() {
  try {
    console.log('\n🔗 Validating Internal Links...');

    // Check for old redirect patterns in component files
    const { stdout } = await execAsync('find /mnt/c/Users/Big\\ Daddy\\ Pyatt/CascadeProjects/spotcircuit/app -name "*.tsx" -exec grep -l "local-services\\|/pricing" {} \\;');
    const filesWithOldLinks = stdout.trim().split('\n').filter(file => file.trim());

    if (filesWithOldLinks.length > 0) {
      console.log(`⚠️  Found ${filesWithOldLinks.length} files with potential old links`);

      for (const file of filesWithOldLinks) {
        const content = fs.readFileSync(file, 'utf8');
        const relativePath = file.replace('/mnt/c/Users/Big Daddy Pyatt/CascadeProjects/spotcircuit/', '');

        const hasOldLocalServices = content.includes('local-services');
        const hasOldPricing = content.includes('/pricing');

        if (hasOldLocalServices || hasOldPricing) {
          const issues = [];
          if (hasOldLocalServices) issues.push('contains /local-services links');
          if (hasOldPricing) issues.push('contains /pricing links');

          results.internalLinks.redirects.push({
            file: relativePath,
            issues
          });
        }
      }
    } else {
      results.internalLinks.valid.push('No old redirect links found in components');
    }

    console.log(`✅ Internal links validation complete`);

  } catch (error) {
    console.error('Error validating internal links:', error.message);
  }
}

async function validateImages() {
  try {
    console.log('\n🖼️  Validating Images...');

    // Check for OpenGraph and social media images
    const imagesToCheck = [
      'og-image.jpg',
      'opengraph-image.png',
      'twitter-image.png',
      'spotcircuit-logo.png',
      'favicon.ico',
      'favicon-16x16.png',
      'favicon-32x32.png',
      'apple-touch-icon.png'
    ];

    for (const image of imagesToCheck) {
      const imagePath = `/mnt/c/Users/Big Daddy Pyatt/CascadeProjects/spotcircuit/public/${image}`;
      if (fs.existsSync(imagePath)) {
        results.images.valid.push(image);
      } else {
        results.images.missing.push(image);
      }
    }

    console.log(`✅ Valid images: ${results.images.valid.length}`);
    console.log(`❌ Missing images: ${results.images.missing.length}`);

  } catch (error) {
    console.error('Error validating images:', error.message);
  }
}

async function validateTechnicalSEO() {
  try {
    console.log('\n⚙️ Validating Technical SEO...');

    // Check robots.txt
    const robotsPath = '/mnt/c/Users/Big Daddy Pyatt/CascadeProjects/spotcircuit/public/robots.txt';
    if (fs.existsSync(robotsPath)) {
      const robotsContent = fs.readFileSync(robotsPath, 'utf8');
      if (robotsContent.includes('User-agent') && robotsContent.includes('Allow')) {
        results.technical.passed.push('robots.txt exists and is properly configured');
      } else {
        results.technical.issues.push('robots.txt exists but may be misconfigured');
      }
    } else {
      results.technical.issues.push('robots.txt not found');
    }

    // Check layout.tsx for viewport and mobile optimization
    const layoutPath = '/mnt/c/Users/Big Daddy Pyatt/CascadeProjects/spotcircuit/app/layout.tsx';
    if (fs.existsSync(layoutPath)) {
      const layoutContent = fs.readFileSync(layoutPath, 'utf8');

      if (layoutContent.includes('viewport')) {
        results.technical.passed.push('Viewport configuration found in layout');
      } else {
        results.technical.issues.push('Viewport configuration missing in layout');
      }

      if (layoutContent.includes('mobile-web-app-capable')) {
        results.technical.passed.push('Mobile app capabilities configured');
      } else {
        results.technical.issues.push('Mobile app capabilities not configured');
      }
    }

    // Check for manifest.json
    const manifestPath = '/mnt/c/Users/Big Daddy Pyatt/CascadeProjects/spotcircuit/public/manifest.json';
    if (fs.existsSync(manifestPath)) {
      results.technical.passed.push('PWA manifest.json exists');
    } else {
      results.technical.issues.push('PWA manifest.json not found');
    }

    console.log(`✅ Technical checks passed: ${results.technical.passed.length}`);
    console.log(`⚠️  Technical issues: ${results.technical.issues.length}`);

  } catch (error) {
    console.error('Error validating technical SEO:', error.message);
  }
}

async function generateComprehensiveReport() {
  console.log('\n' + '='.repeat(100));
  console.log('COMPREHENSIVE SEO VALIDATION REPORT - SpotCircuit');
  console.log('='.repeat(100));

  // Structured Data Report
  console.log('\n🧩 STRUCTURED DATA (JSON-LD SCHEMAS):');
  console.log(`✅ Valid schema files: ${results.structuredData.valid.length}`);
  console.log(`⚠️  Schema issues: ${results.structuredData.issues.length}`);

  if (results.structuredData.issues.length > 0) {
    console.log('\nSchema issues found:');
    results.structuredData.issues.forEach(item => {
      console.log(`  - ${item.file}: ${item.issues.join(', ')}`);
    });
  }

  // Internal Links Report
  console.log('\n🔗 INTERNAL LINKS & REDIRECTS:');
  if (results.internalLinks.valid.length > 0) {
    console.log(`✅ ${results.internalLinks.valid.join(', ')}`);
  }

  if (results.internalLinks.redirects.length > 0) {
    console.log(`⚠️  Files with old redirect links: ${results.internalLinks.redirects.length}`);
    console.log('\nOld links found:');
    results.internalLinks.redirects.forEach(item => {
      console.log(`  - ${item.file}: ${item.issues.join(', ')}`);
    });
  } else {
    console.log('✅ No old redirect links found');
  }

  // Images Report
  console.log('\n🖼️  IMAGES & MEDIA:');
  if (results.images.valid.length > 0) {
    console.log(`✅ Found images: ${results.images.valid.join(', ')}`);
  }

  if (results.images.missing.length > 0) {
    console.log(`❌ Missing images: ${results.images.missing.join(', ')}`);
  }

  // Technical SEO Report
  console.log('\n⚙️ TECHNICAL SEO:');
  if (results.technical.passed.length > 0) {
    console.log('✅ Passed checks:');
    results.technical.passed.forEach(check => {
      console.log(`  - ${check}`);
    });
  }

  if (results.technical.issues.length > 0) {
    console.log('\n⚠️  Technical issues:');
    results.technical.issues.forEach(issue => {
      console.log(`  - ${issue}`);
    });
  }

  console.log('\n' + '='.repeat(100));
  console.log('🎯 ADDITIONAL VALIDATION COMPLETE!');
  console.log('='.repeat(100));
}

async function main() {
  console.log('🔍 Starting Additional SEO Validation for SpotCircuit...\n');

  await validateStructuredData();
  await validateInternalLinks();
  await validateImages();
  await validateTechnicalSEO();
  await generateComprehensiveReport();

  console.log('\n🎯 Additional SEO validation complete!');
}

main().catch(console.error);