import React, { useState } from 'react';
import { hsChapters } from '../data/hsCodes';
import TopBar from '../components/TopBar'; // Using correct path if needed, but not rendered here

export default function HsCodes() {
  const [activeChapter, setActiveChapter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Get all sub-codes globally for searching
  const allCodes = hsChapters.flatMap(chapter => chapter.codes || []);

  let displayedRows = [];

  if (searchTerm.trim() !== '') {
    // If searching, filter all codes globally
    const lowerSearch = searchTerm.toLowerCase();
    displayedRows = allCodes.filter(codePair => 
      codePair[0].toLowerCase().includes(lowerSearch) || 
      codePair[1].toLowerCase().includes(lowerSearch)
    ).map(codePair => ({
      code: codePair[0],
      description: codePair[1],
      isClickable: false
    }));
  } else if (activeChapter) {
    // Show sub-codes of selected chapter
    const chapterData = hsChapters.find(c => c.code === activeChapter);
    if (chapterData && chapterData.codes) {
      displayedRows = chapterData.codes.map(codePair => ({
        code: codePair[0],
        description: codePair[1],
        isClickable: false
      }));
    }
  } else {
    // Show root chapters
    displayedRows = hsChapters.map(chapter => ({
      code: chapter.code,
      description: chapter.description,
      isClickable: true
    }));
  }

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is handled by state automatically
  };

  return (
    <>
      <section id="page-title-abt" className="page-title-1" data-stellar-background-ratio="0.3">
        <div className="container">
          <div className="row">
            <div className="grid_9">
              <div className="pt-box" style={{ backgroundColor: 'rgba(29, 140, 160, 0.86)' }}>
                <div className="pt-title triggerAnimation animated" data-animate="fadeInLeft">
                  <h1><span className="strong">HS Codes</span></h1>
                  <h4>Harmonized System codes for steel and industrial products.</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="grid_8">
              <div className="breadcrumbs triggerAnimation animated" data-animate="fadeInUp">
                <ul>
                  <li><span>You are here:</span></li>
                  <li><a href="/">Home / </a></li>
                  <li><span className="active">HS Codes</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="page-content" className="page-content-1">
        <div className="container">
          <div className="row">
            <aside className="grid_3 aside-right triggerAnimation animated" data-animate="fadeInLeft">
              <div className="clrspace"></div>
              <ul className="aside_widgets">
                <li className="widget widget_custom_menu">
                  <h2>ABOUT SIYAK STEEL</h2>
                  <ul>
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/quality-policy">Quality Policy</a></li>
                    <li><a href="/certification">Certification</a></li>
                    <li><a href="/technical-info">Technical Info</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                  </ul>
                </li>
                <li className="widget widget_productlist">
                  <h2>PRODUCT RANGE</h2>
                  <ul>
                    <li><a href="/pipes-tubes">Pipes &amp; Tubes</a></li>
                    <li><a href="/sheets-plates">Sheets &amp; Plates</a></li>
                    <li><a href="/round-bars">Round Bars</a></li>
                    <li><a href="/flanges">Flanges</a></li>
                    <li><a href="/buttweld-fittings">Buttweld Fittings</a></li>
                    <li><a href="/socketweld-fittings">Socketweld Fittings</a></li>
                    <li><a href="/fasteners">Fasteners</a></li>
                    <li><a href="/refractory-fixings-anchors">Refractory Fixings &amp; Anchors</a></li>
                    <li><a href="/angles-channels">Angles &amp; Channels</a></li>
                    <li><a href="/tube-sheet">Tube Sheets</a></li>
                    <li><a href="/ferrule-fittings">Ferrule Fittings</a></li>
                    <li><a href="/cladded-plates">Cladded Plates</a></li>
                    <li><a href="/olets">Olets</a></li>
                    <li><a href="/valves">Valves</a></li>
                    <li><a href="/perforated-sheets">Perforated Sheets</a></li>
                    <li><a href="/wire-mesh">Wire Mesh</a></li>
                    <li><a href="/nickel-products">Nickel Products</a></li>
                  </ul>
                </li>
              </ul>
            </aside>

            <article className="grid_9">
                  <section className="heading-bordered">
                    <h3>HS CODE</h3>
                  </section>
                  
                  <div style={{ paddingTop: '20px', marginBottom: '50px', clear: 'both' }}>
                    <form onSubmit={handleSearch} style={{ margin: 0, padding: 0 }}>
                      <input 
                        name="q" 
                        type="text" 
                        id="q" 
                        className="wpcf7-text" 
                        placeholder="Enter HS Code or Keyword" 
                        style={{ float: 'left', paddingRight: '10px' }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <input 
                        name="Search" 
                        type="submit" 
                        value="Search" 
                        className="hsc-submit" 
                        style={{ float: 'left', paddingLeft: '10px' }} 
                      />
                      {activeChapter && !searchTerm && (
                        <button 
                          type="button" 
                          onClick={() => setActiveChapter(null)} 
                          className="hsc-submit" 
                          style={{ float: 'left', marginLeft: '10px', background: '#ccc', color: '#333' }}
                        >
                          Back to Categories
                        </button>
                      )}
                    </form>
                  </div>

                  <div className="space" style={{ clear: 'both' }}></div>

                  <table cellSpacing="0" width="100%" className="table hscode-table">
                    <thead>
                      <tr>
                        <th scope="col" style={{ background: 'var(--color-teal)', color: '#fff', padding: '10px', textAlign: 'left' }}>HS Code</th>
                        <th scope="col" style={{ background: 'var(--color-teal)', color: '#fff', padding: '10px', textAlign: 'left' }}>Commodity Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayedRows.length > 0 ? (
                        displayedRows.map((row, idx) => (
                          <tr key={idx} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ width: '100px', padding: '10px', borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd' }}>
                              {row.isClickable ? (
                                <a 
                                  className="hsc-link" 
                                  href="#" 
                                  onClick={(e) => { e.preventDefault(); setActiveChapter(row.code); setSearchTerm(''); }}
                                >
                                  {row.code}
                                </a>
                              ) : (
                                row.code
                              )}
                            </td>
                            <td style={{ padding: '10px', borderRight: '1px solid #ddd' }}>{row.description}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="2" style={{ padding: '10px', textAlign: 'center', border: '1px solid #ddd' }}>No results found.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
