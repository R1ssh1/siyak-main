import fs from 'fs';
import path from 'path';

function replaceInDir(dir, extensions, replacements) {
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath, extensions, replacements);
    } else if (extensions.some(ext => f.endsWith(ext))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      replacements.forEach(r => {
        if (content.match(r.regex)) {
          content = content.replace(r.regex, r.replace);
          changed = true;
        }
      });
      if (changed) {
        fs.writeFileSync(fullPath, content);
      }
    }
  });
}

const replacements = [
  // Neon Teal -> Siyak Deep Teal
  { regex: /#1d8ca0/gi, replace: "#005d65" },
  { regex: /#0f8a8c/gi, replace: "#005d65" },
  { regex: /#00a89d/gi, replace: "#009ca6" },
  // Also fix the Home.jsx hardcoded color if needed
];

replaceInDir('./public/css', ['.css'], replacements);
replaceInDir('./src', ['.jsx', '.css'], replacements);

console.log("CSS color migration complete!");
