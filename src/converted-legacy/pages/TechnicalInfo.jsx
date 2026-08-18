import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CHEMICAL_DATA = [
  { grade: "301", c: "0.15", mn: "2.00", p: "0.045", s: "0.030", si: "1.00", cr: "16.00-18.00", ni: "6.00-8.00", mo: "-", n: "0.10", cu: "-" },
  { grade: "304", c: "0.08", mn: "2.00", p: "0.045", s: "0.030", si: "0.75", cr: "18.00-20.00", ni: "8.00-10.50", mo: "-", n: "0.10", cu: "-" },
  { grade: "304L", c: "0.030", mn: "2.00", p: "0.045", s: "0.030", si: "0.75", cr: "18.00-20.00", ni: "8.00-12.00", mo: "-", n: "0.10", cu: "-" },
  { grade: "310S", c: "0.08", mn: "2.00", p: "0.045", s: "0.030", si: "1.50", cr: "24.00-26.00", ni: "19.00-22.00", mo: "-", n: "-", cu: "-" },
  { grade: "316", c: "0.08", mn: "2.00", p: "0.045", s: "0.030", si: "0.75", cr: "16.00-18.00", ni: "10.00-14.00", mo: "2.00-3.00", n: "0.10", cu: "-" },
  { grade: "316L", c: "0.030", mn: "2.00", p: "0.045", s: "0.030", si: "0.75", cr: "16.00-18.00", ni: "10.00-14.00", mo: "2.00-3.00", n: "0.10", cu: "-" },
  { grade: "317", c: "0.08", mn: "2.00", p: "0.045", s: "0.030", si: "0.75", cr: "18.00-20.00", ni: "11.00-14.00", mo: "3.00-4.00", n: "0.10", cu: "-" },
  { grade: "317L", c: "0.030", mn: "2.00", p: "0.045", s: "0.030", si: "0.75", cr: "18.00-20.00", ni: "11.00-15.00", mo: "3.00-4.00", n: "0.10", cu: "-" },
  { grade: "321", c: "0.08", mn: "2.00", p: "0.045", s: "0.030", si: "0.75", cr: "17.00-19.00", ni: "9.00-12.00", mo: "-", n: "0.10", cu: "Ti 5x(C+N) min or 0.70 max" },
  { grade: "347", c: "0.08", mn: "2.00", p: "0.045", s: "0.030", si: "0.75", cr: "17.00-19.00", ni: "9.00-13.00", mo: "-", n: "-", cu: "Cb = 10xC min or 1.00 max" },
  { grade: "409", c: "0.08", mn: "1.00", p: "0.040", s: "0.010", si: "1.00", cr: "10.50-11.75", ni: "0.50", mo: "-", n: "-", cu: "Ti = 6x(C+N) min or 0.70 max" },
  { grade: "409M", c: "0.03", mn: "0.8-1.2", p: "0.030", s: "0.030", si: "0.4-0.75", cr: "11.00-12.00", ni: "1.5 max", mo: "-", n: "-", cu: "Ti = 6xC min or 0.70 max" },
  { grade: "410S", c: "0.08", mn: "1.00", p: "0.040", s: "0.030", si: "1.00", cr: "11.50-13.50", ni: "0.60", mo: "-", n: "-", cu: "-" },
  { grade: "410", c: "0.15", mn: "1.00", p: "0.040", s: "0.030", si: "1.00", cr: "11.50-13.50", ni: "0.75", mo: "-", n: "-", cu: "-" },
  { grade: "420", c: "0.35", mn: "0.50", p: "0.035", s: "0.015", si: "0.50", cr: "12.00-13.00", ni: "0.2-0.3", mo: "-", n: "-", cu: "-" },
  { grade: "430", c: "0.12", mn: "1.00", p: "0.040", s: "0.030", si: "1.00", cr: "16.00-18.00", ni: "0.75", mo: "-", n: "-", cu: "-" },
  { grade: "JSL AUS", c: "0.08", mn: "7.0-8.0", p: "0.070", s: "0.030", si: "0.75", cr: "15.50-16.50", ni: "4.25-4.75", mo: "-", n: "-", cu: "0.9-1.10" },
  { grade: "JS-203", c: "0.08", mn: "9.25-10.25", p: "0.070", s: "0.030", si: "0.75", cr: "14.25-15.25", ni: "2.25-2.75", mo: "-", n: "-", cu: "1.60-2.0" },
  { grade: "301M", c: "0.10", mn: "4.5-5.5", p: "0.060", s: "0.030", si: "0.75", cr: "14.50-15.50", ni: "6.0-7.0", mo: "-", n: "-", cu: "1.70-1.90" },
];

const MECHANICAL_DATA = [
  { grade: "301", tensile: "515", yield: "205", elongation: "40", bhn: "217", rb: "95" },
  { grade: "304", tensile: "515", yield: "205", elongation: "40", bhn: "201", rb: "92" },
  { grade: "304L", tensile: "485", yield: "170", elongation: "40", bhn: "201", rb: "92" },
  { grade: "310S", tensile: "515", yield: "205", elongation: "40", bhn: "217", rb: "95" },
  { grade: "316", tensile: "515", yield: "205", elongation: "40", bhn: "217", rb: "95" },
  { grade: "316L", tensile: "485", yield: "170", elongation: "40", bhn: "217", rb: "95" },
  { grade: "317", tensile: "515", yield: "205", elongation: "35", bhn: "217", rb: "95" },
  { grade: "317L", tensile: "515", yield: "205", elongation: "40", bhn: "217", rb: "95" },
  { grade: "321", tensile: "515", yield: "205", elongation: "40", bhn: "217", rb: "95" },
  { grade: "347", tensile: "515", yield: "205", elongation: "40", bhn: "201", rb: "92" },
  { grade: "409", tensile: "380", yield: "170", elongation: "20", bhn: "179", rb: "88" },
  { grade: "409M", tensile: "430", yield: "275", elongation: "20", bhn: "187", rb: "90" },
  { grade: "410S", tensile: "415", yield: "205", elongation: "22", bhn: "183", rb: "89" },
  { grade: "410", tensile: "450", yield: "205", elongation: "20", bhn: "217", rb: "89" },
  { grade: "420", tensile: "700 (max)", yield: "-", elongation: "15", bhn: "217", rb: "95" },
  { grade: "430", tensile: "450", yield: "205", elongation: "22", bhn: "183", rb: "89" },
  { grade: "JSL AUS", tensile: "515", yield: "205", elongation: "40", bhn: "217", rb: "95" },
  { grade: "JS-203", tensile: "515", yield: "205", elongation: "40", bhn: "217", rb: "95" },
  { grade: "301M", tensile: "515", yield: "205", elongation: "40", bhn: "217", rb: "95" },
];

const thStyle = {
  background: '#005d65',
  color: '#fff',
  padding: '10px 12px',
  fontWeight: 700,
  fontSize: '13px',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  border: '1px solid #004a50',
};

const tdStyle = {
  padding: '8px 12px',
  fontSize: '13px',
  textAlign: 'center',
  border: '1px solid #ddd',
  whiteSpace: 'nowrap',
};

const tdGradeStyle = {
  padding: '8px 12px',
  fontSize: '13px',
  textAlign: 'left',
  border: '1px solid #ddd',
  whiteSpace: 'nowrap',
  fontWeight: 700,
  background: '#f5f5f5',
};

export default function TechnicalInfo() {
  const [activeTab, setActiveTab] = useState('chemical');

  const tabBtnStyle = (tab) => ({
    padding: '10px 28px',
    fontSize: '14px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    border: '2px solid #005d65',
    cursor: 'pointer',
    background: activeTab === tab ? '#005d65' : '#fff',
    color: activeTab === tab ? '#fff' : '#005d65',
    transition: 'all 0.2s ease',
    borderRadius: '2px',
  });

  return (
    <>
      <section id="page-title-tech-info" className="page-title-1" data-stellar-background-ratio="0.3">
        <div className="container">
          <div className="row">
            <div className="grid_9">
              <div className="pt-box" style={{ backgroundColor: 'rgba(29, 140, 160, 0.86)' }}>
                <div className="pt-title triggerAnimation animated" data-animate="fadeInLeft">
                  <h1><span className="strong">Technical Info</span></h1>
                  <p>Chemical composition and mechanical properties for stainless steel grades.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="grid_8">
                <div className="breadcrumbs triggerAnimation animated" data-animate="fadeInUp">
                  <ul>
                    <li><span>You are here:</span></li>
                    <li><Link to="/">Home / </Link></li>
                    <li><span className="active">Technical Info</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="page-content" className="sidebar-right">
        <div className="container">
          <div className="row">
            <div className="grid_12" style={{ clear: 'both' }}>
              <article>
                <div style={{ display: 'flex', gap: '12px', margin: '40px 0 40px 0', flexWrap: 'wrap' }}>
                  <button style={tabBtnStyle('chemical')} onClick={() => setActiveTab('chemical')}>
                    Chemical Composition
                  </button>
                  <button style={tabBtnStyle('mechanical')} onClick={() => setActiveTab('mechanical')}>
                    Mechanical Properties
                  </button>
                </div>

                {activeTab === 'chemical' && (
                  <div>
                    <section className="heading-bordered" style={{ marginBottom: '16px' }}>
                      <h3>Chemical Composition (in %)</h3>
                    </section>
                    <p style={{ marginBottom: '20px', color: '#555' }}>
                      Maximum percentage unless otherwise specified. Values per ASTM / AISI standards.
                    </p>
                    <div style={{ overflowX: 'auto', width: '100%' }}>
                      <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: '900px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        <thead>
                          <tr>
                            <th style={{ ...thStyle, textAlign: 'left' }}>Grade</th>
                            <th style={thStyle}>C (Max)</th>
                            <th style={thStyle}>Mn (Max)</th>
                            <th style={thStyle}>P (Max)</th>
                            <th style={thStyle}>S (Max)</th>
                            <th style={thStyle}>Si (Max)</th>
                            <th style={thStyle}>Cr</th>
                            <th style={thStyle}>Ni</th>
                            <th style={thStyle}>Mo</th>
                            <th style={thStyle}>N (Max)</th>
                            <th style={thStyle}>Cu / Others</th>
                          </tr>
                        </thead>
                        <tbody>
                          {CHEMICAL_DATA.map((row, i) => (
                            <tr key={row.grade} style={{ background: i % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                              <td style={tdGradeStyle}>{row.grade}</td>
                              <td style={tdStyle}>{row.c}</td>
                              <td style={tdStyle}>{row.mn}</td>
                              <td style={tdStyle}>{row.p}</td>
                              <td style={tdStyle}>{row.s}</td>
                              <td style={tdStyle}>{row.si}</td>
                              <td style={tdStyle}>{row.cr}</td>
                              <td style={tdStyle}>{row.ni}</td>
                              <td style={tdStyle}>{row.mo}</td>
                              <td style={tdStyle}>{row.n}</td>
                              <td style={{ ...tdStyle, textAlign: 'left', whiteSpace: 'normal', minWidth: '180px' }}>{row.cu}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'mechanical' && (
                  <div>
                    <section className="heading-bordered" style={{ marginBottom: '16px' }}>
                      <h3>Mechanical Properties</h3>
                    </section>
                    <p style={{ marginBottom: '20px', color: '#555' }}>
                      Minimum values in annealed condition unless otherwise specified. Values per ASTM / AISI standards.
                    </p>
                    <div style={{ overflowX: 'auto', width: '100%' }}>
                      <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: '700px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        <thead>
                          <tr>
                            <th style={{ ...thStyle, textAlign: 'left' }}>Grade</th>
                            <th style={thStyle}>Tensile Strength MPa (Min)</th>
                            <th style={thStyle}>Yield Strength MPa (Min)</th>
                            <th style={thStyle}>Elongation % (Min) in 50mm</th>
                            <th style={thStyle}>Hardness BHN (Max)</th>
                            <th style={thStyle}>Hardness Rb (Max)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {MECHANICAL_DATA.map((row, i) => (
                            <tr key={row.grade} style={{ background: i % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                              <td style={tdGradeStyle}>{row.grade}</td>
                              <td style={tdStyle}>{row.tensile}</td>
                              <td style={tdStyle}>{row.yield}</td>
                              <td style={tdStyle}>{row.elongation}</td>
                              <td style={tdStyle}>{row.bhn}</td>
                              <td style={tdStyle}>{row.rb}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </article>
            </div>
          </div>
        </div>
      </section>

      <a href="https://wa.me/919820976537?text=I%20want%20to%20enquire%20about" className="float" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}
