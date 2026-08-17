import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/siyak-logo-original.jpg';
import { productCategories } from '../../data/products';

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    // Inject Google Translate script if it doesn't exist
    if (!document.getElementById('google-translate-script')) {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
            'google_translate_element'
          );
        }
      };
      
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Helper to determine if a path is active (exact match or starts with for products)
  const isActive = (path) => location.pathname === path ? 'current-menu-item' : '';
  const isProductsActive = location.pathname === '/products' || 
                           location.pathname === '/pipes-tubes' ||
                           location.pathname === '/sheets-plates' ||
                           location.pathname === '/round-bars' ||
                           location.pathname === '/flanges' ||
                           location.pathname === '/buttweld-fittings' ||
                           location.pathname === '/socketweld-fittings' ||
                           location.pathname === '/fasteners' ||
                           location.pathname === '/refractory-fixings-anchors' ||
                           location.pathname === '/angles-channels' ||
                           location.pathname === '/tube-sheet' ||
                           location.pathname === '/ferrule-fittings' ||
                           location.pathname === '/cladded-plates' ||
                           location.pathname === '/olets' ||
                           location.pathname === '/valves' ||
                           location.pathname === '/perforated-sheets' ||
                           location.pathname === '/wire-mesh'
                           ? 'current-menu-item' : '';

  return (
    <div id="header-wrapper" className="clearfix">
      <section id="top-bar-wrapper">
        <div id="top-bar" className="clearfix">
          <div className="mscroll mobile-hide" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="callout-content text-deep" style={{ color: '#14b8ad', display: 'flex', alignItems: 'center' }}>
              <img src="/img/iso-cert.jpeg" alt="Siyak Steel International :: ISO 9001:2015 Certified Company" style={{ height: '30px', marginRight: '10px', borderRadius: '50%' }} />
              "ISO 9001:2015 Certified Company"
            </div>
          </div>
          <ul className="contact-info">
            <li>
              <div id="google_translate_element"></div>
            </li>
            <li> <i className="icon-envelope-alt"></i> <span><a href="mailto:info@siyaksteel.com">info@siyaksteel.com</a></span></li>
            <li> <i className="icon-arrow-right"></i> <span><Link to="/hs-codes">HS Codes</Link></span></li>
          </ul>
        </div>
      </section>
      
      <header id="header" className="clearfix">
        <section id="logo">
          <Link to="/"> <img src={logoImg} style={{ maxHeight: '110px' }} title="Siyak Steel International" alt="Siyak Steel International" /> </Link>
        </section>
        <section id="nav-container">
          <nav id="nav">
            <ul>
              <li className={isActive('/')}> <Link to="/">Home</Link> </li>
              <li className={isActive('/about-us')}> <Link to="/about-us">About</Link> </li>
              <li className={isProductsActive}>
                <Link to="/products">Products</Link>
                <ul>
                  {productCategories.map((cat) => (
                    <li key={cat.slug}><Link to={`/${cat.slug}`}>{cat.name}</Link></li>
                  ))}
                </ul>
              </li>
              <li className={isActive('/quality-policy')}> <Link to="/quality-policy">Quality Policy</Link> </li>
              <li className={isActive('/certification')}> <Link to="/certification">Certification</Link> </li>
              <li className={isActive('/presence')}> <Link to="/presence">Presence</Link> </li>
              <li className={isActive('/gallery')}> <Link to="/gallery">Gallery</Link> </li>
              <li className={isActive('/enquiry')}> <Link to="/enquiry">Enquiry</Link> </li>
              <li className={isActive('/contact')}><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </section>
        
        {/* Mobile Menu */}
        <div id="dl-menu" className="dl-menuwrapper">
          <button className="dl-trigger">Open Menu</button>
          <ul className="dl-menu">
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about-us">About US</Link> </li>
            <li> <Link to="/products">Products</Link>
              <ul className="dl-submenu">
                {productCategories.map((cat) => (
                  <li key={cat.slug}><Link to={`/${cat.slug}`}>{cat.name}</Link></li>
                ))}
              </ul>
            </li>
            <li> <Link to="/quality-policy">Quality Policy</Link> </li>
            <li> <Link to="/certification">Certification</Link> </li>
            <li> <Link to="/presence">Presence</Link> </li>
            <li> <Link to="/gallery">Gallery</Link> </li>
            <li> <Link to="/enquiry">Enquiry</Link> </li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </header>
    </div>
  );
}
