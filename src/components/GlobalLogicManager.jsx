import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function GlobalLogicManager() {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Link Interceptor
  useEffect(() => {
    const handleLinkClick = (e) => {
      // Find the closest anchor tag in case they clicked an icon or text inside it
      const target = e.target.closest('a');
      
      if (!target) return;
      
      const href = target.getAttribute('href');
      
      // Ignore external links, mailtos, anchors, or empty links
      if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
        return;
      }

      // If it's a local .php link, intercept it
      if (href.endsWith('.php')) {
        e.preventDefault();
        let path = href.replace('.php', '');
        
        // Handle index.php -> /
        if (path === 'index') {
          path = '/';
        } else if (!path.startsWith('/')) {
          path = '/' + path;
        }

        // Close any mobile menus if they are open (e.g. dl-menu)
        if (window.jQuery && window.jQuery('.dl-menuwrapper').length > 0) {
            window.jQuery('.dl-menuwrapper').dlmenu('closeMenu');
        }
        
        navigate(path);
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, [navigate]);



  // 3. Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // 4. Re-initialize jQuery plugins on route change
  useEffect(() => {
    // Give a short delay to ensure dangerouslySetInnerHTML has rendered the DOM
    setTimeout(() => {
      if (window.jQuery && window.jQuery('#post-slider').length > 0) {
        window.jQuery('#post-slider').nivoSlider();
      }
    }, 100);
  }, [location.pathname]);

  // 5. Initialize dlmenu hamburger on mount and re-init on route change
  useEffect(() => {
    const initDlMenu = () => {
      const $ = window.jQuery;
      if (!$ || !$.fn.dlmenu) return;
      const $menu = $('#dl-menu');
      if ($menu.length === 0) return;
      // Destroy existing instance if any, then re-init
      try { $menu.dlmenu('destroy'); } catch(e) { /* ignore */ }
      $menu.dlmenu({
        animationClasses: { classin: 'dl-animate-in-2', classout: 'dl-animate-out-2' }
      });
    };
    // Wait for DOM to settle after React renders header
    const t = setTimeout(initDlMenu, 200);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return null; // This component doesn't render anything
}
