import React from 'react';
import { Link } from 'react-router-dom';

import SEO from '../../components/SEO';
import { OrganizationLd, WebPageLd, BreadcrumbLd } from '../../components/JsonLd';
import { absoluteUrl } from '../../lib/site';
export default function Sitemap() {
  return (
    <>
      <SEO
        title="Sitemap"
        description="Full sitemap of Siyak Steel International's website — products, services, contact and company information."
        keywords="siyak steel sitemap, steel supplier website map"
      />
      <OrganizationLd />
      <WebPageLd url={absoluteUrl('/sitemap')} title="Sitemap" description="Full sitemap of Siyak Steel International's website — products, services, contact and company information." />
      <section className="page-content">
        <div className="container">
          <div className="row">
            <div className="grid_12">
              <div className="box-pro1" style={{ background: '#005d65' }}>
                <div className="bphead">SITEMAP</div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
          <div className="clrspace40"></div>
          <div className="row">
            <div className="grid_4">
              <h3 style={{ color: '#005d65', marginBottom: '10px' }}>Company</h3>
              <ul style={{ lineHeight: 2 }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/quality-policy">Quality Policy</Link></li>
                <li><Link to="/certification">Certification</Link></li>
                <li><Link to="/presence">Presence</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/enquiry">Enquiry</Link></li>
              </ul>
            </div>
            <div className="grid_4">
              <h3 style={{ color: '#005d65', marginBottom: '10px' }}>Products</h3>
              <ul style={{ lineHeight: 2 }}>
                <li><Link to="/products">All Products</Link></li>
                <li><Link to="/pipes-tubes-stockist-supplier-exporter-in-mumbai-india">Pipes &amp; Tubes</Link></li>
                <li><Link to="/sheets-plates-stockist-supplier-exporter-in-mumbai-india">Sheets &amp; Plates</Link></li>
                <li><Link to="/round-bars-stockist-supplier-exporter-in-mumbai-india">Round Bars</Link></li>
                <li><Link to="/flanges-stockist-supplier-exporter-in-mumbai-india">Flanges</Link></li>
                <li><Link to="/buttweld-fittings-stockist-supplier-exporter-in-mumbai-india">Buttweld Fittings</Link></li>
                <li><Link to="/socketweld-fittings-stockist-supplier-exporter-in-mumbai-india">Socketweld Fittings</Link></li>
                <li><Link to="/fasteners-stockist-supplier-exporter-in-mumbai-india">Fasteners</Link></li>
                <li><Link to="/valves-stockist-supplier-exporter-in-mumbai-india">Valves</Link></li>
                <li><Link to="/ferrule-fittings-stockist-supplier-exporter-in-mumbai-india">Ferrule Fittings</Link></li>
                <li><Link to="/angles-channels-stockist-supplier-exporter-in-mumbai-india">Angles &amp; Channels</Link></li>
                <li><Link to="/tube-sheet-manufacturer-supplier-exporter-in-mumbai-india">Tube Sheets</Link></li>
                <li><Link to="/olets-stockist-supplier-exporter-in-mumbai-india">Olets</Link></li>
                <li><Link to="/cladded-plates-manufacturer-supplier-exporter-in-mumbai-india">Cladded Plates</Link></li>
                <li><Link to="/refractory-fixings-anchors-manufacturer-supplier-exporter-in-mumbai-india">Refractory Fixings &amp; Anchors</Link></li>
                <li><Link to="/perforated-sheets-manufacturer-supplier-exporter-in-mumbai-india">Perforated Sheets</Link></li>
                <li><Link to="/wire-mesh-manufacturer-supplier-exporter-in-mumbai-india">Wire Mesh</Link></li>
              </ul>
            </div>
            <div className="grid_4">
              <h3 style={{ color: '#005d65', marginBottom: '10px' }}>Tools &amp; Resources</h3>
              <ul style={{ lineHeight: 2 }}>
                <li><Link to="/weight-calculator">Weight Calculator</Link></li>
                <li><Link to="/hs-codes">HS Codes</Link></li>
                <li><Link to="/nickel-alloy-catalogue" target="_blank" rel="noopener noreferrer">Nickel Alloy Catalogue</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
