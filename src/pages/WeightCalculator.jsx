import React, { useState, useEffect } from 'react';

export default function WeightCalculator() {
  const [product, setProduct] = useState(0);
  const [formType, setFormType] = useState('Round');
  const [pieces, setPieces] = useState(1);
  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState('');
  const [param3, setParam3] = useState('');
  const [units1, setUnits1] = useState('in');
  const [units2, setUnits2] = useState('in');
  const [units3, setUnits3] = useState('in');
  const [result, setResult] = useState('');

  const Factor = [
    0.3462, 0.3604, 0.3568, 0.3568, 0.3533, 0.3498, 0.3462, 0.3427, 0.3356, 0.3392,
    0.3392, 0.3462, 0.3462, 0.3568, 0.3568, 0.3604, 1.030, 1.010, 1.132, 1.125,
    1.121, 1.075, 1.072, 1.075, 1.012, 1.012, 1.037, 1.012, 1.030, 1.132,
    1.012, 0.229, 0.236, 0.575, 0.812, 0.911, 0.911, 1.084, 1.095, 1.144,
    1.303, 1.339, 1.448, 2.120, 2.462, 2.466
  ];

  const RoundOff = 5;

  const getLabels = () => {
    switch (formType) {
      case 'Round':
      case 'Square':
      case 'Hexagonal':
      case 'Octagonal':
        return { l1: 'Diameter:', l2: '', l3: 'Length:' };
      case 'Flat':
      case 'Sheet':
      case 'Plate':
        return { l1: 'Thickness:', l2: 'Width:', l3: 'Length:' };
      case 'Tubular':
        return { l1: 'Outer Diameter:', l2: 'Wall:', l3: 'Length:' };
      case 'Circular':
        return { l1: 'Diameter:', l2: '', l3: 'Thickness:' };
      case 'Ring':
        return { l1: 'Outer Diameter:', l2: 'Inner Diameter:', l3: 'Thickness:' };
      default:
        return { l1: '', l2: '', l3: '' };
    }
  };

  const { l1, l2, l3 } = getLabels();

  const handleClear = () => {
    setParam1('');
    setParam2('');
    setParam3('');
    setPieces(1);
    setResult('');
  };

  const handleFormChange = (e) => {
    setFormType(e.target.value);
    handleClear();
  };

  const unitConvertI = (val, type) => {
    let v = parseFloat(val);
    if (isNaN(v)) return 0;
    if (type === 'cm') v = v / 2.54;
    if (type === 'm') v = (v * 100) / 2.54;
    if (type === 'mm') v = (v / 10) / 2.54;
    if (type === 'ft') v = v * 12;
    if (type === 'yd') v = v * 36;
    return v;
  };

  const unitConvertF = (val, type) => {
    let v = parseFloat(val);
    if (isNaN(v)) return 0;
    if (type === 'cm') v = (v / 2.54) / 12;
    if (type === 'm') v = ((v * 100) / 2.54) / 12;
    if (type === 'mm') v = ((v / 10) / 2.54) / 12;
    if (type === 'in') v = v / 12;
    if (type === 'yd') v = v * 3;
    return v;
  };

  const calculateWeight = (e) => {
    e.preventDefault();

    let p1 = unitConvertI(param1, units1);
    let p2 = unitConvertI(param2, units2);
    let p3 = unitConvertF(param3, units3);
    let p4 = parseFloat(pieces);

    if (isNaN(p4) || p4 <= 0) p4 = 1;

    let convert = product > 0 ? Factor[product - 1] : 1;
    let res = 0;

    switch (formType) {
      case 'Round':
        res = (2.6729 / 2.2046) * p1 * p1 * convert * p3 * p4;
        break;
      case 'Square':
        res = (3.4032 / 2.2046) * p1 * p1 * convert * p3 * p4;
        break;
      case 'Hexagonal':
        res = (2.9473 / 2.2046) * p1 * p1 * convert * p3 * p4;
        break;
      case 'Octagonal':
        res = (2.8193 / 2.2046) * p1 * p1 * convert * p3 * p4;
        break;
      case 'Flat':
      case 'Sheet':
      case 'Plate':
        res = (3.4032 / 2.2046) * p1 * convert * p2 * p3 * p4;
        break;
      case 'Tubular':
        res = (10.68 / 2.2046) * (p1 - p2) * convert * p2 * p3 * p4;
        if (res < 0) {
          alert('The Width of the Tube Wall cannot exceed the Outer Diameter!');
          return;
        }
        break;
      case 'Circular':
        p3 = unitConvertI(param3, 'ft'); // override p3 parsing
        res = (0.22274 / 2.2046) * p1 * convert * p1 * p3 * p4;
        break;
      case 'Ring':
        p3 = unitConvertI(param3, 'ft'); // override p3 parsing
        res = (0.22274 / 2.2046) * p3 * ((p1 * p1) - (p2 * p2)) * convert * p4;
        if (res < 0) {
          alert('The Inner Diameter cannot exceed the Outer Diameter!');
          return;
        }
        break;
      default:
        break;
    }

    if (isNaN(res)) {
      alert("Invalid input. Please check your numbers.");
      return;
    }

    const resStr = String(res);
    const dotIndex = resStr.indexOf('.');
    if (dotIndex !== -1) {
      setResult(resStr.substring(0, dotIndex + RoundOff));
    } else {
      setResult(resStr);
    }
  };

  return (
    <>
      <div id="page-wrapper" className="clearfix">
        <section id="page-title-calcy" className="page-title-1" data-stellar-background-ratio="0.3">
          <div className="container">
            <div className="row">
              <div className="grid_9">
                <div className="pt-box">
                  <div className="pt-title triggerAnimation animated fadeInLeft" data-animate="fadeInLeft">
                    <h1>Weight Calculator</h1>
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
                    <li>You are here: <a href="/">Home</a> / <span>Weight Calculator</span></li>
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
                    <h3>Weight Calculator</h3>
                  </section>

                  <div style={{ padding: '20px', background: '#f5f5f5', border: '1px solid #ddd' }}>
                    <form onSubmit={calculateWeight}>
                      <table width="100%" cellPadding="10" cellSpacing="0" style={{ margin: 0 }}>
                        <tbody>
                          <tr>
                            <td width="34%"><strong>Alloy:</strong></td>
                            <td width="66%">
                              <select className="wpcf7-text" style={{ width: '100%' }} value={product} onChange={e => setProduct(Number(e.target.value))}>
                                <option value="0">Steel (default)</option>
                                <option value="1">Aluminum 1100</option>
                                <option value="2">Aluminum 2011</option>
                                <option value="3">Aluminum 2014</option>
                                <option value="4">Aluminum 2017</option>
                                <option value="5">Aluminum 2024</option>
                                <option value="6">Aluminum 3003</option>
                                <option value="7">Aluminum 5005</option>
                                <option value="8">Aluminum 5052</option>
                                <option value="9">Aluminum 5056</option>
                                <option value="10">Aluminum 5083</option>
                                <option value="11">Aluminum 5086</option>
                                <option value="12">Aluminum 6061</option>
                                <option value="13">Aluminum 6063</option>
                                <option value="14">Aluminum 7050</option>
                                <option value="15">Aluminum 7075</option>
                                <option value="16">Aluminum 7178</option>
                                <option value="17">Stainless 300 Series</option>
                                <option value="18">Stainless 400 Series</option>
                                <option value="19">Nickel 200</option>
                                <option value="20">Nickel 400</option>
                                <option value="21">Nickel R-405</option>
                                <option value="22">Nickel K-500</option>
                                <option value="23">Nickel 600</option>
                                <option value="24">Nickel 625</option>
                                <option value="25">Nickel 800H</option>
                                <option value="26">Nickel 800AT</option>
                                <option value="27">Nickel 825</option>
                                <option value="28">Nickel 330</option>
                                <option value="29">Nickel 20</option>
                                <option value="30">Nickel C-276</option>
                                <option value="31">Nickel 2545MD</option>
                                <option value="32">Magnesium</option>
                                <option value="33">Beryllium</option>
                                <option value="34">Titanium</option>
                                <option value="35">Zirconium</option>
                                <option value="36">Cast Iron</option>
                                <option value="37">Zinc</option>
                                <option value="38">Brass</option>
                                <option value="39">Columbium</option>
                                <option value="40">Copper</option>
                                <option value="41">Molybdenum</option>
                                <option value="42">Silver</option>
                                <option value="43">Lead</option>
                                <option value="44">Tantalum</option>
                                <option value="45">Tungsten</option>
                                <option value="46">Gold</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td><strong>Shape:</strong></td>
                            <td>
                              <select className="wpcf7-text" style={{ width: '100%' }} value={formType} onChange={handleFormChange}>
                                <option value="Round">Round</option>
                                <option value="Square">Square</option>
                                <option value="Hexagonal">Hexagonal</option>
                                <option value="Octagonal">Octagonal</option>
                                <option value="Sheet">Sheet</option>
                                <option value="Plate">Plate</option>
                                <option value="Flat">Flat</option>
                                <option value="Tubular">Tubular</option>
                                <option value="Circular">Circular</option>
                                <option value="Ring">Ring</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td><strong>Number of Pieces:</strong></td>
                            <td>
                              <input type="number" className="wpcf7-text" value={pieces} onChange={e => setPieces(e.target.value)} style={{ width: '100%' }} />
                            </td>
                          </tr>
                          {l1 && (
                            <tr>
                              <td>{l1}</td>
                              <td style={{ display: 'flex', gap: '10px' }}>
                                <input type="text" className="wpcf7-text" value={param1} onChange={e => setParam1(e.target.value)} style={{ flex: 1 }} />
                                <select className="wpcf7-text" value={units1} onChange={e => setUnits1(e.target.value)} style={{ width: '80px' }}>
                                  <option value="in">in</option>
                                  <option value="ft">ft</option>
                                  <option value="yd">yd</option>
                                  <option value="mm">mm</option>
                                  <option value="cm">cm</option>
                                  <option value="m">m</option>
                                </select>
                              </td>
                            </tr>
                          )}
                          {l2 && (
                            <tr>
                              <td>{l2}</td>
                              <td style={{ display: 'flex', gap: '10px' }}>
                                <input type="text" className="wpcf7-text" value={param2} onChange={e => setParam2(e.target.value)} style={{ flex: 1 }} />
                                <select className="wpcf7-text" value={units2} onChange={e => setUnits2(e.target.value)} style={{ width: '80px' }}>
                                  <option value="in">in</option>
                                  <option value="ft">ft</option>
                                  <option value="yd">yd</option>
                                  <option value="mm">mm</option>
                                  <option value="cm">cm</option>
                                  <option value="m">m</option>
                                </select>
                              </td>
                            </tr>
                          )}
                          {l3 && (
                            <tr>
                              <td>{l3}</td>
                              <td style={{ display: 'flex', gap: '10px' }}>
                                <input type="text" className="wpcf7-text" value={param3} onChange={e => setParam3(e.target.value)} style={{ flex: 1 }} />
                                <select className="wpcf7-text" value={units3} onChange={e => setUnits3(e.target.value)} style={{ width: '80px' }}>
                                  <option value="in">in</option>
                                  <option value="ft">ft</option>
                                  <option value="yd">yd</option>
                                  <option value="mm">mm</option>
                                  <option value="cm">cm</option>
                                  <option value="m">m</option>
                                </select>
                              </td>
                            </tr>
                          )}
                          <tr>
                            <td><strong>Calculated Weight (Kgs):</strong></td>
                            <td>
                              <input type="text" className="wpcf7-text" readOnly value={result} style={{ width: '100%', background: '#eaeaea', fontWeight: 'bold' }} />
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="2" style={{ textAlign: 'right' }}>
                              <button type="button" className="hsc-submit" onClick={handleClear} style={{ background: 'var(--color-steel-dark)', color: '#fff', marginRight: '10px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Reset</button>
                              <button type="submit" className="hsc-submit" style={{ padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Calculate</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
