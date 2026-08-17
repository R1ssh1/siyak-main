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

  // Insert RelatedProducts right after ExportDestinations
  if (!content.includes('<RelatedProducts')) {
    const slug = slugMap[file];
    content = content.replace(
      /(<ExportDestinations[^>]*\/>)/,
      `$1\n\n              <RelatedProducts currentSlug="${slug}" />`
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed RelatedProducts for ${file}`);
  }
}
