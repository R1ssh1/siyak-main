import fs from 'fs';
import path from 'path';

const srcPagesDir = './src/pages';
const outPagesDir = './src/converted-legacy/pages';

if (!fs.existsSync(outPagesDir)) {
    fs.mkdirSync(outPagesDir, { recursive: true });
}

const files = fs.readdirSync(srcPagesDir);

function cleanHtml(content) {
    // Basic JSX attribute replacements
    content = content.replace(/class=/g, 'className=');
    content = content.replace(/for=/g, 'htmlFor=');
    
    // Self-closing tags
    content = content.replace(/<img([^>]*)>/g, (match, p1) => {
        if (p1.trim().endsWith('/')) return match;
        return `<img${p1} />`;
    });
    content = content.replace(/<input([^>]*)>/g, (match, p1) => {
        if (p1.trim().endsWith('/')) return match;
        return `<input${p1} />`;
    });
    content = content.replace(/<hr([^>]*)>/g, (match, p1) => {
        if (p1.trim().endsWith('/')) return match;
        return `<hr${p1} />`;
    });
    content = content.replace(/<br>/g, '<br />');
    content = content.replace(/<br([^>]*)>/g, (match, p1) => {
        if (p1.trim().endsWith('/')) return match;
        return `<br${p1} />`;
    });

    // Remove HTML comments or replace with JSX comments
    content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

    // Routing replacements
    content = content.replace(/<a([^>]+)href="index\.php"([^>]*)>([\s\S]*?)<\/a>/g, '<Link$1to="/"$2>$3</Link>');
    content = content.replace(/<a([^>]+)href="([^"]+)\.php"([^>]*)>([\s\S]*?)<\/a>/g, '<Link$1to="/$2"$3>$4</Link>');
    
    // A tags without .php but valid internal links (just in case)
    // Be careful not to replace external links like http:// or mailto:
    content = content.replace(/<a([^>]+)href="([^"]+)"([^>]*)>/g, (match, p1, p2, p3) => {
        if (p2.startsWith('http') || p2.startsWith('mailto:') || p2.startsWith('#') || p2.includes('.jpg') || p2.includes('.png')) {
            return match; // Leave alone
        }
        // If it's already a Link from previous regex, it won't match <a anyway.
        // But if it's <a href="something"> where something is internal
        return `<Link${p1}to="${p2.startsWith('/') ? p2 : '/' + p2}"${p3}>`;
    });
    content = content.replace(/<\/a>/g, (match, offset, string) => {
        // If the matching opening tag was <Link, we need </Link>
        // A simple heuristic: since we replaced most <a to <Link, we'll replace </a > with </Link> ONLY if there's an opening <Link before it without a closing one.
        // Actually, it's safer to just replace all </a> with </Link> and change the external links back to <a> later? No, that breaks.
        // Let's refine:
        return match; 
    });

    // Better approach for routing:
    // We already replaced the full <a ...>...</a> block for .php files.
    // For inline styles:
    content = content.replace(/style="([^"]+)"/g, (match, p1) => {
        let styleObj = {};
        p1.split(';').forEach(rule => {
            let [key, ...valParts] = rule.split(':');
            if (key && valParts.length > 0) {
                let val = valParts.join(':');
                key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                styleObj[key] = val.trim();
            }
        });
        return `style={${JSON.stringify(styleObj)}}`;
    });

    return content;
}

files.forEach(file => {
    if (!file.endsWith('.jsx')) return;
    
    const filePath = path.join(srcPagesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Check if it's a legacy component
    const match = content.match(/dangerouslySetInnerHTML=\{\{\s*__html:\s*`([\s\S]*?)`\s*\}\}/);
    if (match) {
        let htmlStr = match[1];
        
        // Clean the HTML
        let jsxStr = cleanHtml(htmlStr);

        // Fix the a/Link issue. We will just use a simpler regex for Link replacements.
        // Let's undo the <Link ... > tag replacement from above if it didn't replace the closing tag.
        // Actually, let's just do it cleanly:
        // href="about-us.php" -> to="/about-us" and <a -> <Link, </a> -> </Link> for internal ONLY.
        // A reliable way via regex:
        jsxStr = jsxStr.replace(/<a([^>]+)href="([^"]+)\.php"([^>]*)>([\s\S]*?)<\/a>/gi, '<Link$1to="/$2"$3>$4</Link>');
        jsxStr = jsxStr.replace(/<a([^>]+)href="index\.php"([^>]*)>([\s\S]*?)<\/a>/gi, '<Link$1to="/"$2>$3</Link>');

        // Construct the new component
        const componentName = file.replace('.jsx', '');
        
        let newComponent = `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nexport default function ${componentName}() {\n  return (\n    <>\n      ${jsxStr}\n    </>\n  );\n}\n`;

        fs.writeFileSync(path.join(outPagesDir, file), newComponent);
        console.log(`Converted ${file}`);
    }
});

console.log("Batch conversion complete.");
