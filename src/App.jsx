
import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './converted-legacy/components/Header';
import Footer from './converted-legacy/components/Footer';
import GlobalLogicManager from './components/GlobalLogicManager';
import CustomScrollbar from './components/CustomScrollbar';
import DownloadCatalogueModal from './components/DownloadCatalogueModal';

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
import NickelAlloyCatalogue from './pages/NickelAlloyCatalogue';
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
import PerforatedSheets from './converted-legacy/pages/PerforatedSheets';
import WireMesh from './converted-legacy/pages/WireMesh';
import NickelProducts from './converted-legacy/pages/NickelProducts';

const MainLayout = () => (
  <div id="page-wrapper" className="clearfix">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default function App() {
  const [isCatalogueModalOpen, setIsCatalogueModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsCatalogueModalOpen(true);
    window.addEventListener('open-catalogue-modal', handleOpenModal);
    return () => window.removeEventListener('open-catalogue-modal', handleOpenModal);
  }, []);

  return (
    <>
      <GlobalLogicManager />
      <CustomScrollbar />
      <DownloadCatalogueModal open={isCatalogueModalOpen} onClose={() => setIsCatalogueModalOpen(false)} />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/nickel-alloy-catalogue" element={<NickelAlloyCatalogue />} />
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
          <Route path="/perforated-sheets" element={<PerforatedSheets />} />
          <Route path="/wire-mesh" element={<WireMesh />} />
          <Route path="/nickel-products" element={<NickelProducts />} />
        </Route>
      </Routes>
    </>
  );
}
