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
      <div id="page-wrapper" className="clearfix">
        <section id="page-title-abt" className="page-title-1 " data-stellar-background-ratio="0.3">
          <div className="container">
            <div className="row">
              <div className="grid_9">
                <div className="pt-box">
                  <div className="pt-title triggerAnimation animated fadeInLeft" data-animate="fadeInLeft">
                    <h1>We are <span className="strong">NEONALLOYS</span></h1>
                    <h4>Ensuring Stainless Performance.<br/>
                      We are offering quality range of industrial <br/>
                      Raw Material ant its Fittings</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breadcrumbs-box">
            <div className="container">
              <div className="row">
                <div className="grid_12">
                  <ul>
                    <li>You are here: <a href="/">Home</a> / <span>HS Code</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="page-content" className="page-content-1">
          <div className="container">
            <div className="row">
              <div className="grid_3">
                <aside id="sidebar" className="sidebar left">
                  <div className="widget-container widget_custom_menu">
                    <h3 className="widget-title">ABOUT NEON ALLOYS</h3>
                    <ul>
                      <li><a href="/about-us">About Us</a></li>
                      <li><a href="#">Team</a></li>
                      <li><a href="#">Growth</a></li>
                      <li><a href="#">Markets</a></li>
                      <li><a href="#">Strength & Strategy</a></li>
                    </ul>
                  </div>
                  <div className="widget-container widget_custom_menu">
                    <h3 className="widget-title">PRODUCT RANGE</h3>
                    <ul>
                      <li><a href="/pipes-tubes">Pipes & Tubes</a></li>
                      <li><a href="/sheets-plates">Sheets & Plates</a></li>
                      <li><a href="/round-bars">Round Bars</a></li>
                      <li><a href="/flanges">Flanges</a></li>
                      <li><a href="/buttweld-fittings">Buttweld Fittings</a></li>
                      <li><a href="/socketweld-fittings">Socketweld Fittings</a></li>
                      <li><a href="/fasteners">Fasteners</a></li>
                      <li><a href="/refractory-fixings-anchors">Refractory Fixings & Anchors</a></li>
                      <li><a href="/angles-channels">Angles & Channels</a></li>
                      <li><a href="/tube-sheet">Tube Sheets</a></li>
                      <li><a href="/ferrule-fittings">Ferrule Fittings</a></li>
                      <li><a href="/cladded-plates">Cladded Plates</a></li>
                      <li><a href="/olets">Olets</a></li>
                      <li><a href="/valves">Valves</a></li>
                      <li><a href="#">Graphite Filled Bronze Bush</a></li>
                      <li><a href="#">Billets</a></li>
                    </ul>
                  </div>
                </aside>
              </div>

              <div className="grid_9">
                <article>
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
          </div>
        </section>
      </div>
    </>
  );
}
