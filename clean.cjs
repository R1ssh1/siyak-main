const fs = require('fs');
const path = require('path');
const dir = 'src/pages';
const files = fs.readdirSync(dir);
let count = 0;
files.forEach(file => {
  if (file.endsWith('.jsx')) {
    const fp = path.join(dir, file);
    let code = fs.readFileSync(fp, 'utf8');
    if (code.includes('<section class="footer-wrapper">')) {
      code = code.replace(/<section class="footer-wrapper">[\s\S]*?<\/section>/g, '');
      fs.writeFileSync(fp, code);
      count++;
    }
  }
});
console.log('Fixed ' + count + ' files');
