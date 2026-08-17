import fs from 'fs';
import path from 'path';

function replaceInDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (f.endsWith('.jsx') || f.endsWith('.js') || f.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      const oldEmails = [
        'exports@siyaksteel.com',
        'exports@neonalloys.com',
        'info@neonalloys.com'
      ];
      
      oldEmails.forEach(email => {
        const regex = new RegExp(email, 'gi');
        if (content.match(regex)) {
          content = content.replace(regex, 'info@siyaksteel.com');
          changed = true;
        }
      });
      
      if (changed) {
        fs.writeFileSync(fullPath, content);
      }
    }
  });
}

replaceInDir('./src');
console.log("Global email replacement complete.");
