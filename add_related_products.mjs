import fs from 'fs';
import path from 'path';

const pagesDir = 'src/converted-legacy/pages';
const files = [
  'PipesTubes.jsx',
  'SheetsPlates.jsx',
  'RoundBars.jsx',
  'Flanges.jsx',
  'ButtweldFittings.jsx',
  'SocketweldFittings.jsx',
  'Fasteners.jsx',
  'AnglesChannels.jsx',
  'TubeSheet.jsx',
  'FerruleFittings.jsx',
  'CladdedPlates.jsx',
  'Olets.jsx',
  'Valves.jsx',
  'RefractoryFixingsAnchors.jsx'
];

const slugMap = {
  'PipesTubes.jsx': 'pipes-tubes',
  'SheetsPlates.jsx': 'sheets-plates',
  'RoundBars.jsx': 'round-bars',
  'Flanges.jsx': 'flanges',
  'ButtweldFittings.jsx': 'buttweld-fittings',
  'SocketweldFittings.jsx': 'socketweld-fittings',
  'Fasteners.jsx': 'fasteners',
  'AnglesChannels.jsx': 'angles-channels',
  'TubeSheet.jsx': 'tube-sheet',
  'FerruleFittings.jsx': 'ferrule-fittings',
  'CladdedPlates.jsx': 'cladded-plates',
  'Olets.jsx': 'olets',
  'Valves.jsx': 'valves',
  'RefractoryFixingsAnchors.jsx': 'refractory-fixings-anchors'
};

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add imports
  if (!content.includes('ExportDestinations')) {
    content = content.replace(
      "import { Link } from 'react-router-dom';",
      "import { Link } from 'react-router-dom';\nimport ExportDestinations from '../components/ExportDestinations';\nimport RelatedProducts from '../components/RelatedProducts';"
    );
  }

  // Find Export Destinations block and replace it
  const exportDestRegex = /<p[^>]*><strong>(EXPORT DESTINATIONS[^<]*)<\/strong><\/p>\s*<p>[\s\S]*?<\/p>\s*<div className="mb50"><\/div>/i;
  
  const match = content.match(exportDestRegex);
  if (match) {
    const heading = match[1];
    const replacement = `<ExportDestinations heading="${heading}" />`;
    content = content.replace(match[0], replacement);
  }

  // Insert RelatedProducts right before closing article
  if (!content.includes('<RelatedProducts')) {
    const slug = slugMap[file];
    content = content.replace(
      /<\/article>/,
      `  <RelatedProducts currentSlug="${slug}" />\n\t\t\t</article>`
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed ${file}`);
}
