import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import Industries from '../../components/Industries';
import ThirdPartyInspection from '../../components/ThirdPartyInspection';
import { productCategories } from '../../data/products';

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

                      <Link to="/pipes-tubes"><img src="/img/special/pipes-tubes.png" alt="Pipes & Tubes" title="Pipes & Tubes" style={{aspectRatio: '4/3', objectFit: 'cover'}}/></Link>

                    </article>


                    <article className="grid_4">

                      <Link to="/nickel-alloy-catalogue" target="_blank" rel="noopener noreferrer"><img src="/img/special/nickel-catalogue.png" alt="Nickel Alloy Catalogue" title="Nickel Alloy Catalogue" style={{aspectRatio: '4/3', objectFit: 'cover'}} /></Link>

                    </article>


                    <article className="grid_4 right">

                      <Link to="/flanges"><img src="/img/special/flanges.png" alt="Flanges" title="Flanges" style={{aspectRatio: '4/3', objectFit: 'cover'}} /></Link>

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
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px', width: '100%' }}>
                {productCategories.slice(0, 8).map((cat, i) => (
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
          </div>
        </section>

        <section className="page-content" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="row">
              <div className="grid_12" style={{marginTop: '40px'}}>
                <Industries />
                <div style={{marginTop: '40px'}}>
                  <ThirdPartyInspection />
                </div>
              </div>
            </div>
          </div>
        </section>        <a href="https://wa.me/919820976537?text=I%20want%20to%20enquire%20about" className="float" target="_blank">
          <i className="fa-brands fa-whatsapp"></i>

        </a>



      </section>




      




























    </>
  );
}
