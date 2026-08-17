const fs = require('fs');

function cleanStyles(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix the regex double-up mistake if it happened
  content = content.replace(/className="className="([^"]+)"\"/g, 'className="$1"');

  // Strip injected styles
  content = content.replace(/ style=\{\{ height: ['"]100%['"], display: ['"]flex['"], flexDirection: ['"]column['"] \}\}/g, '');
  content = content.replace(/ style=\{\{ flexGrow: 1, display: ['"]flex['"], flexDirection: ['"]column['"] \}\}/g, '');
  content = content.replace(/ style=\{\{ flexGrow: 1 \}\}/g, '');
  content = content.replace(/ style=\{\{ display: ['"]flex['"], flexDirection: ['"]column['"], gap: ['"]20px['"] \}\}/g, '');
  content = content.replace(/className=" masobox"/g, 'className="masobox"');

  // Also fix Home.jsx if it has single quotes
  content = content.replace(/ style=\{\{ height: \'100%\', display: \'flex\', flexDirection: \'column\' \}\}/g, '');
  content = content.replace(/ style=\{\{ flexGrow: 1, display: \'flex\', flexDirection: \'column\' \}\}/g, '');
  content = content.replace(/ style=\{\{ display: \'flex\', flexDirection: \'column\', gap: \'20px\' \}\}/g, '');
  
  // Actually, wait, let's fix the specific className issue if it's there
  content = content.replace(/<div className="className="masobox2"">/g, '<div className="masobox">');
  content = content.replace(/<div className="className="masobox"">/g, '<div className="masobox">');

  fs.writeFileSync(filePath, content);
}

cleanStyles('src/converted-legacy/pages/Products.jsx');
cleanStyles('src/converted-legacy/pages/Home.jsx');

console.log('Cleaned up styles in both Home.jsx and Products.jsx');
