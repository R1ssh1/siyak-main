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
  // style prop color replacements
  { regex: /'#39414b'/gi, replace: "'var(--color-deep)'" },
  { regex: /"#39414b"/gi, replace: '"var(--color-deep)"' },
  { regex: /'#1c626b'/gi, replace: "'var(--color-teal)'" },
  { regex: /"#1c626b"/gi, replace: '"var(--color-teal)"' },
  { regex: /'#00a89d'/gi, replace: "'var(--color-teal-light)'" },
  { regex: /"#00a89d"/gi, replace: '"var(--color-teal-light)"' },
  
  // Tailwind class replacements
  { regex: /text-\[\#333\]/g, replace: "text-deep" },
  { regex: /text-\[\#111\]/g, replace: "text-ink" },
  { regex: /text-\[\#000\]/g, replace: "text-ink" },
  { regex: /text-\[\#ccc\]/g, replace: "text-steel" },
  { regex: /border-\[\#ccc\]/g, replace: "border-steel" },
  { regex: /border-\[\#ddd\]/g, replace: "border-steel" },
  { regex: /bg-\[\#f5f5f5\]/g, replace: "bg-teal-pale" },
  { regex: /bg-\[\#eaeaea\]/g, replace: "bg-teal-pale" },
  
  // Hardcoded legacy HTML styles that might have missed previous passes
  { regex: /color:\s*#39414b/gi, replace: "color: var(--color-deep)" },
  { regex: /color:\s*#1c626b/gi, replace: "color: var(--color-teal)" },
  { regex: /background:\s*#1c626b/gi, replace: "background: var(--color-teal)" },
  
  // Other potential leftovers
  { regex: /'#666'/g, replace: "'var(--color-steel-dark)'" },
  { regex: /"#666"/g, replace: '"var(--color-steel-dark)"' },
];

replaceInDir('./src', ['.jsx', '.js'], replacements);

console.log("JSX color migration complete!");
