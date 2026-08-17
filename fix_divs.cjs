const fs = require('fs');
const path = require('path');
const dir = './src/converted-legacy/pages';

const files = fs.readdirSync(dir);
files.forEach(f => {
  if (f.endsWith('.jsx')) {
    let content = fs.readFileSync(path.join(dir, f), 'utf8');
    // Replace stray </div> right before popup-wrapper
    content = content.replace(/<\/div>\s*(<div className="popup-wrapper")/g, '$1');
    fs.writeFileSync(path.join(dir, f), content);
  }
});
console.log('Fixed stray divs');
