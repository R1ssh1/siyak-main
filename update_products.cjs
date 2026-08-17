const fs = require('fs');

let content = fs.readFileSync('src/converted-legacy/pages/Products.jsx', 'utf8');

// Fix styling for uniform card sizes
content = content.replace(/className="(masobox|masobox2)"/g, 'className="$1" style={{ height: "100%", display: "flex", flexDirection: "column" }}');
content = content.replace(/className=" masobox2"/g, 'className="masobox2" style={{ height: "100%", display: "flex", flexDirection: "column" }}');
content = content.replace(/className=" masobox"/g, 'className="masobox" style={{ height: "100%", display: "flex", flexDirection: "column" }}');

content = content.replace(/className="content-maso"/g, 'className="content-maso" style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}');
content = content.replace(/className="heading-link"/g, 'className="heading-link" style={{ flexGrow: 1 }}');

content = content.replace(/<div className="grid_4">/g, '<div className="grid_4" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>');
content = content.replace(/<div className="imgt"> <img src="([^"]+)"([^>]*)>/g, '<div className="imgt"> <img src="$1"$2 style={{aspectRatio: "4/3", objectFit: "cover", width: "100%"}}/>');

// --- Replace Content for the 9 core products to match Siyak descriptions/images ---

// 1. Pipes & Tubes
content = content.replace(
  /<div className="heading-link"><Link to="\/pipes-tubes">Pipes &amp; Tubes[\s\S]*?<\/span><\/Link><\/div>/,
  '<div className="heading-link"><Link to="/pipes-tubes">Pipes &amp; Tubes<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px" }}></i> <br />\\n                        <br />\\n                        <span className="spant">We are a well-known manufacturer of steel pipes and tubes that are available in varied grades of stainless steel, carbon steel &amp; nickel alloys. Our pipes and tubes are engineered for precision and durability in demanding industrial environments.</span></Link></div>'
);
content = content.replace('img/products/steel-pipes-tubes.jpg', 'img/products/stainless-steel-pipes-tubes.webp');

// 2. Flanges
content = content.replace(
  /<div className="heading-link"><Link to="\/flanges">Flanges[\s\S]*?<\/span><\/Link><\/div>/,
  '<div className="heading-link"><Link to="/flanges">Flanges<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "fontWeight": "300", "marginRight": "0px" }}></i> <br />\\n                        <br />\\n                        <span className="spant">We offer stainless steel flanges in various specifications and configurations.<br />\\n                          <br />\\n                          Forms : Slip on, socket weld, blind, lapped, screwed, weld neck, reducing, spectacle, slip on boss, plate.<br />\\n                        </span></Link></div>'
);
content = content.replace('img/products/pipe-flanges.jpg', 'img/products/stainless-steel-flanges.webp');

// 3. Fasteners
content = content.replace(
  /<div className="heading-link"><Link to="\/fasteners">Fasteners[\s\S]*?<\/span><\/Link><\/div>/,
  '<div className="heading-link"><Link to="/fasteners">Fasteners<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px" }}></i> <br />\\n                        <br />\\n                        <span className="spant">We design quality fasteners for critical machine applications and desired results.<br />\\n                          <br />\\n                          Forms: Stud Bolts, Hex Bolts, Square Bolts, Hex Nuts, T-Head Bolts, Structural Bolts, U-Bolts, Foundation Bolts, As per drawing and customers specifications.</span></Link></div>'
);
content = content.replace('img/products/steel-fasteners.jpg', 'img/products/stainless-fasteners.webp');

// 4. Sheets & Plates
content = content.replace(
  /<div className="heading-link"><Link to="\/sheets-plates">Sheets &amp; Plates, Coils[\s\S]*?<\/span><\/Link><\/div>/,
  '<div className="heading-link"><Link to="/sheets-plates">Sheets, Plates &amp; Coils<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "fontWeight": "300", "marginRight": "0px" }}></i> <br />\\n                        <br />\\n                        <span className="spant">We have been offering to our clients a vast range of Sheets and Coils that are offered in various specifications to our clients. <br />\\n                          <br />\\n                          Range: 0.5 mm To 200 mm thick in 1000 mm To 3000 mm width &amp; 2500 mm To 12500 mm length available with NACE MR 01-75.</span></Link></div>'
);
content = content.replace('img/products/sheets-plates-coils.jpg', 'img/products/carbon-steel-plates-sheets.webp');

// 5. Buttweld Fittings
content = content.replace(
  /<div className="heading-link"><Link to="\/buttweld-fittings">Buttweld Fittings[\s\S]*?<\/span><\/Link><\/div>/,
  '<div className="heading-link"><Link to="/buttweld-fittings">Buttweld Fittings<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px" }}></i> <br />\\n                        <br />\\n                        <span className="spant">We offer high quality butt weld fittings for different industrial requirements. Available in stainless steel, duplex, and nickel alloys, ensuring leak-proof connections.</span></Link></div>'
);
content = content.replace('img/products/buttweld-pipe-fittings.jpg', 'img/products/stainless-butt-weld.webp');

// 6. Round Bars
content = content.replace(
  /<div className="heading-link"><Link to="\/round-bars">Round Bars[\s\S]*?<\/span><\/Link><\/div>/,
  '<div className="heading-link"><Link to="/round-bars">Round Bars<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px" }}></i> <br />\\n                        <br />\\n                        <span className="spant">We are offering a wide range of Round Bars that are available in varied grades of stainless steel, carbon steel, nickel alloys &amp; alloy steel.<br />\\n                          <br />\\n                          Types: Round, Square, Hexagonal, Rectangular</span></Link></div>'
);
content = content.replace('img/products/round-bars-rods.jpg', 'img/products/alloy-steel-bar.webp');

// 7. Angles & Channels
content = content.replace(
  /<div className="heading-link"><Link to="\/angles-channels">ANGLEs &amp; CHANNELs[\s\S]*?<\/span><\/Link><\/div>/,
  '<div className="heading-link"><Link to="/angles-channels">Angles &amp; Channels<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px" }}></i> <br />\\n                        <br />\\n                        <span className="spant">Using High grade and superior quality raw materials, we provide an extensive range of stainless steel Angles and Flats designed for structural applications and maximum stability.</span> </Link></div>'
);
content = content.replace('img/products/angels-channels-supplier.jpg', 'img/products/angles-channels.webp');

// 8. Valves
content = content.replace(
  /<div className="heading-link"><Link to="\/valves">Valves[\s\S]*?<\/span><\/Link><\/div>/,
  '<div className="heading-link"><Link to="/valves">Valves<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px" }}></i> <br />\\n                        <br />\\n                        <span className="spant">Siyak Steel International would like to introduce ourselves as one of the Leading Industrial Valves Exporter. We supply Ball, Gate, Globe, Check, Automatic Control Valves, and High Pressure Valves.</span></Link></div>'
);
content = content.replace('img/products/valves-th.jpg', 'img/products/valves.webp');

// 9. Socketweld Fittings
content = content.replace(
  /<div className="heading-link"><Link to="\/socketweld-fittings">Socketweld Fittings[\s\S]*?<\/span>[\s\S]*?<\/Link><\/div>/,
  '<div className="heading-link"><Link to="/socketweld-fittings">Forged Fittings<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px" }}></i> <br />\\n                        <br />\\n                        <span className="spant">We offer to our clients specially designed forged pipe fittings.<br />\\n                          <br />\\n                          TYPES: Elbow, Tee, Union, Cross, Coup Bushing, Plug, Swage Nipple, Welding Boss, Hexagon Nipple, Barrel Nipple, Welding Nipple, Parraler Nipple, etc.</span></Link></div>'
);
content = content.replace('img/products/socketweld-fittings.jpg', 'img/products/stainless-forged-fittings.webp');


fs.writeFileSync('src/converted-legacy/pages/Products.jsx', content);
console.log('Products.jsx content and styles updated successfully.');
