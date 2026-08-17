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

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Step 1: Remove the incorrectly placed <RelatedProducts ... />
  // The regex removes the tag and trailing newlines/spaces before the </article>
  content = content.replace(/<RelatedProducts currentSlug="[^"]*" \/>\s*<\/article>/g, '</article>');

  // Step 2: Insert it right after <ExportDestinations ... /> instead
  const slug = file.replace('.jsx', '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  
  // Note: RefractoryFixingsAnchors is refractory-fixings-anchors, fast way:
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

  const actualSlug = slugMap[file];

  // We only add it if we find the ExportDestinations tag and it isn't already there
  if (content.includes('<ExportDestinations') && !content.includes(`<RelatedProducts currentSlug="${actualSlug}" />`)) {
    content = content.replace(
      /(<ExportDestinations[^>]*\/>)/,
      `$1\n\n              <RelatedProducts currentSlug="${actualSlug}" />`
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed ${file}`);
}
