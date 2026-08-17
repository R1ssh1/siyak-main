import React from 'react';
import { Link } from 'react-router-dom';

export default function Enquiry() {
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
        <li><Link to="/graphite-filled-bronze-bushes">Graphite Filled Bronze Bush</Link></li>
		   <li><Link to="/billets-manufacturer-supplier">Billets</Link></li>
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
                                </p><form className="wpcf7" action="" method="post">
                                    <fieldset>
                                        <label htmlFor="company_name">Company Name:</label>
                                        <input type="text" name="company_name" className="wpcf7-text" id="company_name" />
                                    </fieldset>
                                    
                                    <fieldset>
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" name="name" className="wpcf7-text" id="name" />
                                    </fieldset>
                                    
                                    
                                    <fieldset>
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" name="email" id="email" className="wpcf7-text" />
                                    </fieldset>
                                    
                                    <fieldset>
                                        <label htmlFor="phone">Phone Number:</label>
                                        <input type="phone" name="phone" id="phone" className="wpcf7-text" />
                                    </fieldset>                                   
									
                                    
                                    
                                    <fieldset>
                                        <label htmlFor="message">Message:</label>
                                        <textarea rows="5" name="message" className="wpcf7-textarea" id="message"></textarea>
                                    </fieldset>


                                  

                                    <fieldset>
                                       <div className="g-recaptcha" data-sitekey="6LeZ2cwUAAAAAEqjldz__1uhQdNQoybLdrfd5DJO"></div>
                                    </fieldset>    
                                    
                                    
                                    
                                    
                                <input type="hidden" name="submitted" value="1" />        
                                <input type="submit" className="wpcf7-submit" value="Submit" style={{"float":"left"}} />
                                </form><p></p>

                                





                            
			</article>
                    </div>
                </div>
            </section>

            

            
            
  
  <a href="https://wa.me/919820976537?text=I%20want%20to%20enquire%20about" className="float" target="_blank">
     <i className="fa-brands fa-whatsapp"></i>

</a> 

            

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
