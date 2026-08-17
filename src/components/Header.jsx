
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    // 1. Remove current-menu-item from all list items in both menus
    const navItems = document.querySelectorAll('#nav li, .dl-menu li');
    navItems.forEach(li => li.classList.remove('current-menu-item'));

    // 2. Add it back to the one whose anchor matches the current route
    navItems.forEach(li => {
      const a = li.querySelector('a');
      if (a) {
        let href = a.getAttribute('href');
        if (href) {
            href = href.replace('.php', '');
            if (href === 'index' && location.pathname === '/') {
                li.classList.add('current-menu-item');
                // Also highlight parent if it's a submenu
                const parent = li.closest('ul')?.closest('li');
                if (parent) parent.classList.add('current-menu-item');
            } else if (href !== 'index' && location.pathname === '/' + href) {
                li.classList.add('current-menu-item');
                const parent = li.closest('ul')?.closest('li');
                if (parent) parent.classList.add('current-menu-item');
            }
        }
      }
    });
  }, [location.pathname]);

  useEffect(() => {
    // Inject Google Translate script if it doesn't exist
    if (!document.getElementById('google-translate-script')) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
          'google_translate_element'
        );
      };
      
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: `<div id="header-wrapper" class="clearfix"> 
  
  <section id="top-bar-wrapper">
    <div id="top-bar" class="clearfix">
      <div class="mscroll mobile-hide" style="display: flex; align-items: center;"> <span class="blink_me" style="color: #14b8ad; display: flex; align-items: center;"><img src="img/govt.png" alt="Neon Alloys :: GOVERNMENT RECOGNISED STAR EXPORT HOUSE" style="height: 30px; margin-right: 10px;"> "GOVERNMENT RECOGNISED STAR EXPORT HOUSE"</span> </div>
      <ul class="contact-info">
        <li>
          <div id="google_translate_element"></div>
        
        </li>
        <li> <i class="icon-envelope-alt"></i> <span><a href="mailto:info@siyaksteel.com">info@siyaksteel.com</a></span></li>
        <li> <i class="icon-arrow-right"></i> <span><a href="hs-codes.php">HS Codes</a></span></li>

        
      </ul>
       
      
       
       
    </div>
     
  </section>
   
  
  
  <header id="header" class="clearfix">
    <section id="logo"> <a href="index.php"> <img src="img/logo.png" title="Neon Alloys" alt="Neon Alloys"> </a> </section>
    <section id="nav-container">
      <nav id="nav">
        <ul>
          <li class="current-menu-item"> <a href="index.php">Home</a> </li>
          <li class=""> <a href="about-us.php">About</a> </li>
          <li class=""> <a href="products.php">Products</a>
            <ul class="">
              <li><a href="pipes-tubes.php">Pipes &amp; Tubes</a></li>
              <li><a href="sheets-plates.php">Sheets &amp; Plates</a></li>
              <li><a href="round-bars.php">Round Bars</a></li>
              <li><a href="flanges.php">Flanges</a></li>
              <li><a href="buttweld-fittings.php">Buttweld Fittings</a></li>
              <li><a href="socketweld-fittings.php">Socketweld Fittings</a></li>
              <li><a href="fasteners.php">Fasteners</a></li>
              <li><a href="refractory-fixings-anchors.php">Refractory Fixings &amp; Anchors</a></li>
              <li><a href="angles-channels.php">Angles &amp; Channels</a></li>
              <li><a href="tube-sheet.php">Tube Sheets</a></li>
              <li><a href="ferrule-fittings.php">Ferrule Fittings</a></li>
              <li><a href="cladded-plates.php">Cladded Plates</a></li>
              <li><a href="olets.php">Olets</a></li>
              <li><a href="valves.php">Valves</a></li>
              <li><a href="graphite-filled-bronze-bushes.php">Graphite Filled Bronze Bush</a></li>
			  <li><a href="billets-manufacturer-supplier.php">Billets</a></li>	
            </ul>
          </li>
          <li class=""> <a href="quality-policy.php">Quality Policy</a> </li>
          <li class=""> <a href="certification.php">Certification</a> </li>
          <li class=""> <a href="presence.php">Presence</a> </li>
          <li class=""> <a href="gallery.php">Gallery</a> </li>
          <li class=""> <a href="enquiry.php">Enquiry</a> </li>
          
          <li class=""><a href="contact.php">Contact</a></li>
        </ul>
      </nav>
       
    </section>
     
    
    
    <div id="dl-menu" class="dl-menuwrapper">
      <button class="dl-trigger">Open Menu</button>
      <ul class="dl-menu">
        <li> <a href="index.php">Home</a> </li>
        <li> <a href="about-us.php">About US</a> </li>
        <li> <a href="products.php">Products</a>
          <ul class="dl-submenu">
            <li><a href="pipes-tubes.php">Pipes &amp; Tubes</a></li>
            <li><a href="sheets-plates.php">Sheets &amp; Plates</a></li>
            <li><a href="round-bars.php">Round Bars</a></li>
            <li><a href="flanges.php">Flanges</a></li>
            <li><a href="buttweld-fittings.php">Buttweld Fittings</a></li>
            <li><a href="socketweld-fittings.php">Socketweld Fittings</a></li>
            <li><a href="fasteners.php">Fasteners</a></li>
            <li><a href="refractory-fixings-anchors.php">Refractory Fixings &amp; Anchors</a></li>
            <li><a href="angles-channels.php">Angles &amp; Channels</a></li>
            <li><a href="tube-sheet.php">Tube Sheets</a></li>
            <li><a href="ferrule-fittings.php">Ferrule Fittings</a></li>
            <li><a href="cladded-plates.php">Cladded Plates</a></li>
            <li><a href="olets.php">Olets</a></li>
            <li><a href="valves.php">Valves</a></li>
          </ul>
        </li>
        <li> <a href="quality-policy.php">Quality Policy</a> </li>
        <li> <a href="certification.php">Certification</a> </li>
        <li> <a href="presence.php">Presence</a> </li>
        <li> <a href="gallery.php">Gallery</a> </li>
        <li> <a href="enquiry.php">Enquiry</a> </li>
        <li><a href="contact.php">Contact Us</a></li>
      </ul>
       
    </div>
     
    
     
     
  </header>
   
</div>
            


            ` }} />;
}
