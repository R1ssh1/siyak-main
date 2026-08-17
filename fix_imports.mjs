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
  'RefractoryFixingsAnchors.jsx',
  'PerforatedSheets.jsx',
  'WireMesh.jsx'
];

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Fix import paths
  content = content.replace(/'\.\.\/components\/ExportDestinations'/g, "'../../components/ExportDestinations'");
  content = content.replace(/'\.\.\/components\/RelatedProducts'/g, "'../../components/RelatedProducts'");

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed imports in ${file}`);
}
