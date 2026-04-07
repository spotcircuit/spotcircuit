#!/usr/bin/env node

/**
 * Script to submit all SpotCircuit URLs to IndexNow
 * This helps search engines discover and index your content faster
 */

const https = require('https');

const SITE_URL = 'https://www.spotcircuit.com';
const INDEX_NOW_KEY = '1aa30a8e6e714017a394401486f63894';
const INDEX_NOW_HOST = 'api.indexnow.org';

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
 * Submit URLs to IndexNow
 */
function submitToIndexNow() {
  console.log('🚀 Starting IndexNow submission...');
  console.log(`📍 Site URL: ${SITE_URL}`);
  console.log(`🔑 Key: ${INDEX_NOW_KEY}`);
  console.log(`📝 Total URLs to submit: ${urls.length}`);
  console.log('');

  const payload = JSON.stringify({
    host: 'www.spotcircuit.com',
    key: INDEX_NOW_KEY,
    keyLocation: `${SITE_URL}/${INDEX_NOW_KEY}.txt`,
    urlList: urls
  });

  const options = {
    hostname: INDEX_NOW_HOST,
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload),
      'User-Agent': 'SpotCircuit-IndexNow-Submitter/1.0'
    }
  };

  console.log('📤 Submitting all URLs to IndexNow...');

  const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('');
      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log(`✅ Success! All ${urls.length} URLs submitted (Status: ${res.statusCode})`);
        console.log('');
        console.log('✨ IndexNow submission complete!');
        console.log('');
        console.log('ℹ️  Note: It may take a few minutes to several hours for search engines');
        console.log('   to process your submission. You can check the status at:');
        console.log('   - Bing Webmaster Tools: https://www.bing.com/webmasters');
        console.log('   - Yandex Webmaster: https://webmaster.yandex.com');
        console.log('   - Seznam Webmaster: https://www.seznam.cz/webmaster');
      } else {
        console.log(`❌ Failed! Status: ${res.statusCode}`);
        if (data) {
          console.log(`Response: ${data}`);
        }
        console.log('');
        console.log('Common issues:');
        console.log('- Check that the key file is accessible at: ' + `${SITE_URL}/${INDEX_NOW_KEY}.txt`);
        console.log('- Ensure the key in the file matches the key in this script');
        console.log('- Verify your domain is correctly configured');
      }
    });
  });

  req.on('error', (error) => {
    console.error('❌ Error submitting to IndexNow:', error.message);
    console.log('');
    console.log('Please check your internet connection and try again.');
  });

  // Send the request
  req.write(payload);
  req.end();
}

// Run the script
console.log('=====================================');
console.log('   IndexNow URL Submission Script   ');
console.log('=====================================');
console.log('');

submitToIndexNow();