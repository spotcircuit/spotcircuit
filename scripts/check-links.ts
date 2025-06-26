import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { JSDOM } from 'jsdom';

// Configuration
const BASE_URL = 'https://spotcircuit.com';
const SITE_ROOT = path.join(process.cwd(), 'app');
const IGNORE_PATHS = ['/api', '/_next', '/_vercel', '/.next'];
const IGNORE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico', '.css', '.js'];

// Track found URLs and their statuses
const foundUrls = new Set<string>();
const checkedUrls = new Map<string, { status: number; source: string[] }>();
const brokenUrls = new Map<string, { status: number; source: string[] }>();

// Get all HTML/TSX files in the app directory
async function getFiles() {
  const files = await glob('**/*.{tsx,ts,js,jsx,md,mdx}', {
    cwd: SITE_ROOT,
    ignore: ['node_modules/**', '.next/**', 'out/**', 'public/**'],
  });
  return files;
}

// Extract URLs from a file
async function extractUrls(filePath: string) {
  const content = await fs.promises.readFile(path.join(SITE_ROOT, filePath), 'utf-8');
  const dom = new JSDOM(`<!DOCTYPE html><body>${content}</body>`);
  const document = dom.window.document;
  
  // Find all links
  const links = Array.from(document.querySelectorAll('a[href]')).map(a => (a as HTMLAnchorElement).href);
  
  // Find Next.js Link components (simplified regex)
  const linkComponents = [...content.matchAll(/<Link[^>]*href=["']([^"']+)["'][^>]*>/g)];
  const linkUrls = linkComponents.map(match => match[1]);
  
  // Combine and filter unique URLs
  const urls = [...new Set([...links, ...linkUrls])]
    .filter(url => {
      // Filter out external URLs
      if (url.startsWith('http') && !url.startsWith(BASE_URL)) return false;
      
      // Filter out ignored paths and extensions
      const urlPath = url.replace(BASE_URL, '');
      if (IGNORE_EXTENSIONS.some(ext => urlPath.endsWith(ext))) return false;
      if (IGNORE_PATHS.some(ignorePath => urlPath.startsWith(ignorePath))) return false;
      
      return true;
    });
    
  return urls;
}

// Check if a URL is valid
async function checkUrl(url: string, sourceFile: string) {
  try {
    // Handle relative URLs
    if (!url.startsWith('http')) {
      url = new URL(url, BASE_URL).toString();
    }
    
    // Skip if already checked
    if (checkedUrls.has(url)) {
      const existing = checkedUrls.get(url)!;
      if (!existing.source.includes(sourceFile)) {
        existing.source.push(sourceFile);
      }
      return;
    }
    
    // Make a HEAD request to check the URL
    const response = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    
    // Record the result
    checkedUrls.set(url, {
      status: response.status,
      source: [sourceFile]
    });
    
    if (response.status >= 400) {
      brokenUrls.set(url, {
        status: response.status,
        source: [sourceFile]
      });
    }
    
    console.log(`[${response.status}] ${url}`);
  } catch (error) {
    console.error(`[ERROR] ${url} (${error})`);
    brokenUrls.set(url, {
      status: 0,
      source: [sourceFile],
      error: error.message
    });
  }
}

// Main function
async function main() {
  console.log('🔍 Scanning for broken links...\n');
  
  // Get all files
  const files = await getFiles();
  
  // Process each file
  for (const file of files) {
    try {
      const urls = await extractUrls(file);
      for (const url of urls) {
        foundUrls.add(url);
        await checkUrl(url, file);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
  
  // Print summary
  console.log('\n📊 Scan complete!');
  console.log(`✅ Found ${foundUrls.size} unique URLs`);
  console.log(`❌ Found ${brokenUrls.size} broken URLs\n`);
  
  // Print broken URLs
  if (brokenUrls.size > 0) {
    console.log('Broken URLs:');
    for (const [url, { status, source }] of brokenUrls.entries()) {
      console.log(`\n[${status}] ${url}`);
      console.log('  Found in:');
      source.forEach(src => console.log(`  - ${src}`));
    }
  }
  
  // Save results to a file
  const results = {
    timestamp: new Date().toISOString(),
    totalUrls: foundUrls.size,
    brokenUrls: brokenUrls.size,
    broken: Array.from(brokenUrls.entries()).map(([url, { status, source }]) => ({
      url,
      status,
      source
    }))
  };
  
  await fs.promises.writeFile(
    path.join(process.cwd(), 'link-check-results.json'),
    JSON.stringify(results, null, 2)
  );
  
  console.log('\n📝 Results saved to link-check-results.json');
  process.exit(brokenUrls.size > 0 ? 1 : 0);
}

main().catch(console.error);
