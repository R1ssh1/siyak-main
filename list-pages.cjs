const fs = require('fs');
const html = fs.readFileSync('neonalloys_clone/index.html', 'utf8');
// Find all internal links to other pages
const linkMatches = Array.from(html.matchAll(/href=["']([\w\-\/]+\.(?:php|html))["']/g));
const pages = Array.from(new Set(linkMatches.map(function(m) { return m[1]; }))).filter(function(p) { return !p.startsWith('http'); });
console.log('Unique page links found:', pages.length);
console.log(pages.join('\n'));
