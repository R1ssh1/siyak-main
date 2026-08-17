const fs = require('fs');

let content = fs.readFileSync('src/converted-legacy/pages/Products.jsx', 'utf8');

// Fix the invalid JSX: ` / style=` -> ` style=`
content = content.replace(/ \/ style=\{/g, ' style={');

fs.writeFileSync('src/converted-legacy/pages/Products.jsx', content);
console.log('Fixed invalid JSX in Products.jsx.');
