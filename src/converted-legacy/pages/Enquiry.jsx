import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExportCalloutBanner from '../../components/ExportCalloutBanner';
import { companyInfo } from '../../data/products';

import SEO from '../../components/SEO';
import { OrganizationLd, WebPageLd, BreadcrumbLd } from '../../components/JsonLd';
import { absoluteUrl } from '../../lib/site';
export default function Enquiry() {
  const [form, setForm] = useState({ company_name: "", name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });
  const [botField, setBotField] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ loading: false, success: false, error: "Please complete name, email, and message fields." });
      return;
    }
    if (!isValidEmail(form.email)) {
      setStatus({ loading: false, success: false, error: "Please enter a valid email address." });
      return;
    }
    if (botField) {
      return;
    }

    setStatus({ loading: true, success: false, error: "" });
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
          "Accept": "application/json" 
        },
        body: JSON.stringify({
          access_key: "0e9b7141-66e9-42e5-9fb9-8c055b27c871",
          subject: `Enquiry from ${form.name} via Siyak Steel Website`,
          company_name: form.company_name,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message
        }),
      });
      
      const result = await response.json();
      
      if (response.status === 200) {
        setStatus({ loading: false, success: true, error: "" });
        setTimeout(() => {
          setStatus({ loading: false, success: false, error: "" });
          setForm({ company_name: "", name: "", email: "", phone: "", message: "" });
        }, 3000);
      } else {
        throw new Error(result.message || "Failed to submit form.");
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message || "Unable to send your request right now. Please try again later." });
    }
  };

  return (
    <>
      <SEO
        description="Submit a product enquiry to Siyak Steel International. We supply pipes, tubes, flanges, fittings and bars globally. Get a fast quote from our Mumbai office."
        keywords="steel enquiry india, steel pipe quote, siyak steel enquiry"
      />
      <OrganizationLd />
      <WebPageLd url={absoluteUrl('/enquiry')} description="Submit a product enquiry to Siyak Steel International. We supply pipes, tubes, flanges, fittings and bars globally. Get a fast quote from our Mumbai office." />
      
            
             
            

            
            <section id="page-title-enquiry" className="page-title-1 " data-stellar-background-ratio="0.3">
            
                <div className="container">
                    <div className="row">
                    <div className="grid_9">
                    <div className="pt-box" style={{ backgroundColor: 'rgba(29, 140, 160, 0.86)' }}>
                            <div className="pt-title triggerAnimation animated" data-animate="fadeInLeft">
                                <h1><span className="strong">Send An Enquiry</span></h1>
                                <h4>Are you looking for some more information? <br />
Enquire when you have question.<br />

We are sure your search will be end here.</h4>
</div>
                            </div>
                        </div>

                        
                        
                    </div>

                    <div className="row">
                        <div className="grid_8">
                            <div className="breadcrumbs triggerAnimation animated" data-animate="fadeInUp">
                                <ul>
                                    <li>
                                        <span>You are here:</span>
                                    </li>

                                    <li>
                                        <Link to="/">Home / </Link>
                                    </li>

                                    <li>
                                        <span className="active">Enquiry</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="page-content">

                
                <div className="container">

                    
                    <div className="row">
                        
                        <aside className="grid_3  aside-right triggerAnimation animated" data-animate="fadeInLeft">
							<div className="clrspace"></div>
                            
                            
                             

 




 

 
  

 

 

 

 




 


 

 


 

 

 

 

 

 
  
    
 




  <ul className="aside_widgets"> 
    <li className="widget widget_productlist ">
      <h2>Product Range</h2>
       <ul className="">
        <li><Link to="/pipes-tubes-stockist-supplier-exporter-in-mumbai-india">Pipes &amp; Tubes</Link></li>
        <li><Link to="/sheets-plates-stockist-supplier-exporter-in-mumbai-india">Sheets &amp; Plates</Link></li>
        <li><Link to="/round-bars-stockist-supplier-exporter-in-mumbai-india">Round Bars</Link></li>
        <li><Link to="/flanges-stockist-supplier-exporter-in-mumbai-india">Flanges</Link></li>
        <li><Link to="/buttweld-fittings-stockist-supplier-exporter-in-mumbai-india">Buttweld Fittings</Link></li>
        <li><Link to="/socketweld-fittings-stockist-supplier-exporter-in-mumbai-india">Socketweld Fittings</Link></li>
        <li><Link to="/fasteners-stockist-supplier-exporter-in-mumbai-india">Fasteners</Link></li>
        <li><Link to="/refractory-fixings-anchors-manufacturer-supplier-exporter-in-mumbai-india">Refractory Fixings &amp; Anchors</Link></li>
        <li><Link to="/angles-channels-stockist-supplier-exporter-in-mumbai-india">Angles &amp; Channels</Link></li>
        <li><Link to="/tube-sheet-manufacturer-supplier-exporter-in-mumbai-india">Tube Sheets</Link></li>
        <li><Link to="/ferrule-fittings-stockist-supplier-exporter-in-mumbai-india">Ferrule Fittings</Link></li>
        <li><Link to="/cladded-plates-manufacturer-supplier-exporter-in-mumbai-india">Cladded Plates</Link></li>
        <li><Link to="/olets-stockist-supplier-exporter-in-mumbai-india">Olets</Link></li>
        <li><Link to="/valves-stockist-supplier-exporter-in-mumbai-india">Valves</Link></li>
        <li><Link to="/perforated-sheets-manufacturer-supplier-exporter-in-mumbai-india">Perforated Sheets</Link></li>
        <li><Link to="/wire-mesh-manufacturer-supplier-exporter-in-mumbai-india">Wire Mesh</Link></li>
        <li><Link to="/nickel-alloy-products-manufacturer-exporter-in-mumbai-india">Nickel Products</Link></li>
</ul>  
      </li>
  </ul>
 
                            
                                 
                        </aside>

                        
                        <article className="grid_9 triggerAnimation animated" data-animate="fadeInRight">
                           

                           
                                                      

                           
                            
                            <section className="heading-bordered">
                                <h3>Make An Enquiry</h3>
                                
                            </section>
                            <p>Please fill the form below to make a product enquiry. Fields marked with <strong>*</strong> are mandatory.</p><br /><br />

                            <p>
                                </p><form className="wpcf7" onSubmit={handleSubmit}>
                                    <input type="text" name="botField" value={botField} onChange={(e) => setBotField(e.target.value)} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                                    
                                    <fieldset>
                                        <label htmlFor="company_name">Company Name:</label>
                                        <input type="text" name="company_name" value={form.company_name} onChange={handleChange} className="wpcf7-text" id="company_name" />
                                    </fieldset>
                                    
                                    <fieldset>
                                        <label htmlFor="name">Name *:</label>
                                        <input type="text" name="name" value={form.name} onChange={handleChange} className="wpcf7-text" id="name" />
                                    </fieldset>
                                    
                                    <fieldset>
                                        <label htmlFor="email">Email *:</label>
                                        <input type="email" name="email" value={form.email} onChange={handleChange} id="email" className="wpcf7-text" />
                                    </fieldset>
                                    
                                    <fieldset>
                                        <label htmlFor="phone">Phone Number:</label>
                                        <input type="phone" name="phone" value={form.phone} onChange={handleChange} id="phone" className="wpcf7-text" />
                                    </fieldset>                                   
                                    
                                    <fieldset>
                                        <label htmlFor="message">Message *:</label>
                                        <textarea rows="5" name="message" value={form.message} onChange={handleChange} className="wpcf7-textarea" id="message"></textarea>
                                    </fieldset>

                                    {status.error && <p style={{ color: 'red' }}>{status.error}</p>}
                                    {status.success && <p style={{ color: '#005d65' }}>Your enquiry was sent successfully!</p>}
                                    
                                    <input type="submit" className="wpcf7-submit" value={status.loading ? "Sending..." : "Submit"} disabled={status.loading} style={{"float":"left"}} />
                                </form><p></p>

                                





                            
			</article>
                    </div>

                    <div className="row">
                        <div className="grid_12">
                            <ExportCalloutBanner style={{ marginTop: '30px', marginBottom: '20px' }} />
                        </div>
                    </div>
                </div>
            </section>

            

            
            
  
  <a href="https://wa.me/919820976537?text=I%20want%20to%20enquire%20about" className="float" target="_blank">
     <i className="fa-brands fa-whatsapp"></i>

</a> 

            

                
        
           
         
        
         
        
        
        
        
        
        
        
        
        
       
         
        
		 
         
        
        
        


    


    </>
  );
}
