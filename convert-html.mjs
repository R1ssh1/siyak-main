import fs from 'fs';
import { JSDOM } from 'jsdom';

const html = fs.readFileSync('./neonalloys_clone/index.html', 'utf8');

// Parse the HTML
const dom = new JSDOM(html);
const body = dom.window.document.body;

// Remove scripts
const scripts = body.querySelectorAll('script');
scripts.forEach(s => s.remove());

// Extract Header (everything before the slider)
// The slider is inside <div class="boxedcontainer no-bottom-margin">
const boxedContainer = body.querySelector('.boxedcontainer.no-bottom-margin');

let headerHtml = '';
let sliderHtml = '';
let restHtml = '';

if (boxedContainer) {
    // Everything before boxedContainer is header
    let current = boxedContainer.previousSibling;
    const headerNodes = [];
    while (current) {
        headerNodes.push(current);
        current = current.previousSibling;
    }
    headerNodes.reverse().forEach(node => {
        if (node.outerHTML) {
            headerHtml += node.outerHTML;
        } else if (node.textContent) {
            headerHtml += node.textContent;
        }
    });

    // The boxed container itself is the slider (or contains it)
    sliderHtml = boxedContainer.outerHTML;

    // Everything after boxedContainer
    let next = boxedContainer.nextSibling;
    while (next) {
        if (next.outerHTML) {
            restHtml += next.outerHTML;
        } else if (next.textContent) {
            restHtml += next.textContent;
        }
        next = next.nextSibling;
    }
} else {
    restHtml = body.innerHTML;
}

function cleanHtml(content) {
    content = content.replace(/class=/g, 'className=');
    content = content.replace(/for=/g, 'htmlFor=');
    content = content.replace(/<img([^>]*)>/g, (match, p1) => {
        if (p1.endsWith('/')) return match;
        return `<img${p1} />`;
    });
    content = content.replace(/<input([^>]*)>/g, (match, p1) => {
        if (p1.endsWith('/')) return match;
        return `<input${p1} />`;
    });
    content = content.replace(/<br>/g, '<br />');
    content = content.replace(/<hr([^>]*)>/g, (match, p1) => {
        if (p1.endsWith('/')) return match;
        return `<hr${p1} />`;
    });
    content = content.replace(/<!--[\s\S]*?-->/g, '');
    return content;
}

headerHtml = cleanHtml(headerHtml);
sliderHtml = cleanHtml(sliderHtml);
restHtml = cleanHtml(restHtml);

// Instead of setting the slider as dangerouslySetInnerHTML, we will create a Slider component
// that wraps its innerHTML or we can build a Framer Motion slider later. For now, we put it in as raw HTML,
// but separated out so we can replace it easily.

const componentTemplate = `
import React from 'react';
import Slider from './Slider';

export default function App() {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: \`${headerHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
      <Slider rawHtml={\`${sliderHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`} />
      <div dangerouslySetInnerHTML={{ __html: \`${restHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
    </div>
  );
}
`;

fs.writeFileSync('./src/App.jsx', componentTemplate);

const sliderTemplate = `
import React, { useEffect } from 'react';

export default function Slider({ rawHtml }) {
  // We can implement Framer Motion logic here later.
  // For now, we just render the raw HTML of the exact slider so we don't lose the design.
  // Since we want NO DEVIATION, we output the exact HTML.
  return (
    <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
  );
}
`;
fs.writeFileSync('./src/Slider.jsx', sliderTemplate);

console.log('App.jsx and Slider.jsx have been created.');
