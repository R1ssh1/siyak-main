import fs from 'fs';
import path from 'path';

function replaceInDir(dir, extensions, replacements) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      // Avoid node_modules, .git, dist
      if (['node_modules', '.git', 'dist'].includes(f)) return;
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
  // Remove dark shades #0b3537 and #07191a which were previously injected
  { regex: /#0b3537/gi, replace: "#334155" }, // slate-700
  { regex: /#07191a/gi, replace: "#1e293b" }, // slate-800
];

// Run on root directory files
replaceInDir('./', ['.html', '.css', '.jsx', '.js'], replacements);

console.log("Legacy dark colors removed!");
