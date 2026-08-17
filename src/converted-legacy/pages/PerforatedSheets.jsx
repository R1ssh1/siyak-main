import React from 'react';
import { Link } from 'react-router-dom';
import ExportDestinations from '../../components/ExportDestinations';
import RelatedProducts from '../../components/RelatedProducts';

export default function PerforatedSheets() {
  return (
    <>
      <section id="page-title-perforated" className="page-title-1" data-stellar-background-ratio="0.3">
        <div className="container">
          <div className="row">
            <div className="grid_9">
              <div className="pt-box">
                <div className="pt-title triggerAnimation animated" data-animate="fadeInLeft">
                  <h1><span className="strong">Perforated Sheets</span></h1>
                  <p>Available in mild steel, stainless steel, aluminium and galvanised variants with custom hole patterns and gauges.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="grid_8">
                <div className="breadcrumbs triggerAnimation animated" data-animate="fadeInUp">
                  <ul>
                    <li><span>You are here:</span></li>
                    <li><Link to="/products">Products / </Link></li>
                    <li><span className="active">Perforated Sheets</span></li>
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
                  <h2>PERFORATED SHEETS</h2>
                  <ul>
                    <li><Link to="/perforated-sheets">Mild Steel Perforated Sheets</Link></li>
                    <li><Link to="/perforated-sheets">Stainless Steel Perforated Sheets</Link></li>
                    <li><Link to="/perforated-sheets">Aluminium Perforated Sheets</Link></li>
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
                <h1>Perforated Sheets</h1>
              </section>

              <div className="row">
                <article className="grid_4 triggerAnimation animated" data-animate="fadeInLeft">
                  <section id="post-slider" className="nivoSlider">
                    <img src="img/products/mild-steel-perforated.webp" alt="Mild Steel Perforated Sheets" />
                    <img src="img/products/aluminium-perforated.webp" alt="Aluminium Perforated Sheets" />
                  </section>
                </article>
                <article className="grid_5 triggerAnimation animated" data-animate="fadeInRight">
                  <div style={{ marginBottom: '20px', color: '#222', lineHeight: '1.7' }}>
                    <p>We are stockists and exporters of perforated sheets in mild steel, stainless steel, aluminium and galvanised steel. Available in round, square and decorative hole patterns with a wide range of sheet thicknesses and gauges to suit industrial, architectural and filtration requirements.</p>
                    <br />
                    <p><strong>Materials:</strong> Mild Steel, Stainless Steel (304/316), Aluminium, Galvanised</p>
                    <p><strong>Hole Patterns:</strong> Round, Square, Slot, Decorative</p>
                    <p><strong>Thickness:</strong> 0.5mm to 12mm</p>
                    <p><strong>Sheet Size:</strong> 1000×2000mm, 1220×2440mm, 1500×3000mm and custom sizes</p>
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

              <ExportDestinations heading="EXPORT DESTINATIONS FOR PERFORATED SHEETS, SS 304/316, MILD STEEL, ALUMINIUM PERFORATED SHEETS" />

              <RelatedProducts currentSlug="perforated-sheets" />
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
