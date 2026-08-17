const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const PAGES_DIR = './neonalloys_clone/pages';
const SRC_DIR = './src';
const PAGES_OUT_DIR = './src/pages';
const COMPONENTS_OUT_DIR = './src/components';

if (!fs.existsSync(PAGES_OUT_DIR)) fs.mkdirSync(PAGES_OUT_DIR, { recursive: true });
if (!fs.existsSync(COMPONENTS_OUT_DIR)) fs.mkdirSync(COMPONENTS_OUT_DIR, { recursive: true });

function cleanHtml(htmlStr) {
  // We keep class= as is for dangerouslySetInnerHTML!
  // Remove scripts carefully, or maybe don't remove them. Let's remove them to avoid React warnings, 
  // but use a safer method: parse with jsdom and remove.
  const dom = new JSDOM(htmlStr);
  const scripts = dom.window.document.querySelectorAll('script');
  scripts.forEach(s => s.remove());
  
  // Remove comments from the DOM
  function removeComments(node) {
      for (let i = node.childNodes.length - 1; i >= 0; i--) {
          const child = node.childNodes[i];
          if (child.nodeType === 8) { // Comment node
              child.remove();
          } else if (child.nodeType === 1) { // Element node
              removeComments(child);
          }
      }
  }
  removeComments(dom.window.document.body);
  
  let cleaned = dom.window.document.body.innerHTML;
  
  // Escape backticks and dollars for template literals
  return cleaned.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

// 1. Extract Header, Footer, and Slider from index.html
const indexHtml = fs.readFileSync(path.join(PAGES_DIR, 'index.html'), 'utf8');
const dom = new JSDOM(indexHtml);
const body = dom.window.document.body;

// Remove comments from the source body immediately so we don't process them
function removeComments(node) {
    for (let i = node.childNodes.length - 1; i >= 0; i--) {
        const child = node.childNodes[i];
        if (child.nodeType === 8) {
            child.remove();
        } else if (child.nodeType === 1) {
            removeComments(child);
        }
    }
}
removeComments(body);

// Find the header (everything before the boxedcontainer)
const boxedContainer = body.querySelector('.boxedcontainer.no-bottom-margin');

let headerNodes = [];
let footerNodes = [];
let sliderHtml = '';

if (boxedContainer) {
    let current = boxedContainer.previousSibling;
    while (current) {
        headerNodes.push(current);
        current = current.previousSibling;
    }
    headerNodes.reverse();
    
    sliderHtml = boxedContainer.outerHTML;
    
    const footerElement = body.querySelector('footer');
    if (footerElement) {
        let currentFoot = footerElement;
        while (currentFoot) {
            footerNodes.push(currentFoot);
            currentFoot = currentFoot.nextSibling;
        }
    }
}

let headerHtml = headerNodes.map(n => n.nodeType === 1 ? n.outerHTML : (n.nodeType === 3 ? n.textContent : '')).join('');
let footerHtml = footerNodes.map(n => n.nodeType === 1 ? n.outerHTML : (n.nodeType === 3 ? n.textContent : '')).join('');

fs.writeFileSync(path.join(COMPONENTS_OUT_DIR, 'Header.jsx'), `
import React from 'react';
export default function Header() {
  return <div dangerouslySetInnerHTML={{ __html: \`${cleanHtml(headerHtml)}\` }} />;
}
`);

fs.writeFileSync(path.join(COMPONENTS_OUT_DIR, 'Footer.jsx'), `
import React from 'react';
export default function Footer() {
  return <div dangerouslySetInnerHTML={{ __html: \`${cleanHtml(footerHtml)}\` }} />;
}
`);

fs.writeFileSync(path.join(COMPONENTS_OUT_DIR, 'Slider.jsx'), `
import React, { useEffect } from 'react';
export default function Slider() {
  useEffect(() => {
    // Re-initialize Revolution Slider
    setTimeout(() => {
        if (window.jQuery && window.jQuery('.tp-banner').length > 0 && window.jQuery('.tp-banner').revolution) {
            window.jQuery('.tp-banner').show().revolution({
                delay: 5000,
                effect: "slideInRight",
                startwidth: 1200,
                startheight: 350,
                hideThumbs: 10,
                navigationType: "bullet"
            });
        }
    }, 500);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: \`${cleanHtml(sliderHtml)}\` }} />;
}
`);

// 2. Process all pages
const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'));

let routeImports = [];
let routes = [];

files.forEach(file => {
    const pageHtml = fs.readFileSync(path.join(PAGES_DIR, file), 'utf8');
    const pDom = new JSDOM(pageHtml);
    const pBody = pDom.window.document.body;
    removeComments(pBody);
    
    const headerWrapper = pBody.querySelector('#header-wrapper');
    if (headerWrapper) headerWrapper.remove();
    
    // Some pages might have extra things before header, remove them if needed
    // (We extracted header previously using nodes before boxedcontainer)
    
    const footerElement = pBody.querySelector('footer');
    if (footerElement) {
        let current = footerElement;
        while (current) {
            let next = current.nextSibling;
            current.remove();
            current = next;
        }
    }
    
    if (file === 'index.html') {
        const pSlider = pBody.querySelector('.boxedcontainer.no-bottom-margin');
        if (pSlider) pSlider.remove();
    }
    
    const contentHtml = cleanHtml(pBody.innerHTML);
    
    let componentName = file.replace('.html', '').split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
    if (componentName === 'Index') componentName = 'Home';
    if (componentName === '') componentName = 'UnknownPage';
    componentName = componentName.replace(/[^a-zA-Z0-9]/g, '');

    const jsx = `
import React from 'react';
${file === 'index.html' ? "import Slider from '../components/Slider';" : ""}

export default function ${componentName}() {
  return (
    <>
      ${file === 'index.html' ? "<Slider />" : ""}
      <div dangerouslySetInnerHTML={{ __html: \`${contentHtml}\` }} />
    </>
  );
}
`;
    fs.writeFileSync(path.join(PAGES_OUT_DIR, `${componentName}.jsx`), jsx);
    
    const routePath = file === 'index.html' ? '/' : `/${file.replace('.html', '')}`;
    routeImports.push(`import ${componentName} from './pages/${componentName}';`);
    routes.push(`        <Route path="${routePath}" element={<${componentName} />} />`);
});

const appJsx = `
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

${routeImports.join('\n')}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
${routes.join('\n')}
      </Routes>
      <Footer />
    </>
  );
}
`;

fs.writeFileSync(path.join(SRC_DIR, 'App.jsx'), appJsx);
console.log("Successfully generated all pages and App.jsx routing!");
