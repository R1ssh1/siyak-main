/**
 * Phase 4: Route Cleanup Script
 * 
 * Removes broken sidebar links from all converted-legacy pages:
 * 1. Sub-type links like /nickel-alloy-pipes-tubes, /stainless-steel-buttweld-fittings, etc.
 *    that don't have corresponding routes — replaced by redirecting to the parent page.
 * 2. Completely defunct products: /graphite-filled-bronze-bushes, /billets-manufacturer-supplier
 *    — removed entirely from every Product Range sidebar list.
 * 
 * Strategy: regex replacement over the JSX files — safe since the pattern is highly consistent.
 */

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'src', 'converted-legacy', 'pages');

// Links to completely REMOVE (no route exists, no replacement)
const LINKS_TO_REMOVE = [
  '/graphite-filled-bronze-bushes',
  '/billets-manufacturer-supplier',
  // Pipe sub-types — all redirect to /pipes-tubes which is the parent page
  '/nickel-alloy-pipes-tubes',
  '/copper-alloy-pipes-tubes',
  '/stainless-steel-pipes-tubes',
  '/duplex-steel-pipes-tubes',
  '/carbon-steel-pipes-tubes',
  '/alloy-steel-pipes-tubes',
  // Flanges sub-types — all covered by /flanges
  '/nickel-alloy-flanges',
  '/stainless-steel-flanges',
  '/carbon-steel-flanges',
  '/alloy-steel-flanges',
  '/duplex-super-duplex-flanges',
  '/copper-nickel-flanges',
  // Buttweld sub-types — all covered by /buttweld-fittings
  '/high-nickel-alloy-buttweld-fittings',
  '/stainless-steel-buttweld-fittings',
  '/carbon-steel-buttweld-fittings',
  '/alloy-steel-buttweld-fittings',
  // Socketweld sub-types — all covered by /socketweld-fittings
  '/high-nickel-alloy-socketweld-fittings',
  '/stainless-steel-socketweld-fittings',
  '/carbon-steel-socketweld-fittings',
  '/alloy-steel-socketweld-fittings',
  // Fasteners sub-types
  '/nickel-alloy-fasteners',
  '/stainless-steel-fasteners',
  '/duplex-fasteners',
  '/alloy-steel-fasteners',
  // Flanges sub
  '/forged-flanges',
  '/slip-on-flanges',
  // Round bar sub
  '/nickel-alloy-round-bars',
  '/stainless-steel-round-bars',
  '/alloy-steel-round-bars',
  // Sheets sub
  '/nickel-alloy-plates-sheets',
  '/stainless-steel-plates-sheets',
  '/alloy-steel-plates-sheets',
];

let totalFixed = 0;
let filesFixed = [];

const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(PAGES_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  for (const link of LINKS_TO_REMOVE) {
    // Match the full <li> containing this broken Link, across single line
    // Pattern: <li><Link to="/broken-route">Any text</Link></li>
    const escapedLink = link.replace(/[-\/]/g, '\\$&');
    const pattern = new RegExp(
      `[ \\t]*<li>\\s*<Link to="${escapedLink}">[^<]*<\\/Link>\\s*<\\/li>\\s*\\n?`,
      'g'
    );
    content = content.replace(pattern, '');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesFixed.push(file);
    // Count removed lines
    const removedLines = original.split('\n').length - content.split('\n').length;
    totalFixed += removedLines;
    console.log(`✓ ${file} — removed ~${removedLines} lines`);
  } else {
    console.log(`  ${file} — no changes needed`);
  }
}

console.log(`\nDone. Fixed ${filesFixed.length} files, removed ~${totalFixed} lines total.`);
if (filesFixed.length > 0) {
  console.log('\nFixed files:');
  filesFixed.forEach(f => console.log(`  - ${f}`));
}
