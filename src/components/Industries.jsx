import React from "react";
import { industries } from "../data/products";

export default function Industries() {
  return (
    <section className="page-content bg-white" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="container">
        <div className="row">
          <section className="grid_12">
            <div className="box-pro1" style={{ "background": "#02898f" }}>
              <div className="bphead">INDUSTRIES WE SERVE</div>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px' }}>
              <h2 style={{ fontSize: '28px', color: '#333', fontWeight: '300' }}>Where our materials actually get put to work.</h2>
            </div>
          </section>
        </div>

        <div className="grid_12">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '25px', padding: '15px 0' }}>
            {industries.map((ind, i) => (
              <div key={ind.name} style={{ display: 'flex' }}>
                <div className={i % 3 === 0 ? "masobox" : i % 3 === 1 ? "masobox2" : "masobox3"} style={{ border: '1px solid #e5e5e5', background: '#fff', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="imgt" style={{ overflow: 'hidden' }}>
                    <img
                      src={ind.image}
                      alt={ind.name}
                      style={{ aspectRatio: '16/10', objectFit: 'cover', width: '100%', display: 'block' }}
                    />
                  </div>
                  <div className="content-maso" style={{ padding: '20px' }}>
                    <div className="heading-link" style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', color: '#005d65', marginBottom: '10px' }}>
                      {ind.name}
                    </div>
                    <p style={{ fontSize: '14px', color: '#222', lineHeight: '20px', textAlign: 'center' }}>
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
