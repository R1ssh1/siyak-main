const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\rishi\\.gemini\\antigravity-ide\\brain\\b5ccb256-16c3-4cde-86bb-ccae4c841954';
const exts = ['.jpg', '.jpeg', '.png', '.webp'];

let newestFile = null;
let newestTime = 0;

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walk(fullPath);
        } else {
            if (exts.includes(path.extname(fullPath).toLowerCase())) {
                if (stat.mtimeMs > newestTime) {
                    newestTime = stat.mtimeMs;
                    newestFile = fullPath;
                }
            }
        }
    }
}

walk(brainDir);

if (newestFile) {
    fs.copyFileSync(newestFile, path.join(__dirname, 'public', 'img', 'why-choose-us.jpg'));
    console.log('Copied ' + newestFile + ' to public/img/why-choose-us.jpg');
} else {
    console.log('No image found.');
}
