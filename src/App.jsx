
import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './converted-legacy/components/Header';
import Footer from './converted-legacy/components/Footer';
import GlobalLogicManager from './components/GlobalLogicManager';
import CustomScrollbar from './components/CustomScrollbar';
import DownloadCatalogueModal from './components/DownloadCatalogueModal';
import { ROUTES } from './lib/routes';

import AboutUs from './converted-legacy/pages/AboutUs';
import AnglesChannels from './converted-legacy/pages/AnglesChannels';
import Blog from './converted-legacy/pages/Blog';
import ButtweldFittings from './converted-legacy/pages/ButtweldFittings';
import Certification from './converted-legacy/pages/Certification';
import CladdedPlates from './converted-legacy/pages/CladdedPlates';
import Contact from './converted-legacy/pages/Contact';
import Enquiry from './converted-legacy/pages/Enquiry';
import TechnicalInfo from './converted-legacy/pages/TechnicalInfo';
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
      <DownloadCatalogueModal open={isCatalogueModalOpen} onClose={() => setIsCatalogueModalOpen(false)} />
      <Routes>
        <Route path="/nickel-alloy-catalogue" element={<NickelAlloyCatalogue />} />
        <Route element={<MainLayout />}>
          {/* Core pages */}
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.aboutUs} element={<AboutUs />} />
          <Route path={ROUTES.blog} element={<Blog />} />
          <Route path={ROUTES.certification} element={<Certification />} />
          <Route path={ROUTES.contact} element={<Contact />} />
          <Route path={ROUTES.enquiry} element={<Enquiry />} />
          <Route path={ROUTES.gallery} element={<Gallery />} />
          <Route path={ROUTES.hsCodes} element={<HsCodes />} />
          <Route path={ROUTES.presence} element={<Presence />} />
          <Route path={ROUTES.products} element={<Products />} />
          <Route path={ROUTES.qualityPolicy} element={<QualityPolicy />} />
          <Route path={ROUTES.sitemap} element={<Sitemap />} />
          <Route path={ROUTES.technicalInfo} element={<TechnicalInfo />} />
          <Route path={ROUTES.weightCalculator} element={<WeightCalculator />} />

          {/* Product pages — SEO-friendly slugs */}
          <Route path={ROUTES.pipesTubes} element={<PipesTubes />} />
          <Route path={ROUTES.flanges} element={<Flanges />} />
          <Route path={ROUTES.buttweldFittings} element={<ButtweldFittings />} />
          <Route path={ROUTES.socketweldFittings} element={<SocketweldFittings />} />
          <Route path={ROUTES.fasteners} element={<Fasteners />} />
          <Route path={ROUTES.valves} element={<Valves />} />
          <Route path={ROUTES.roundBars} element={<RoundBars />} />
          <Route path={ROUTES.sheetsPlates} element={<SheetsPlates />} />
          <Route path={ROUTES.olets} element={<Olets />} />
          <Route path={ROUTES.anglesChannels} element={<AnglesChannels />} />
          <Route path={ROUTES.tubeSheet} element={<TubeSheet />} />
          <Route path={ROUTES.ferruleFittings} element={<FerruleFittings />} />
          <Route path={ROUTES.claddedPlates} element={<CladdedPlates />} />
          <Route path={ROUTES.refractoryFixingsAnchors} element={<RefractoryFixingsAnchors />} />
          <Route path={ROUTES.perforatedSheets} element={<PerforatedSheets />} />
          <Route path={ROUTES.wireMesh} element={<WireMesh />} />
          <Route path={ROUTES.nickelProducts} element={<NickelProducts />} />

          {/* Legacy redirect routes — old slugs redirect to new SEO slugs */}
          <Route path="/pipes-tubes" element={<Navigate to={ROUTES.pipesTubes} replace />} />
          <Route path="/flanges" element={<Navigate to={ROUTES.flanges} replace />} />
          <Route path="/buttweld-fittings" element={<Navigate to={ROUTES.buttweldFittings} replace />} />
          <Route path="/socketweld-fittings" element={<Navigate to={ROUTES.socketweldFittings} replace />} />
          <Route path="/fasteners" element={<Navigate to={ROUTES.fasteners} replace />} />
          <Route path="/valves" element={<Navigate to={ROUTES.valves} replace />} />
          <Route path="/round-bars" element={<Navigate to={ROUTES.roundBars} replace />} />
          <Route path="/sheets-plates" element={<Navigate to={ROUTES.sheetsPlates} replace />} />
          <Route path="/olets" element={<Navigate to={ROUTES.olets} replace />} />
          <Route path="/angles-channels" element={<Navigate to={ROUTES.anglesChannels} replace />} />
          <Route path="/tube-sheet" element={<Navigate to={ROUTES.tubeSheet} replace />} />
          <Route path="/ferrule-fittings" element={<Navigate to={ROUTES.ferruleFittings} replace />} />
          <Route path="/cladded-plates" element={<Navigate to={ROUTES.claddedPlates} replace />} />
          <Route path="/refractory-fixings-anchors" element={<Navigate to={ROUTES.refractoryFixingsAnchors} replace />} />
          <Route path="/perforated-sheets" element={<Navigate to={ROUTES.perforatedSheets} replace />} />
          <Route path="/wire-mesh" element={<Navigate to={ROUTES.wireMesh} replace />} />
          <Route path="/nickel-products" element={<Navigate to={ROUTES.nickelProducts} replace />} />
        </Route>
      </Routes>
    </>
  );
}
