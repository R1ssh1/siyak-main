import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <section className="footer-wrapper">
      <footer id="footer">
        <div className="container">
          <div className="row">
            <section className="triggerAnimation animated" data-animate="fadeIn">
              <ul className="grid_3 footer-widget-container">
                <li className="widget widget_categories">
                  <h3>Company</h3>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/quality-policy">Quality Policy</Link></li>
                    <li><Link to="/technical-info">Technical Info</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/sitemap">Sitemap</Link></li>
                    <li><Link to="/hs-codes">HS Codes</Link></li>
                  </ul>
                </li>
              </ul>

              <ul className="grid_3 footer-widget-container">
                <li className="widget widget_categories">
                  <h3>Products</h3>
                  <ul>
                    <li><Link to="/pipes-tubes">Pipes & Tubes</Link></li>
                    <li><Link to="/sheets-plates">Sheets & Plates</Link></li>
                    <li><Link to="/round-bars">Round Bars</Link></li>
                    <li><Link to="/flanges">Flanges</Link></li>
                    <li><Link to="/buttweld-fittings">Buttweld Fittings</Link></li>
                    <li><Link to="/socketweld-fittings">Socketweld Fittings</Link></li>
                    <li><Link to="/fasteners">Fasteners</Link></li>
                    <li><Link to="/refractory-fixings-anchors">Refractory Fixings & Anchors</Link></li>
                    <li><Link to="/angles-channels">Angles & Channels</Link></li>
                    <li><Link to="/tube-sheet">Tube Sheets</Link></li>
                    <li><Link to="/ferrule-fittings">Ferrule Fittings</Link></li>
                    <li><Link to="/cladded-plates">Cladded Plates</Link></li>
                    <li><Link to="/olets">Olets</Link></li>
                    <li><Link to="/valves">Valves</Link></li>
                    <li><Link to="/perforated-sheets">Perforated Sheets</Link></li>
                    <li><Link to="/wire-mesh">Wire Mesh</Link></li>
                    <li><Link to="/nickel-products">Nickel Products</Link></li>
                  </ul>
                </li>
              </ul>

              <ul className="grid_3 footer-widget-container">
                <li className="widget widget_text">
                  <h3>CONTACT INFO</h3>
                  <ul className="contact-info-list">
                    <li>
                      <p> <i className="icon-home"></i> <span className="strong">Regd. Office: </span> <br />
                        Plot No. 2, 7 Kikabhai Mansion, 3rd Floor,<br />
                        Office No. 17, Kika Street, Girgaon,<br />
                        Mumbai -400 004 (India).
                      </p>
                    </li>
                    <li>
                      <p> <i className="icon-phone"></i> <span className="strong">Telephone: </span><br />
                        + 91 22 6615 1478<br />
                        + 91 22 6659 5225<br />
                        + 91 98209 76537
                      </p>
                    </li>
                    <li>
                      <p> <i className="icon-envelope"></i> <span className="strong">Email: </span><br />
                        <a href="mailto:info@siyaksteel.com" style={{ color: 'inherit' }}>info@siyaksteel.com</a><br />
                        <a href="mailto:siyaksteel@gmail.com" style={{ color: 'inherit' }}>siyaksteel@gmail.com</a>
                      </p>
                    </li>
                  </ul>
                  <ul className="social-links">
                    <li><a href="https://www.facebook.com/siyaksteel" target="_blank" rel="noreferrer" className="pixons-facebook-2"></a></li>
                    <li><a href="https://www.linkedin.com/company/siyak-steel-international" target="_blank" rel="noreferrer" className="pixons-linkedin"></a></li>
                  </ul>
                </li>
              </ul>

              <ul className="grid_3 footer-widget-container">
                <li className="widget-brochure-box">
                  <a 
                    className="brochure-box popup-link w-full text-left" 
                    style={{ display: 'block' }}
                    href="/Siyak Steel Catalouge.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="brochure-box__text">Download Brochure</div>
                    <i className="fa icon-file-pdf"></i>
                  </a>
                </li>
                <li className="widget-calcy-box">
                  <Link className="calcy-box" to="/weight-calculator">
                    <div className="calcy-box__text">Weight Calculator</div>
                    <i className="fa icon-calculate"></i>
                  </Link>
                </li>
                <li className="widget qrcode">
                  <p><img src="/qr.svg" alt="QR Code" /></p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </footer>

      <div className="copyright-container">
        <div className="container">
          <div className="row">
            <section className="grid_6">
              <p>Copyright © SiyakSteel 2026. All Rights Reserved.</p>
            </section>
            <section className="grid_6">
              <div className="footer-breadcrumbs">
                Designed & Developed By: <a href="https://sunmargindia.com/" target="_blank" rel="noreferrer">SunMarg</a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <a href="#" className="scroll-up">Scroll</a>

      <a href="https://wa.me/919820976537?text=I%20want%20to%20enquire%20about" className="float" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </section>
  );
}
