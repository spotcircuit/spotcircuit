#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

const results = {
  metaDescriptions: { valid: [], issues: [], duplicates: [] },
  titles: { valid: [], issues: [], duplicates: [] },
  canonicals: { valid: [], issues: [] },
  hreflangs: { valid: [], issues: [] },
  openGraph: { valid: [], issues: [] },
  twitterCards: { valid: [], issues: [] },
  structuredData: { valid: [], issues: [] },
  images: { valid: [], missing: [] },
  summary: {}
};

// Utility functions
function extractStringValue(content, key) {
  const regex = new RegExp(`${key}:\\s*['"\`]([^'"\`]+)['"\`]`, 'i');
  const match = content.match(regex);
  return match ? match[1] : null;
}

function extractObjectValue(content, objectKey, propertyKey) {
  const objectRegex = new RegExp(`${objectKey}:\\s*{([^}]+)}`, 's');
  const objectMatch = content.match(objectRegex);
  if (objectMatch) {
    const propertyRegex = new RegExp(`${propertyKey}:\\s*['"\`]([^'"\`]+)['"\`]`, 'i');
    const propertyMatch = objectMatch[1].match(propertyRegex);
    return propertyMatch ? propertyMatch[1] : null;
  }
  return null;
}

function isAbsoluteUrl(url) {
  return url && url.startsWith('https://www.spotcircuit.com/');
}

async function validateMetadataFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = filePath.replace('/mnt/c/Users/Big Daddy Pyatt/CascadeProjects/spotcircuit/', '');

    console.log(`\nValidating: ${relativePath}`);

    // Extract metadata values
    const title = extractStringValue(content, 'title');
    const description = extractStringValue(content, 'description');
    const canonical = extractObjectValue(content, 'alternates', 'canonical');
    const ogTitle = extractObjectValue(content, 'openGraph', 'title');
    const ogDescription = extractObjectValue(content, 'openGraph', 'description');
    const ogImage = extractObjectValue(content, 'openGraph', 'images');
    const twitterTitle = extractObjectValue(content, 'twitter', 'title');
    const twitterDescription = extractObjectValue(content, 'twitter', 'description');

    // Validate meta descriptions
    if (description) {
      const length = description.length;
      if (length >= 120 && length <= 155) {
        results.metaDescriptions.valid.push({ file: relativePath, description, length });
      } else {
        results.metaDescriptions.issues.push({
          file: relativePath,
          description,
          length,
          issue: length < 120 ? 'too short' : 'too long'
        });
      }
    } else {
      results.metaDescriptions.issues.push({
        file: relativePath,
        issue: 'missing description'
      });
    }

    // Validate titles
    if (title) {
      const length = title.length;
      if (length <= 60) {
        results.titles.valid.push({ file: relativePath, title, length });
      } else {
        results.titles.issues.push({
          file: relativePath,
          title,
          length,
          issue: 'too long (over 60 chars)'
        });
      }
    } else {
      results.titles.issues.push({
        file: relativePath,
        issue: 'missing title'
      });
    }

    // Validate canonical URLs
    if (canonical) {
      if (isAbsoluteUrl(canonical)) {
        results.canonicals.valid.push({ file: relativePath, canonical });
      } else {
        results.canonicals.issues.push({
          file: relativePath,
          canonical,
          issue: 'not absolute URL'
        });
      }
    } else {
      results.canonicals.issues.push({
        file: relativePath,
        issue: 'missing canonical URL'
      });
    }

    // Validate OpenGraph
    const ogIssues = [];
    if (!ogTitle) ogIssues.push('missing og:title');
    if (!ogDescription) ogIssues.push('missing og:description');
    if (!ogImage) ogIssues.push('missing og:image');

    if (ogIssues.length === 0) {
      results.openGraph.valid.push({ file: relativePath });
    } else {
      results.openGraph.issues.push({ file: relativePath, issues: ogIssues });
    }

    // Validate Twitter Cards
    const twitterIssues = [];
    if (!twitterTitle) twitterIssues.push('missing twitter:title');
    if (!twitterDescription) twitterIssues.push('missing twitter:description');

    if (twitterIssues.length === 0) {
      results.twitterCards.valid.push({ file: relativePath });
    } else {
      results.twitterCards.issues.push({ file: relativePath, issues: twitterIssues });
    }

    // Check for description consistency
    if (description && ogDescription && description !== ogDescription) {
      results.openGraph.issues.push({
        file: relativePath,
        issues: ['og:description does not match meta description']
      });
    }

  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

async function findDuplicates() {
  // Find duplicate descriptions
  const descriptions = results.metaDescriptions.valid.map(item => item.description);
  const duplicateDescriptions = descriptions.filter((item, index) => descriptions.indexOf(item) !== index);

  if (duplicateDescriptions.length > 0) {
    results.metaDescriptions.duplicates = [...new Set(duplicateDescriptions)];
  }

  // Find duplicate titles
  const titles = results.titles.valid.map(item => item.title);
  const duplicateTitles = titles.filter((item, index) => titles.indexOf(item) !== index);

  if (duplicateTitles.length > 0) {
    results.titles.duplicates = [...new Set(duplicateTitles)];
  }
}

async function validateHreflang() {
  try {
    // Check layout.tsx for hreflang implementation
    const layoutPath = '/mnt/c/Users/Big Daddy Pyatt/CascadeProjects/spotcircuit/app/layout.tsx';
    if (fs.existsSync(layoutPath)) {
      const content = fs.readFileSync(layoutPath, 'utf8');

      // Look for hreflang patterns
      const hreflangRegex = /hrefLang.*?href.*?spotcircuit\.com/g;
      const matches = content.match(hreflangRegex);

      if (matches) {
        // Check if URLs are absolute
        const absoluteUrls = matches.filter(match => match.includes('https://www.spotcircuit.com/'));
        if (absoluteUrls.length === matches.length) {
          results.hreflangs.valid.push('All hreflang URLs are absolute');
        } else {
          results.hreflangs.issues.push('Some hreflang URLs are not absolute');
        }
      } else {
        results.hreflangs.issues.push('No hreflang implementation found in layout.tsx');
      }
    }
  } catch (error) {
    results.hreflangs.issues.push(`Error checking hreflang: ${error.message}`);
  }
}

async function validateSitemap() {
  try {
    // Check if sitemap exists and validate entries
    const sitemapPath = '/mnt/c/Users/Big Daddy Pyatt/CascadeProjects/spotcircuit/public/sitemap.xml';
    if (fs.existsSync(sitemapPath)) {
      const content = fs.readFileSync(sitemapPath, 'utf8');
      const urlMatches = content.match(/<url>/g);
      const urlCount = urlMatches ? urlMatches.length : 0;

      results.sitemap = {
        exists: true,
        urlCount,
        hasMinimumUrls: urlCount >= 60
      };
    } else {
      results.sitemap = {
        exists: false,
        issue: 'sitemap.xml not found'
      };
    }
  } catch (error) {
    results.sitemap = {
      exists: false,
      issue: `Error reading sitemap: ${error.message}`
    };
  }
}

async function validateImages() {
  const imagePaths = [
    '/mnt/c/Users/Big Daddy Pyatt/CascadeProjects/spotcircuit/public/opengraph-image.png',
    '/mnt/c/Users/Big Daddy Pyatt/CascadeProjects/spotcircuit/public/twitter-image.png'
  ];

  for (const imagePath of imagePaths) {
    const fileName = path.basename(imagePath);
    if (fs.existsSync(imagePath)) {
      results.images.valid.push(fileName);
    } else {
      results.images.missing.push(fileName);
    }
  }
}

async function generateReport() {
  console.log('\n' + '='.repeat(80));
  console.log('SEO VALIDATION REPORT - SpotCircuit');
  console.log('='.repeat(80));

  // Meta Descriptions Summary
  console.log('\n📝 META DESCRIPTIONS:');
  console.log(`✅ Valid (120-155 chars): ${results.metaDescriptions.valid.length}`);
  console.log(`⚠️  Issues: ${results.metaDescriptions.issues.length}`);
  console.log(`🔄 Duplicates: ${results.metaDescriptions.duplicates.length}`);

  if (results.metaDescriptions.issues.length > 0) {
    console.log('\nIssues found:');
    results.metaDescriptions.issues.forEach(item => {
      console.log(`  - ${item.file}: ${item.issue} ${item.length ? `(${item.length} chars)` : ''}`);
    });
  }

  if (results.metaDescriptions.duplicates.length > 0) {
    console.log('\nDuplicate descriptions:');
    results.metaDescriptions.duplicates.forEach(desc => {
      console.log(`  - "${desc}"`);
    });
  }

  // Titles Summary
  console.log('\n📋 TITLE TAGS:');
  console.log(`✅ Valid (≤60 chars): ${results.titles.valid.length}`);
  console.log(`⚠️  Issues: ${results.titles.issues.length}`);
  console.log(`🔄 Duplicates: ${results.titles.duplicates.length}`);

  if (results.titles.issues.length > 0) {
    console.log('\nTitle issues:');
    results.titles.issues.forEach(item => {
      console.log(`  - ${item.file}: ${item.issue} ${item.length ? `(${item.length} chars)` : ''}`);
    });
  }

  // Canonical URLs Summary
  console.log('\n🔗 CANONICAL URLS:');
  console.log(`✅ Valid absolute URLs: ${results.canonicals.valid.length}`);
  console.log(`⚠️  Issues: ${results.canonicals.issues.length}`);

  if (results.canonicals.issues.length > 0) {
    console.log('\nCanonical URL issues:');
    results.canonicals.issues.forEach(item => {
      console.log(`  - ${item.file}: ${item.issue}`);
    });
  }

  // OpenGraph Summary
  console.log('\n🌐 OPENGRAPH METADATA:');
  console.log(`✅ Complete: ${results.openGraph.valid.length}`);
  console.log(`⚠️  Issues: ${results.openGraph.issues.length}`);

  if (results.openGraph.issues.length > 0) {
    console.log('\nOpenGraph issues:');
    results.openGraph.issues.forEach(item => {
      console.log(`  - ${item.file}: ${item.issues.join(', ')}`);
    });
  }

  // Twitter Cards Summary
  console.log('\n🐦 TWITTER CARDS:');
  console.log(`✅ Complete: ${results.twitterCards.valid.length}`);
  console.log(`⚠️  Issues: ${results.twitterCards.issues.length}`);

  if (results.twitterCards.issues.length > 0) {
    console.log('\nTwitter Card issues:');
    results.twitterCards.issues.forEach(item => {
      console.log(`  - ${item.file}: ${item.issues.join(', ')}`);
    });
  }

  // Hreflang Summary
  console.log('\n🌍 HREFLANG:');
  if (results.hreflangs.valid.length > 0) {
    console.log(`✅ ${results.hreflangs.valid.join(', ')}`);
  }
  if (results.hreflangs.issues.length > 0) {
    console.log(`⚠️  Issues: ${results.hreflangs.issues.join(', ')}`);
  }

  // Sitemap Summary
  console.log('\n🗺️  SITEMAP:');
  if (results.sitemap.exists) {
    console.log(`✅ sitemap.xml exists with ${results.sitemap.urlCount} URLs`);
    console.log(`${results.sitemap.hasMinimumUrls ? '✅' : '⚠️ '} ${results.sitemap.hasMinimumUrls ? 'Has' : 'Missing'} minimum 60 URLs`);
  } else {
    console.log(`❌ ${results.sitemap.issue}`);
  }

  // Images Summary
  console.log('\n🖼️  IMAGES:');
  console.log(`✅ Valid: ${results.images.valid.join(', ')}`);
  if (results.images.missing.length > 0) {
    console.log(`❌ Missing: ${results.images.missing.join(', ')}`);
  }

  // Overall Summary
  const totalFiles = results.metaDescriptions.valid.length + results.metaDescriptions.issues.length;
  const validDescriptions = results.metaDescriptions.valid.length;
  const validTitles = results.titles.valid.length;
  const validCanonicals = results.canonicals.valid.length;
  const validOg = results.openGraph.valid.length;
  const validTwitter = results.twitterCards.valid.length;

  console.log('\n' + '='.repeat(80));
  console.log('📊 OVERALL SUMMARY:');
  console.log(`Total metadata files validated: ${totalFiles}`);
  console.log(`Meta descriptions: ${validDescriptions}/${totalFiles} valid (${Math.round(validDescriptions/totalFiles*100)}%)`);
  console.log(`Title tags: ${validTitles}/${totalFiles} valid (${Math.round(validTitles/totalFiles*100)}%)`);
  console.log(`Canonical URLs: ${validCanonicals}/${totalFiles} valid (${Math.round(validCanonicals/totalFiles*100)}%)`);
  console.log(`OpenGraph: ${validOg}/${totalFiles} complete (${Math.round(validOg/totalFiles*100)}%)`);
  console.log(`Twitter Cards: ${validTwitter}/${totalFiles} complete (${Math.round(validTwitter/totalFiles*100)}%)`);
  console.log('='.repeat(80));
}

async function main() {
  console.log('🔍 Starting SEO Validation for SpotCircuit...\n');

  // Find all metadata files
  const { stdout } = await execAsync('find /mnt/c/Users/Big\\ Daddy\\ Pyatt/CascadeProjects/spotcircuit/app -name "metadata.ts*"');
  const metadataFiles = stdout.trim().split('\n').filter(file => file.trim());

  console.log(`Found ${metadataFiles.length} metadata files to validate`);

  // Validate each metadata file
  for (const file of metadataFiles) {
    await validateMetadataFile(file);
  }

  // Find duplicates
  await findDuplicates();

  // Validate hreflang
  await validateHreflang();

  // Validate sitemap
  await validateSitemap();

  // Validate images
  await validateImages();

  // Generate report
  await generateReport();

  console.log('\n🎯 SEO validation complete!');
}

main().catch(console.error);