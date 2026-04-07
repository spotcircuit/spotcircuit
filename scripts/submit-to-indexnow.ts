#!/usr/bin/env node

/**
 * Script to submit all SpotCircuit URLs to IndexNow
 * This helps search engines discover and index your content faster
 */

import * as fs from 'fs';
import * as path from 'path';

const SITE_URL = 'https://www.spotcircuit.com';
const INDEX_NOW_KEY = '1aa30a8e6e714017a394401486f63894';
const INDEX_NOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

// List of all URLs to submit
const urls = [
  // Main pages
  '/',
  '/services',
  '/contact',
  '/booking',
  '/case-studies',
  '/process',
  '/terms',
  '/privacy',
  '/cookies',
  '/accessibility',
  '/sitemap.xml',
  
  // AI & Automation pages
  '/ai-automation',
  '/ai-search-visibility',
  '/answercircuit',
  '/seo2',
  '/local-marketing',
  '/medical-spa-ai-audit',
  
  // Lead Generation pages
  '/lead-generation',
  '/lead-generation/ai-lead-capture',
  '/lead-generation/analytics',
  '/lead-generation/conversion-optimization',
  '/lead-generation/lead-nurturing',
  
  // Industries
  '/industries',
  '/industries/hvac',
  '/industries/plumbing',
  '/industries/electrical',
  '/industries/roofing',
  '/industries/contracting',
  '/industries/medical-spas',
  '/industries/medical',
  '/industries/legal',
  '/industries/financial-advisors',
  '/industries/insurance',
  '/industries/consulting',
  '/industries/marketing-agencies',
  '/industries/recruiting',
  '/industries/saas',
  
  // Solutions
  '/solutions/analyticscircuit',
  '/solutions/chatcircuit',
  '/solutions/clientcircuit',
  '/solutions/contentcircuit',
  
  // Resources
  '/resources',
  '/resources/ai-search-optimization',
  '/resources/ai-marketing-tools',
  '/resources/analytics-conversion-guide',
  '/resources/content-strategy-blueprint',
  '/resources/local-seo-guide',
  '/resources/technical-seo-checklist',
  
  // Blog
  '/blog',
  '/blog/google-business-profile-optimization',
  '/blog/reputation-management-guide',
  '/blog/ai-automation-guide',
  '/blog/seo-trends-2025',
  '/blog/home-service-marketing',
  
  // Other pages
  '/launch',
  '/schema-test',
  '/sitemap-visual',
  '/api-docs',
  '/roi-calculator',
  '/tools',
  '/webinars',
  '/solutions',
  '/resources/downloads/local-seo-checklist'
].map(url => `${SITE_URL}${url}`);

/**
 * Submit URLs to IndexNow in batches
 */
async function submitToIndexNow() {
  console.log('🚀 Starting IndexNow submission...');
  console.log(`📍 Site URL: ${SITE_URL}`);
  console.log(`🔑 Key: ${INDEX_NOW_KEY}`);
  console.log(`📝 Total URLs to submit: ${urls.length}`);
  console.log('');

  // IndexNow accepts up to 10,000 URLs per request
  // We'll submit in batches of 100 for better tracking
  const batchSize = 100;
  const batches = [];
  
  for (let i = 0; i < urls.length; i += batchSize) {
    batches.push(urls.slice(i, i + batchSize));
  }

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`📤 Submitting batch ${i + 1}/${batches.length} (${batch.length} URLs)...`);
    
    const payload = {
      host: 'www.spotcircuit.com',
      key: INDEX_NOW_KEY,
      keyLocation: `${SITE_URL}/${INDEX_NOW_KEY}.txt`,
      urlList: batch
    };

    try {
      const response = await fetch(INDEX_NOW_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'SpotCircuit-IndexNow-Submitter/1.0'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log(`✅ Batch ${i + 1} submitted successfully (Status: ${response.status})`);
        successCount += batch.length;
      } else {
        const errorText = await response.text();
        console.error(`❌ Batch ${i + 1} failed (Status: ${response.status}): ${errorText}`);
        failCount += batch.length;
      }

      // Add a small delay between batches to be respectful
      if (i < batches.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`❌ Error submitting batch ${i + 1}:`, error);
      failCount += batch.length;
    }
  }

  console.log('');
  console.log('📊 Submission Summary:');
  console.log(`✅ Successfully submitted: ${successCount} URLs`);
  if (failCount > 0) {
    console.log(`❌ Failed: ${failCount} URLs`);
  }
  console.log('');
  console.log('✨ IndexNow submission complete!');
  console.log('');
  console.log('ℹ️  Note: It may take a few minutes to several hours for search engines');
  console.log('   to process your submission. You can check the status at:');
  console.log('   - Bing Webmaster Tools: https://www.bing.com/webmasters');
  console.log('   - Yandex Webmaster: https://webmaster.yandex.com');
}

// Run the script
submitToIndexNow().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});