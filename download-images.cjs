const fs = require('fs');
const path = require('path');
const https = require('https');

const PAGES_DIR = './neonalloys_clone/pages';
const IMG_OUT_DIR = './public/img';
const SLIDER_OUT_DIR = './public/img/slider';

if (!fs.existsSync(IMG_OUT_DIR)) fs.mkdirSync(IMG_OUT_DIR, { recursive: true });
if (!fs.existsSync(SLIDER_OUT_DIR)) fs.mkdirSync(SLIDER_OUT_DIR, { recursive: true });

// Read all HTML files and extract src="img/..." and data-bg="img/..."
let imgUrls = new Set();
const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'));
files.forEach(file => {
    const content = fs.readFileSync(path.join(PAGES_DIR, file), 'utf8');
    const matches = [...content.matchAll(/src=["'](img\/[^"']+)["']/g), ...content.matchAll(/data-bg=["'](img\/[^"']+)["']/g), ...content.matchAll(/background-image:\s*url\(["']?(img\/[^"']+)["']?\)/gi)];
    matches.forEach(m => imgUrls.add(m[1]));
});

console.log(`Found ${imgUrls.size} unique image URLs under img/`);

const BASE_URL = 'https://neonalloys.com/';

async function downloadImages() {
    for (const imgPath of imgUrls) {
        const fullUrl = BASE_URL + imgPath;
        const outPath = path.join('./public', imgPath);
        
        const dir = path.dirname(outPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        
        try {
            const response = await fetch(fullUrl, { redirect: 'follow' });
            if (response.ok) {
                const buffer = await response.arrayBuffer();
                fs.writeFileSync(outPath, Buffer.from(buffer));
                console.log(`Downloaded: ${imgPath}`);
            } else {
                console.error(`Failed to download: ${fullUrl} - Status: ${response.status}`);
            }
        } catch (err) {
            console.error(`Error downloading ${fullUrl}: ${err.message}`);
        }
    }
}

downloadImages();
