/**
 * Script to scrape all key pages of neonalloys.com and save them locally
 * Uses native fetch which handles redirects automatically!
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://neonalloys.com';
const OUTPUT_DIR = './neonalloys_clone/pages';

// The 31 pages identified from the homepage navigation
const PAGES = [
  { url: '/', filename: 'index.html' },
  { url: '/about-us.php', filename: 'about-us.html' },
  { url: '/products.php', filename: 'products.html' },
  { url: '/pipes-tubes.php', filename: 'pipes-tubes.html' },
  { url: '/sheets-plates.php', filename: 'sheets-plates.html' },
  { url: '/round-bars.php', filename: 'round-bars.html' },
  { url: '/flanges.php', filename: 'flanges.html' },
  { url: '/buttweld-fittings.php', filename: 'buttweld-fittings.html' },
  { url: '/socketweld-fittings.php', filename: 'socketweld-fittings.html' },
  { url: '/fasteners.php', filename: 'fasteners.html' },
  { url: '/refractory-fixings-anchors.php', filename: 'refractory-fixings-anchors.html' },
  { url: '/angles-channels.php', filename: 'angles-channels.html' },
  { url: '/tube-sheet.php', filename: 'tube-sheet.html' },
  { url: '/ferrule-fittings.php', filename: 'ferrule-fittings.html' },
  { url: '/cladded-plates.php', filename: 'cladded-plates.html' },
  { url: '/olets.php', filename: 'olets.html' },
  { url: '/valves.php', filename: 'valves.html' },
  { url: '/quality-policy.php', filename: 'quality-policy.html' },
  { url: '/certification.php', filename: 'certification.html' },
  { url: '/presence.php', filename: 'presence.html' },
  { url: '/gallery.php', filename: 'gallery.html' },
  { url: '/enquiry.php', filename: 'enquiry.html' },
  { url: '/blog.php', filename: 'blog.html' },
  { url: '/contact.php', filename: 'contact.html' },
  { url: '/hs-codes.php', filename: 'hs-codes.html' },
  { url: '/nickel-products.php', filename: 'nickel-products.html' },
  { url: '/weight-calculator.php', filename: 'weight-calculator.html' },
];

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function scrapeAll() {
  for (const page of PAGES) {
    const fullUrl = BASE_URL + page.url;
    const outputPath = path.join(OUTPUT_DIR, page.filename);
    
    try {
      console.log(`Fetching: ${fullUrl}`);
      const response = await fetch(fullUrl, { redirect: 'follow' });
      const html = await response.text();
      fs.writeFileSync(outputPath, html, 'utf8');
      console.log(`  SAVED: ${page.filename} (${html.length} bytes)`);
    } catch (err) {
      console.error(`  ERROR: ${page.filename} -> ${err.message}`);
    }
    
    // Brief pause to be respectful
    await new Promise(r => setTimeout(r, 500));
  }
  console.log('\\nDone! All pages scraped properly.');
}

scrapeAll();
