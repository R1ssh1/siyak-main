import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../../data/products';

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
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

    if (!endpoint) {
      window.location.href = `mailto:${companyInfo?.emails?.[0] || 'info@siyaksteel.com'}?subject=${encodeURIComponent(`Enquiry from ${form.name}`)}&body=${encodeURIComponent(`Company: ${form.company_name}\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message}`)}`;
      setStatus({ loading: false, success: true, error: "" });
      
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: "" });
        setForm({ company_name: "", name: "", email: "", phone: "", message: "" });
      }, 3000);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _subject: `Enquiry from ${form.name}`, _redirect: window.location.href }),
      });
      if (!response.ok) throw new Error("Failed to submit form.");
      setStatus({ loading: false, success: true, error: "" });
      
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: "" });
        setForm({ company_name: "", name: "", email: "", phone: "", message: "" });
      }, 3000);
    } catch (error) {
      setStatus({ loading: false, success: false, error: "Unable to send your request right now. Please try again later." });
    }
  };

  return (
    <>
      
            
             
            

            
            <section id="page-title-enquiry" className="page-title-1 " data-stellar-background-ratio="0.3">
            
                <div className="container">
                    <div className="row">
                    <div className="grid_9">
                    <div className="pt-box">
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
        <li><Link to="/pipes-tubes">Pipes &amp; Tubes</Link></li>
        <li><Link to="/sheets-plates">Sheets &amp; Plates</Link></li>
        <li><Link to="/round-bars">Round Bars</Link></li>
        <li><Link to="/flanges">Flanges</Link></li>
        <li><Link to="/buttweld-fittings">Buttweld Fittings</Link></li>
        <li><Link to="/socketweld-fittings">Socketweld Fittings</Link></li>
        <li><Link to="/fasteners">Fasteners</Link></li>
        <li><Link to="/refractory-fixings-anchors">Refractory Fixings &amp; Anchors</Link></li>
        <li><Link to="/angles-channels">Angles &amp; Channels</Link></li>
        <li><Link to="/tube-sheet">Tube Sheets</Link></li>
        <li><Link to="/ferrule-fittings">Ferrule Fittings</Link></li>
        <li><Link to="/cladded-plates">Cladded Plates</Link></li>
        <li><Link to="/olets">Olets</Link></li>
        <li><Link to="/valves">Valves</Link></li>
</ul>  
      </li>
  </ul>
 
                            
                                 
                        </aside>

                        
                        <article className="grid_6 triggerAnimation animated" data-animate="fadeInRight">
                           

                           
                                                      

                           
                            
                            <section className="heading-bordered">
                                <h3>Make An Enquiry</h3>
                                
                            </section>
                            <p>Please fill the form below to make an product enquiry. All fields are mandatory</p><br /><br />

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
                </div>
            </section>

            

            
            
  
  <a href="https://wa.me/919820976537?text=I%20want%20to%20enquire%20about" className="float" target="_blank">
     <i className="fa-brands fa-whatsapp"></i>

</a> 

            

                
        
           
         
        
         
        
        
        
        
        
        
        
        
        
       
         
        
		 
         
        
        
        


    


    </>
  );
}
