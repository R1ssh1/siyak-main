import fs from 'fs';
import path from 'path';

const cssDir = './public/css';
const files = fs.readdirSync(cssDir);

const colorCounts = {};

files.forEach(f => {
  if (f.endsWith('.css')) {
    const content = fs.readFileSync(path.join(cssDir, f), 'utf8');
    const matches = content.match(/#[0-9a-fA-F]{3,6}/g);
    if (matches) {
      matches.forEach(m => {
        const lower = m.toLowerCase();
        colorCounts[lower] = (colorCounts[lower] || 0) + 1;
      });
    }
  }
});

const sortedColors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
console.log("Top 30 CSS Colors:");
console.log(sortedColors.slice(0, 30));
