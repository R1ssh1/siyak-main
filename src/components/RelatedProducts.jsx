import React from 'react';
import { Link } from 'react-router-dom';
import { productCategories } from '../data/products';

export default function RelatedProducts({ currentSlug }) {
  // Filter out the current product and pick 4 related ones
  const otherProducts = productCategories.filter(p => p.slug !== currentSlug);
  
  // To keep it deterministic but interesting, we can just slice the next 4
  // using the index of the current product as a seed.
  const currentIndex = productCategories.findIndex(p => p.slug === currentSlug);
  const startIndex = (currentIndex + 1) % otherProducts.length;
  
  let related = [];
  for (let i = 0; i < 4; i++) {
    const idx = (startIndex + i) % otherProducts.length;
    related.push(otherProducts[idx]);
  }

  return (
    <div className="related-products-section" style={{ marginTop: '50px', clear: 'both', width: '100%', display: 'block' }}>
      <div className="heading-bordered2">
        <h2><i className="icon icon-double-angle-right"></i> <b>Related Products</b></h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px', width: '100%' }}>
        {related.map(product => (
          <div style={{ width: '100%', margin: 0 }} key={product.slug}>
            <div style={{ overflow: 'hidden', width: '100%', display: 'block' }}>
              <Link to={`/${product.slug}`}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  title={product.name} 
                  style={{ aspectRatio: '4/3', objectFit: 'cover', width: '100%', display: 'block', border: '1px solid #ddd' }}
                />
              </Link>
            </div>
            <h3 style={{ fontSize: '16px', marginTop: '10px', textAlign: 'center' }}>
              <Link to={`/${product.slug}`} style={{ color: 'var(--color-ink)' }}>
                {product.name}
              </Link>
            </h3>
          </div>
        ))}
      </div>
      <div className="clear"></div>
    </div>
  );
}
