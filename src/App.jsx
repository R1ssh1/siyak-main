
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Header from './converted-legacy/components/Header';
import Footer from './converted-legacy/components/Footer';
import GlobalLogicManager from './components/GlobalLogicManager';
import CustomScrollbar from './components/CustomScrollbar';

import AboutUs from './converted-legacy/pages/AboutUs';
import AnglesChannels from './converted-legacy/pages/AnglesChannels';
import Blog from './converted-legacy/pages/Blog';
import ButtweldFittings from './converted-legacy/pages/ButtweldFittings';
import Certification from './converted-legacy/pages/Certification';
import CladdedPlates from './converted-legacy/pages/CladdedPlates';
import Contact from './converted-legacy/pages/Contact';
import Enquiry from './converted-legacy/pages/Enquiry';
import Fasteners from './converted-legacy/pages/Fasteners';
import FerruleFittings from './converted-legacy/pages/FerruleFittings';
import Flanges from './converted-legacy/pages/Flanges';
import Gallery from './converted-legacy/pages/Gallery';
import HsCodes from './pages/HSCodes';
import Home from './converted-legacy/pages/Home';
import NickelProducts from './converted-legacy/pages/NickelProducts';
import Olets from './converted-legacy/pages/Olets';
import PipesTubes from './converted-legacy/pages/PipesTubes';
import Presence from './converted-legacy/pages/Presence';
import Products from './converted-legacy/pages/Products';
import QualityPolicy from './converted-legacy/pages/QualityPolicy';
import RefractoryFixingsAnchors from './converted-legacy/pages/RefractoryFixingsAnchors';
import RoundBars from './converted-legacy/pages/RoundBars';
import SheetsPlates from './converted-legacy/pages/SheetsPlates';
import Sitemap from './converted-legacy/pages/Sitemap';
import SocketweldFittings from './converted-legacy/pages/SocketweldFittings';
import TubeSheet from './converted-legacy/pages/TubeSheet';
import Valves from './converted-legacy/pages/Valves';
import WeightCalculator from './pages/WeightCalculator';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <GlobalLogicManager />
      <CustomScrollbar />
      <div id="page-wrapper" className="clearfix">
        <Header />
        <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/angles-channels" element={<AnglesChannels />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/buttweld-fittings" element={<ButtweldFittings />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/cladded-plates" element={<CladdedPlates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/fasteners" element={<Fasteners />} />
        <Route path="/ferrule-fittings" element={<FerruleFittings />} />
        <Route path="/flanges" element={<Flanges />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/hs-codes" element={<HsCodes />} />
        <Route path="/" element={<Home />} />
        <Route path="/nickel-alloy-catalogue" element={<NickelProducts />} />
        <Route path="/olets" element={<Olets />} />
        <Route path="/pipes-tubes" element={<PipesTubes />} />
        <Route path="/presence" element={<Presence />} />
        <Route path="/products" element={<Products />} />
        <Route path="/quality-policy" element={<QualityPolicy />} />
        <Route path="/refractory-fixings-anchors" element={<RefractoryFixingsAnchors />} />
        <Route path="/round-bars" element={<RoundBars />} />
        <Route path="/sheets-plates" element={<SheetsPlates />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/socketweld-fittings" element={<SocketweldFittings />} />
        <Route path="/tube-sheet" element={<TubeSheet />} />
        <Route path="/valves" element={<Valves />} />
        <Route path="/weight-calculator" element={<WeightCalculator />} />
      </Routes>
      <Footer />
      </div>
    </>
  );
}
