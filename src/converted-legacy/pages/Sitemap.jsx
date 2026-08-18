import React from 'react';
import { Link } from 'react-router-dom';

export default function Sitemap() {
  return (
    <>
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
                <li><Link to="/pipes-tubes">Pipes &amp; Tubes</Link></li>
                <li><Link to="/sheets-plates">Sheets &amp; Plates</Link></li>
                <li><Link to="/round-bars">Round Bars</Link></li>
                <li><Link to="/flanges">Flanges</Link></li>
                <li><Link to="/buttweld-fittings">Buttweld Fittings</Link></li>
                <li><Link to="/socketweld-fittings">Socketweld Fittings</Link></li>
                <li><Link to="/fasteners">Fasteners</Link></li>
                <li><Link to="/valves">Valves</Link></li>
                <li><Link to="/ferrule-fittings">Ferrule Fittings</Link></li>
                <li><Link to="/angles-channels">Angles &amp; Channels</Link></li>
                <li><Link to="/tube-sheet">Tube Sheets</Link></li>
                <li><Link to="/olets">Olets</Link></li>
                <li><Link to="/cladded-plates">Cladded Plates</Link></li>
                <li><Link to="/refractory-fixings-anchors">Refractory Fixings &amp; Anchors</Link></li>
                <li><Link to="/perforated-sheets">Perforated Sheets</Link></li>
                <li><Link to="/wire-mesh">Wire Mesh</Link></li>
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
