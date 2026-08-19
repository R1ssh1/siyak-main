import React from 'react';
import { Link } from 'react-router-dom';
import { productCategories } from '../../data/products';
import TiltCard from '../../components/TiltCard';
import ProductImage from '../../components/ProductImage';
import Reveal from '../../components/Reveal';
import { ArrowUpRight } from 'lucide-react';

import SEO from '../../components/SEO';
import { OrganizationLd, WebPageLd, BreadcrumbLd } from '../../components/JsonLd';
import { absoluteUrl } from '../../lib/site';
export default function Products() {
  return (
    <>
      <SEO
        description="Explore Siyak Steel International's product range — stainless steel, duplex, nickel alloy pipes, tubes, flanges, fittings, fasteners, valves and more."
        keywords="steel products india, stainless steel pipes india, duplex steel supplier"
      />
      <OrganizationLd />
      <WebPageLd url={absoluteUrl('/products')} description="Explore Siyak Steel International's product range — stainless steel, duplex, nickel alloy pipes, tubes, flanges, fittings, fasteners, valves and more." />
      <section className="page-content bg-paper min-h-screen">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="box-pro1" style={{ background: '#005d65', width: '100%', marginBottom: '40px' }}>
            <div className="bphead">OUR PRODUCTS</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px', width: '100%' }}>
            {productCategories.map((cat, i) => (
              <div style={{ display: 'flex' }} key={cat.slug}>
                <div className={i % 2 === 0 ? "masobox" : "masobox2"} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid #e5e5e5' }}>
                  <div className="imgt" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
                    <img src={cat.image} alt={cat.name} title={cat.name} style={{aspectRatio: '4/3', objectFit: 'contain', objectPosition: 'center', width: '100%', display: 'block', padding: '10px'}}/>
                  </div>
                  <div className="content-maso" style={{ flexGrow: 1, padding: '20px', display: 'flex', flexDirection: 'column', background: '#fff' }}>
                    <div className="heading-link" style={{ flexGrow: 1 }}>
                      <Link to={`/${cat.slug}`}>
                        {cat.name}
                        <i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px", ...(i % 2 !== 0 && { fontWeight: 300 }) }}></i>
                        <br /><br />
                        <span className="spant" style={{ color: '#222', fontWeight: 500, lineHeight: 1.5, display: 'block' }}>
                          {cat.description || cat.short}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}