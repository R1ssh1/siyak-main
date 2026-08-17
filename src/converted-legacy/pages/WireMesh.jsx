import React from 'react';
import { Link } from 'react-router-dom';
import ExportDestinations from '../../components/ExportDestinations';
import RelatedProducts from '../../components/RelatedProducts';

export default function WireMesh() {
  return (
    <>
      <section id="page-title-wire-mesh" className="page-title-1" data-stellar-background-ratio="0.3">
        <div className="container">
          <div className="row">
            <div className="grid_9">
              <div className="pt-box">
                <div className="pt-title triggerAnimation animated" data-animate="fadeInLeft">
                  <h1><span className="strong">Wire Mesh</span></h1>
                  <p>Carbon steel, stainless steel and galvanised wire mesh available in woven and welded configurations.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="grid_8">
                <div className="breadcrumbs triggerAnimation animated" data-animate="fadeInUp">
                  <ul>
                    <li><span>You are here:</span></li>
                    <li><Link to="/products">Products / </Link></li>
                    <li><span className="active">Wire Mesh</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="row">
            <aside className="grid_3 aside-left triggerAnimation animated" data-animate="fadeInLeft">
              <ul className="aside_widgets">
                <li className="widget widget_productlist">
                  <h2>WIRE MESH</h2>
                  <ul>
                    <li><Link to="/wire-mesh">Carbon Steel Wire Mesh</Link></li>
                    <li><Link to="/wire-mesh">Stainless Steel Wire Mesh</Link></li>
                    <li><Link to="/wire-mesh">Galvanised Wire Mesh</Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="aside_widgets">
                <li className="widget widget_productlist">
                  <h2>Product Range</h2>
                  <ul>
                    <li><Link to="/pipes-tubes">Pipes &amp; Tubes</Link></li>
                    <li><Link to="/sheets-plates">Sheets &amp; Plates</Link></li>
                    <li><Link to="/round-bars">Round Bars</Link></li>
                    <li><Link to="/flanges">Flanges</Link></li>
                    <li><Link to="/buttweld-fittings">Buttweld Fittings</Link></li>
                    <li><Link to="/socketweld-fittings">Socketweld Fittings</Link></li>
                    <li><Link to="/fasteners">Fasteners</Link></li>
                    <li><Link to="/refractory-fixings-anchors">Refractory Fixings &amp; Anchors</Link></li>
                    <li><Link to="/angles-channels">Angles &amp; Channels</Link></li>
                    <li><Link to="/tube-sheet">Tube Sheets</Link></li>
                    <li><Link to="/ferrule-fittings">Ferrule Fittings</Link></li>
                    <li><Link to="/cladded-plates">Cladded Plates</Link></li>
                    <li><Link to="/olets">Olets</Link></li>
                    <li><Link to="/valves">Valves</Link></li>
                    <li><Link to="/perforated-sheets">Perforated Sheets</Link></li>
                    <li><Link to="/wire-mesh">Wire Mesh</Link></li>
                  </ul>
                </li>
              </ul>
            </aside>

            <article className="grid_9 triggerAnimation animated" data-animate="fadeInRight">
              <section className="heading-bordered">
                <h1>Wire Mesh</h1>
              </section>

              <div className="row">
                <article className="grid_4 triggerAnimation animated" data-animate="fadeInLeft">
                  <section id="post-slider" className="nivoSlider">
                    <img src="img/products/carbon-steel-wire-mesh.webp" alt="Carbon Steel Wire Mesh" />
                    <img src="img/products/galvanized-wire-mesh.webp" alt="Galvanised Wire Mesh" />
                  </section>
                </article>
                <article className="grid_5 triggerAnimation animated" data-animate="fadeInRight">
                  <div style={{ marginBottom: '20px', color: '#222', lineHeight: '1.7' }}>
                    <p>We supply wire mesh in carbon steel, stainless steel (304/316) and galvanised variants. Available in woven and welded configurations for filtration, security, fencing and industrial screening applications. Custom aperture sizes and wire diameters available to specification.</p>
                    <br />
                    <p><strong>Materials:</strong> Carbon Steel, Stainless Steel 304/316, Galvanised</p>
                    <p><strong>Types:</strong> Woven Wire Mesh, Welded Wire Mesh</p>
                    <p><strong>Wire Diameter:</strong> 0.5mm to 8mm</p>
                    <p><strong>Aperture Sizes:</strong> 1mm to 100mm (custom available)</p>
                    <p><strong>Sheet/Roll Sizes:</strong> 1m, 1.2m, 1.5m, 2m widths in standard and custom lengths</p>
                  </div>
                </article>
              </div>

              <div className="clear"></div>
              
              <div className="note enq-bg">
                <div className="btn-enq">Call +91-22-6615 1478 OR Email us at <br />
                  <p style={{fontSize: "18px", color: "var(--color-deep)"}}><strong>info@siyaksteel.com</strong> for quick response</p>
                </div>
                <div className="btn-big green"><Link to="/enquiry">Send an ENQUIRY</Link></div>
              </div>

              <div className="clear"></div>
              <div className="mb50"></div>

              <ExportDestinations heading="EXPORT DESTINATIONS FOR WIRE MESH, STAINLESS STEEL WIRE MESH, CARBON STEEL WIRE MESH, GALVANIZED WIRE MESH" />

              <RelatedProducts currentSlug="wire-mesh" />
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
