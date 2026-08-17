import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import Industries from '../../components/Industries';
import ThirdPartyInspection from '../../components/ThirdPartyInspection';

export default function Home() {
  return (
    <>
      <section id="page-wrapper" className="clearfix">

        <Slider />


        <section className="page-content background-black">

          <div className="container">

            <div className="row">
              <article className="grid_12">
                <div className="triggerAnimation animated" data-animate="fadeInUp">
                  <div className="note no-bottom-margin" style={{ textAlign: 'center', padding: '15px 20px' }}>
                    <h5 style={{ fontWeight: 400, color: '#000', fontSize: '1.1rem', marginBottom: '8px' }}>India’s trusted stockist & exporter — <strong style={{ fontWeight: 600, color: '#000' }}>Siyak Steel International</strong> ships certified steel & alloys to 40+ countries.</h5>
                    <h2 style={{ "color": "#000", "fontWeight": "700", "fontSize": "1.25rem", "letterSpacing": "0.05em" }} className="uppercase">“TRUSTED STOCKS • ON-TIME SHIPMENTS • EVERY TIME”</h2>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>



        <div className="clrspace"></div>



        <section className="page-content">
          <div className="container">

            <div className="row">


              <div className="grid_12"><div className="heading-bordered"><h3>WHY US</h3></div>
              </div>
              <div className="grid_3"><img src="img/why-choose-us.jpg" alt="Why Us" title="Why Us" /></div>
              <div className="grid_9" style={{ color: '#000' }}>
  <p className="mb-6" style={{ marginBottom: '24px' }}>
    Founded by Mr. Narpat Siyak, Siyak Steel International is an ISO 9001:2015 certified manufacturer, stockist and exporter of ferrous & non-ferrous metal products — pipes, tubes, flanges, fittings, sheets, plates, bars and fasteners — trusted across 40+ countries.
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '24px' }}>
    <div>
      <strong>Largest Inventory</strong><br />
      Delivering world-class capabilities locally to help customers grow and meet their industry needs.
    </div>
    <div>
      <strong>Quality Assurance</strong><br />
      Our system ensures only the finest quality materials are used, guided by a culture of respect.
    </div>
    <div>
      <strong>Product Sourcing & Packaging</strong><br />
      We engage early in the supply chain to bring enormous benefits and value in direct materials.
    </div>
    <div>
      <strong>Third Party Inspection</strong><br />
      Strict vigilance with test certificates and reports attached to every piece to ensure top quality.
    </div>
    <div>
      <strong>Quick Delivery</strong><br />
      Stringent quality control guarantees accurate dimensions and timely deliveries as required.
    </div>
    <div>
      <strong>Customer Support</strong><br />
      We build strong customer relationships by employing and training dedicated local workforces.
    </div>
  </div>

  <Link to="/about-us" className=" button btn-medium black" style={{"float":"right"}}>read more</Link>
</div>

            </div>
            <div className="clear"></div>




            <section className="page-content parallax ">

              <div className="container">

                <div className="row">
                  <section className="grid_12">
                    <div className="box-pro1" style={{ "background": "#005d65" }}>
                      <div className="bphead">OUR SPECIAL PRODUCTS</div>
                    </div>
                  </section>
                </div>
                <br />
                <br />


                <div className="grid_12">
                  <div className="row">

                    <article className="grid_4">

                      <Link to="/pipes-tubes"><img src="img/products/stainless-steel-pipes-tubes.webp" alt="Stainless Steel Pipes & Tubes" title="Stainless Steel Pipes & Tubes" style={{aspectRatio: '4/3', objectFit: 'cover'}}/></Link>

                    </article>


                    <article className="grid_4">

                      <Link to="/nickel-alloy-catalogue" target="_blank"><img src="img/products/nickel-alloy-plates-sheets.webp" alt="Nickel Alloy Products" title="Nickel Alloy Products Exporter" style={{aspectRatio: '4/3', objectFit: 'cover'}} /></Link>

                    </article>


                    <article className="grid_4 right">

                      <Link to="/pipes-tubes"><img src="img/products/copper-alloy-pipes-tubes.webp" alt="Copper Alloy Pipes & Tubes" title="Copper Alloy Pipes & Tubes" style={{aspectRatio: '4/3', objectFit: 'cover'}} /></Link>

                    </article>
                  </div>
                </div>
              </div>
            </section>























          </div>

        </section>



        <section className="page-content">
          <div className="container">

            <div className="row">
                <section className="grid_12">
                  <div className="box-pro1" style={{ "background": "#005d65" }}>
                    <div className="bphead">OUR PRODUCTS</div>
                  </div>
                </section>

              <div className="clear"></div>
              <div className="clrspace40"></div>

              <div className="grid_12 products-grid-row">
                <div className="grid_4">
                  <div className="masobox">
                    <div className="imgt"> <img src="img/products/stainless-steel-pipes-tubes.webp" alt="Pipes &amp; Tubes Supplier" title="Pipes &amp; Tubes Exporter" style={{aspectRatio: '4/3', objectFit: 'cover', width: '100%'}}/></div>
                    <div className="clear"></div>
                    <div className="content-maso">
                      <div className="heading-link"><Link to="/pipes-tubes">Pipes &amp; Tubes<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px" }}></i> <br />
                        <br />
                        <span className="spant">We are a well-known manufacturer of steel pipes and tubes that are available in varied grades of stainless steel, carbon steel &amp; nickel alloys. Our pipes and tubes are engineered for precision and durability in demanding industrial environments.</span></Link></div>
                    </div>
                  </div>
                  <div className="masobox2">
                    <div className="imgt"> <img src="img/products/stainless-steel-flanges.webp" alt="Pipe Flanges Exporter" title="Pipe Flanges Exporter" style={{aspectRatio: '4/3', objectFit: 'cover', width: '100%'}}/></div>
                    <div className="clear"></div>
                    <div className="content-maso">
                      <div className="heading-link"><Link to="/flanges">Flanges<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "fontWeight": "300", "marginRight": "0px" }}></i> <br />
                        <br />
                        <span className="spant">We offer stainless steel flanges in various specifications and configurations.<br />
                          <br />
                          Forms : Slip on, socket weld, blind, lapped, screwed, weld neck, reducing, spectacle, slip on boss, plate.<br />
                        </span></Link></div>
                    </div>
                  </div>
                  <div className="masobox">
                    <div className="imgt"> <img src="img/products/stainless-fasteners.webp" alt="Fasteners Supplier" title="Fasteners Exporter" style={{aspectRatio: '4/3', objectFit: 'cover', width: '100%'}}/></div>
                    <div className="clear"></div>
                    <div className="content-maso">
                      <div className="heading-link"><Link to="/fasteners">Fasteners<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px" }}></i> <br />
                        <br />
                        <span className="spant">We design quality fasteners for critical machine applications and desired results.<br />
                          <br />
                          Forms: Stud Bolts, Hex Bolts, Square Bolts, Hex Nuts, T-Head Bolts, Structural Bolts, U-Bolts, Foundation Bolts, As per drawing and customers specifications.</span></Link></div>
                    </div>
                  </div>
                </div>
                <div className="grid_4">
                  <div className="masobox2">
                    <div className="imgt"> <img src="img/products/carbon-steel-plates-sheets.webp" alt="Sheets, Plates &amp; Coils Exporter" title="Sheets, Plates &amp; Coils Supplier" style={{aspectRatio: '4/3', objectFit: 'cover', width: '100%'}}/></div>
                    <div className="clear"></div>
                    <div className="content-maso">
                      <div className="heading-link"><Link to="/sheets-plates">Sheets, Plates &amp; Coils<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "fontWeight": "300", "marginRight": "0px" }}></i> <br />
                        <br />
                        <span className="spant">We have been offering to our clients a vast range of Sheets and Coils that are offered in various specifications to our clients. <br />
                          <br />
                          Range: 0.5 mm To 200 mm thick in 1000 mm To 3000 mm width &amp; 2500 mm To 12500 mm length available with NACE MR 01-75.</span></Link></div>
                    </div>
                  </div>
                  <div className="masobox">
                    <div className="imgt"> <img src="img/products/stainless-butt-weld.webp" alt="Butt weld Pipe Fittings Supplier" title="Butt weld Pipe Fittings Manufacturer" style={{aspectRatio: '4/3', objectFit: 'cover', width: '100%'}}/></div>
                    <div className="clear"></div>
                    <div className="content-maso">
                      <div className="heading-link"><Link to="/buttweld-fittings">Buttweld Fittings<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px" }}></i> <br />
                        <br />
                        <span className="spant">We offer high quality butt weld fittings for different industrial requirements. Available in stainless steel, duplex, and nickel alloys, ensuring leak-proof connections.</span></Link></div>
                    </div>
                  </div>
                  <div className="masobox2">
                    <div className="imgt"> <img src="img/products/stainless-forged-fittings.webp" alt="Forged Fittings Exporter" title="Forged Fittings Supplier" style={{aspectRatio: '4/3', objectFit: 'cover', width: '100%'}}/></div>
                    <div className="clear"></div>
                    <div className="content-maso">
                      <div className="heading-link"><Link to="/socketweld-fittings">Forged Fittings<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px" }}></i> <br />
                        <br />
                        <span className="spant">We offer to our clients specially designed forged pipe fittings.<br />
                          <br />
                          TYPES: Elbow, Tee, Union, Cross, Coup Bushing, Plug, Swage Nipple, Welding Boss, Hexagon Nipple, Barrel Nipple, Welding Nipple, Parraler Nipple, etc.</span></Link></div>
                    </div>
                  </div>
                </div>
                <div className="grid_4">
                  <div className="masobox">
                    <div className="imgt"> <img src="img/products/alloy-steel-bar.webp" alt="Round Bars &amp; Rods Exporter" title="Round Bars &amp; Rods Supplier" style={{aspectRatio: '4/3', objectFit: 'cover', width: '100%'}}/></div>
                    <div className="clear"></div>
                    <div className="content-maso">
                      <div className="heading-link"><Link to="/round-bars">Round Bars<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px" }}></i> <br />
                        <br />
                        <span className="spant">We are offering a wide range of Round Bars that are available in varied grades of stainless steel, carbon steel, nickel alloys &amp; alloy steel.<br />
                          <br />
                          Types: Round, Square, Hexagonal, Rectangular</span></Link></div>
                    </div>
                  </div>
                  <div className=" masobox2">
                    <div className="imgt"> <img src="img/products/angles-channels.webp" alt="Angels Channels Exporter" title="Angles Channels Supplier" style={{aspectRatio: '4/3', objectFit: 'cover', width: '100%'}}/></div>
                    <div className="clear"></div>
                    <div className="content-maso">
                      <div className="heading-link"><Link to="/angles-channels">Angles &amp; Channels<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px" }}></i> <br />
                        <br />
                        <span className="spant">Using High grade and superior quality raw materials, we provide an extensive range of stainless steel Angles and Flats designed for structural applications and maximum stability.</span> </Link></div>
                    </div>
                  </div>
                  <div className="masobox">
                    <div className="imgt"> <img src="img/products/valves.webp" alt="Valves Exporter" title="Valves Supplier" style={{aspectRatio: '4/3', objectFit: 'cover', width: '100%'}}/></div>
                    <div className="clear"></div>
                    <div className="content-maso">
                      <div className="heading-link"><Link to="/valves">Valves<i className="icon icon-arrow-right-3" style={{ "float": "right", "fontSize": "28px", "marginRight": "0px" }}></i> <br />
                        <br />
                        <span className="spant">Siyak Steel International would like to introduce ourselves as one of the Leading Industrial Valves Exporter. We supply Ball, Gate, Globe, Check, Automatic Control Valves, and High Pressure Valves.</span></Link></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid_12" style={{marginTop: '40px'}}>
                <Industries />
                <div style={{marginTop: '40px'}}>
                  <ThirdPartyInspection />
                </div>
              </div>



            </div>












          </div>
        </section>












        <a href="https://wa.me/919820976537?text=I%20want%20to%20enquire%20about" className="float" target="_blank">
          <i className="fa-brands fa-whatsapp"></i>

        </a>



      </section>




      <div className="popup-wrapper" id="popup">
        <div className="popup-container">
          <form action="download.php" method="post" className="popup-form">
            <h3>Download Catalogue</h3>
            <p>To Download Our Corporate Brochure please fill below details.</p>
            <div className="input-group">
              <p><input type="name" name="name" placeholder="Full Name" /></p>
              <p><input type="email" name="email" placeholder="Email Address" /></p>
              <p><input type="contact" name="contact" placeholder="Contact No." /></p>
              <p><textarea name="comments" id="comments" cols="82" rows="5" placeholder="Comments"></textarea></p>
              <p>      </p><div className="g-recaptcha" data-sitekey="6LeZ2cwUAAAAAEqjldz__1uhQdNQoybLdrfd5DJO"></div><p></p>


              <p>

                <input type="submit" value="Submit" name="jetpack_subscriptions_widget" />
              </p>
            </div>
          </form>
          <a className="popup-close" href="#closed">X</a>
        </div>
      </div>




























    </>
  );
}
