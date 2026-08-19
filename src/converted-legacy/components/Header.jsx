import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/siyak-logo-original.jpg';
import { productCategories } from '../../data/products';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const drawerRef = useRef(null);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => document.body.classList.remove('mobile-menu-open');
  }, [isMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div id="header-wrapper" className="clearfix">
      <section id="top-bar-wrapper">
        <div id="top-bar" className="clearfix">
          <div className="mscroll mobile-hide" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="callout-content text-deep" style={{ color: '#02898f', display: 'flex', alignItems: 'center', animation: 'isoFade 3s ease-in-out infinite' }}>
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
              <li className={isActive('/technical-info')}> <Link to="/technical-info">Technical Info</Link> </li>
              <li className={isActive('/enquiry')}> <Link to="/enquiry">Enquiry</Link> </li>
              <li className={isActive('/contact')}><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </section>

        {/* Hamburger Button — mobile only */}
        <button
          id="mobile-menu-toggle"
          className="mobile-hamburger"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className={`hamburger-bar bar-1${isMenuOpen ? ' open' : ''}`}></span>
          <span className={`hamburger-bar bar-2${isMenuOpen ? ' open' : ''}`}></span>
          <span className={`hamburger-bar bar-3${isMenuOpen ? ' open' : ''}`}></span>
        </button>
      </header>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          id="mobile-nav-backdrop"
          className="mobile-nav-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-in Drawer */}
      <nav
        id="mobile-nav-drawer"
        className={`mobile-nav-drawer${isMenuOpen ? ' drawer-open' : ''}`}
        aria-label="Mobile navigation"
        ref={drawerRef}
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <Link to="/" onClick={closeMenu}>
            <img src={logoImg} alt="Siyak Steel International" className="drawer-logo" />
          </Link>
          <button
            className="drawer-close-btn"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="drawer-nav-list">
          <li className={`drawer-nav-item${location.pathname === '/' ? ' active' : ''}`}>
            <Link to="/" className="drawer-nav-link" onClick={closeMenu}>Home</Link>
          </li>
          <li className={`drawer-nav-item${location.pathname === '/about-us' ? ' active' : ''}`}>
            <Link to="/about-us" className="drawer-nav-link" onClick={closeMenu}>About</Link>
          </li>

          {/* Products — accordion */}
          <li className={`drawer-nav-item drawer-has-sub${isProductsActive ? ' active' : ''}`}>
            <div className="drawer-nav-row">
              <Link to="/products" className="drawer-nav-link" onClick={closeMenu}>Products</Link>
              <button
                className={`drawer-accordion-btn${isProductsOpen ? ' rotated' : ''}`}
                aria-expanded={isProductsOpen}
                aria-label="Toggle product categories"
                onClick={() => setIsProductsOpen((prev) => !prev)}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <ul className={`drawer-submenu${isProductsOpen ? ' submenu-open' : ''}`}>
              {productCategories.map((cat) => (
                <li key={cat.slug} className="drawer-submenu-item">
                  <Link to={`/${cat.slug}`} className="drawer-submenu-link" onClick={closeMenu}>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className={`drawer-nav-item${location.pathname === '/quality-policy' ? ' active' : ''}`}>
            <Link to="/quality-policy" className="drawer-nav-link" onClick={closeMenu}>Quality Policy</Link>
          </li>
          <li className={`drawer-nav-item${location.pathname === '/certification' ? ' active' : ''}`}>
            <Link to="/certification" className="drawer-nav-link" onClick={closeMenu}>Certification</Link>
          </li>
          <li className={`drawer-nav-item${location.pathname === '/technical-info' ? ' active' : ''}`}>
            <Link to="/technical-info" className="drawer-nav-link" onClick={closeMenu}>Technical Info</Link>
          </li>
          <li className={`drawer-nav-item${location.pathname === '/enquiry' ? ' active' : ''}`}>
            <Link to="/enquiry" className="drawer-nav-link" onClick={closeMenu}>Enquiry</Link>
          </li>
          <li className={`drawer-nav-item${location.pathname === '/contact' ? ' active' : ''}`}>
            <Link to="/contact" className="drawer-nav-link" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>

        {/* Drawer Footer — quick contact */}
        <div className="drawer-footer">
          <a href="mailto:info@siyaksteel.com" className="drawer-footer-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="2"/>
            </svg>
            info@siyaksteel.com
          </a>
        </div>
      </nav>
    </div>
  );
}
