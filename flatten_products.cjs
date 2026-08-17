const fs = require('fs');

const products = [
  { link: '/pipes-tubes', img: 'img/products/stainless-steel-pipes-tubes.webp', alt: 'Pipes & Tubes Supplier', title: 'Pipes & Tubes', desc: 'We are a well-known manufacturer of steel pipes and tubes that are available in varied grades of stainless steel, carbon steel & nickel alloys. Our pipes and tubes are engineered for precision and durability in demanding industrial environments.' },
  { link: '/flanges', img: 'img/products/stainless-steel-flanges.webp', alt: 'Pipe Flanges Exporter', title: 'Flanges', desc: 'We offer stainless steel flanges in various specifications and configurations.<br /><br />Forms : Slip on, socket weld, blind, lapped, screwed, weld neck, reducing, spectacle, slip on boss, plate.' },
  { link: '/fasteners', img: 'img/products/stainless-fasteners.webp', alt: 'Fasteners Supplier', title: 'Fasteners', desc: 'We design quality fasteners for critical machine applications and desired results.<br /><br />Forms: Stud Bolts, Hex Bolts, Square Bolts, Hex Nuts, T-Head Bolts, Structural Bolts, U-Bolts, Foundation Bolts, As per drawing and customers specifications.' },
  { link: '/sheets-plates', img: 'img/products/carbon-steel-plates-sheets.webp', alt: 'Sheets, Plates & Coils Exporter', title: 'Sheets, Plates & Coils', desc: 'We have been offering to our clients a vast range of Sheets and Coils that are offered in various specifications to our clients. <br /><br />Range: 0.5 mm To 200 mm thick in 1000 mm To 3000 mm width & 2500 mm To 12500 mm length available with NACE MR 01-75.' },
  { link: '/buttweld-fittings', img: 'img/products/stainless-butt-weld.webp', alt: 'Butt weld Pipe Fittings Supplier', title: 'Buttweld Fittings', desc: 'We offer high quality butt weld fittings for different industrial requirements. Available in stainless steel, duplex, and nickel alloys, ensuring leak-proof connections.' },
  { link: '/round-bars', img: 'img/products/alloy-steel-bar.webp', alt: 'Round Bars & Rods Manufacturer', title: 'Round Bars', desc: 'We are offering a wide range of Round Bars that are available in varied grades of stainless steel, carbon steel, nickel alloys & alloy steel.<br /><br />Types: Round, Square, Hexagonal, Rectangular' },
  { link: '/angles-channels', img: 'img/products/angles-channels.webp', alt: 'Angles & Channels Supplier', title: 'Angles & Channels', desc: 'Using High grade and superior quality raw materials, we provide an extensive range of stainless steel Angles and Flats designed for structural applications and maximum stability.' },
  { link: '/valves', img: 'img/products/valves.webp', alt: 'Valves', title: 'Valves', desc: 'Siyak Steel International would like to introduce ourselves as one of the Leading Industrial Valves Exporter. We supply Ball, Gate, Globe, Check, Automatic Control Valves, and High Pressure Valves.' },
  { link: '/socketweld-fittings', img: 'img/products/stainless-forged-fittings.webp', alt: 'Socketweld Fittings', title: 'Forged Fittings', desc: 'We offer to our clients specially designed forged pipe fittings.<br /><br />TYPES: Elbow, Tee, Union, Cross, Coup Bushing, Plug, Swage Nipple, Welding Boss, Hexagon Nipple, Barrel Nipple, Welding Nipple, Parraler Nipple, etc.' }
];

const gridHtml = `              <div className="grid_12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
${products.map(p => `                <div style={{ display: 'flex' }}>
                  <div className="masobox" style={{ height: '100%', display: 'flex', flexDirection: 'column', width: '100%', background: '#fff', border: '1px solid #e5e5e5' }}>
                    <div className="imgt" style={{ overflow: 'hidden' }}> <img src="${p.img}" alt="${p.alt}" title="${p.alt}" style={{aspectRatio: '4/3', objectFit: 'cover', width: '100%', display: 'block'}}/></div>
                    <div className="content-maso" style={{ flexGrow: 1, padding: '20px', display: 'flex', flexDirection: 'column', background: '#fff' }}>
                      <div className="heading-link" style={{ flexGrow: 1 }}><Link to="${p.link}">${p.title}<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px" }}></i> <br />
                        <br />
                        <span className="spant" style={{ color: '#222', fontWeight: 500, lineHeight: 1.5, display: 'block' }}>${p.desc}</span></Link></div>
                    </div>
                  </div>
                </div>`).join('\n')}
              </div>`;

function replaceProductsGrid(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to find the <div className="grid_12 products-grid-row"> or <div className="grid_12"> containing the products
  // We know it ends before </section> or the next sibling.
  
  // It's tricky to regex match the entire block because of nested divs.
  // Instead, let's use string manipulation based on known markers.
  
  let newContent;
  if (filePath.includes('Home.jsx')) {
    const startMarker = '<div className="grid_12 products-grid-row">';
    const endMarker = '            </section>';
    const startIndex = content.indexOf(startMarker);
    const endIndex = content.indexOf(endMarker, startIndex);
    
    if (startIndex > -1 && endIndex > -1) {
      newContent = content.substring(0, startIndex) + gridHtml + '\n' + content.substring(endIndex);
    }
  } else {
    // Products.jsx
    const startMarker = '<div className="grid_12 products-grid-row">';
    const endMarker = '</div>\n\n\n                </div>\n              </div>\n\n            </div>';
    const startIndex = content.indexOf(startMarker);
    const endIndex = content.lastIndexOf('                </div>\n              </div>\n\n            </div>');
    
    if (startIndex > -1 && endIndex > -1) {
      newContent = content.substring(0, startIndex) + gridHtml + '\n' + content.substring(endIndex);
    }
  }
  
  if (newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${filePath}`);
  } else {
    console.log(`Markers not found in ${filePath}`);
  }
}

replaceProductsGrid('src/converted-legacy/pages/Home.jsx');
replaceProductsGrid('src/converted-legacy/pages/Products.jsx');
