import React from 'react';
import { Link } from 'react-router-dom';

import SEO from '../../components/SEO';
import { OrganizationLd, WebPageLd, BreadcrumbLd } from '../../components/JsonLd';
import { absoluteUrl } from '../../lib/site';
export default function Presence() {
  return (
    <>
      <SEO
        title="Global Presence"
        description="Siyak Steel International exports to UAE, Saudi Arabia, Bahrain, Kuwait, Singapore, Malaysia, Indonesia, South Africa and the USA from Mumbai, India."
        keywords="steel exporter UAE, steel supplier Saudi Arabia, global steel supplier india"
      />
      <OrganizationLd />
      <WebPageLd url={absoluteUrl('/presence')} title="Global Presence" description="Siyak Steel International exports to UAE, Saudi Arabia, Bahrain, Kuwait, Singapore, Malaysia, Indonesia, South Africa and the USA from Mumbai, India." />
      
            
            
            

            
            <section id="page-title-presence" className="page-title-1 " data-stellar-background-ratio="0.3">
            
                <div className="container">
                    <div className="row">
                    <div className="grid_9">
                    <div className="pt-box">
                            <div className="pt-title triggerAnimation animated" data-animate="fadeInLeft">
                                <h1>We are <span className="strong">SIYAK STEEL</span></h1>
                                <h4>Aiming for bigger footprint <br />
accorss the globe</h4>
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
                                        <span className="active">About Us/Presence</span>
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
</ul>  
      </li>
  </ul>
 
                             
                               
                        </aside>

                        
                        <article className="grid_9 triggerAnimation animated" data-animate="fadeInRight">
                           

                            
                            <section className="heading-bordered">
                                <h3>Presence</h3>
                            </section>
					
                    
                

<div id="chartdiv"></div>									

                    
                    
                            
                            

                             
                            
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
