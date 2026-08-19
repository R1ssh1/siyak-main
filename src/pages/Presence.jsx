
import React, { useEffect } from 'react';

export default function Presence() {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        // If it's already loaded, resolve immediately
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    loadScript('/js/ammap.js')
      .then(() => loadScript('/js/worldLow.js'))
      .then(() => loadScript('/js/map-new.js'))
      .catch(console.error);

    return () => {
      // Cleanup map instance if it exists to prevent memory leaks when unmounting
      if (window.map && typeof window.map.clear === 'function') {
        window.map.clear();
      }
    };
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
            
            
            

            
            <section id="page-title-presence" class="page-title-1 " data-stellar-background-ratio="0.3">
            
                <div class="container">
                    <div class="row">
                    <div class="grid_9">
                    <div class="pt-box">
                            <div class="pt-title triggerAnimation animated" data-animate="fadeInLeft">
                                <h1>We are <span class="strong">SIYAK STEEL</span></h1>
                                <h4>Aiming for bigger footprint <br>
accorss the globe</h4>
</div>
                            </div>
                        </div>

                        
                        
                    </div>

                    <div class="row">
                        <div class="grid_8">
                            <div class="breadcrumbs triggerAnimation animated" data-animate="fadeInUp">
                                <ul>
                                    <li>
                                        <span>You are here:</span>
                                    </li>

                                    <li>
                                        <a href="index.php">Home / </a>
                                    </li>

                                    <li>
                                        <span class="active">About Us/Presence</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section class="page-content">

                
                <div class="container">

                    
                    <div class="row">
                        
                        <aside class="grid_3  aside-right triggerAnimation animated" data-animate="fadeInLeft">
							<div class="clrspace"></div>
                            
                             

 




 

 
  

 

 

 

 




 


 

 


 

 

 

 

 

 
  
    
 




  <ul class="aside_widgets"> 
    <li class="widget widget_productlist ">
      <h2>Product Range</h2>
       <ul class="">
        <li><a href="pipes-tubes.php">Pipes &amp; Tubes</a></li>
        <li><a href="sheets-plates.php">Sheets &amp; Plates</a></li>
        <li><a href="round-bars.php">Round Bars</a></li>
        <li><a href="flanges.php">Flanges</a></li>
        <li><a href="buttweld-fittings.php">Buttweld Fittings</a></li>
        <li><a href="socketweld-fittings.php">Socketweld Fittings</a></li>
        <li><a href="fasteners.php">Fasteners</a></li>
        <li><a href="refractory-fixings-anchors.php">Refractory Fixings &amp; Anchors</a></li>
        <li><a href="angles-channels.php">Angles &amp; Channels</a></li>
        <li><a href="tube-sheet.php">Tube Sheets</a></li>
        <li><a href="ferrule-fittings.php">Ferrule Fittings</a></li>
        <li><a href="cladded-plates.php">Cladded Plates</a></li>
        <li><a href="olets.php">Olets</a></li>
        <li><a href="valves.php">Valves</a></li>
        <li><a href="graphite-filled-bronze-bushes.php">Graphite Filled Bronze Bush</a></li>
		   <li><a href="billets-manufacturer-supplier.php">Billets</a></li>
      </ul>  
      </li>
  </ul>
 
                             
                               
                        </aside>

                        
                        <article class="grid_9 triggerAnimation animated" data-animate="fadeInRight">
                           

                            
                            <section class="heading-bordered">
                                <h3>Presence</h3>
                            </section>
					
                    
                

<div id="chartdiv"></div>									

                    
                    
                            
                            

                             
                            
			</article>
                    </div>
                </div>
            </section>

          

           

            
            
  
  <a href="https://wa.me/919833461810?text=I%20want%20to%20enquire%20about" class="float" target="_blank">
     <i class="fa-brands fa-whatsapp"></i>

</a> 

            

        </div>

        


<div class="popup-wrapper" id="popup">
	<div class="popup-container">
		<form action="download.php" method="post" class="popup-form">
			<h3>Download Catalogue</h3>
			<p>To Download Our Corporate Brochure please fill below details.</p>
			<div class="input-group">
            <p><input type="name" name="name" placeholder="Full Name"></p>
				<p><input type="email" name="email" placeholder="Email Address"></p>
                <p><input type="contact" name="contact" placeholder="Contact No."></p>
                <p><textarea name="comments" id="comments" cols="82" rows="5" placeholder="Comments"></textarea></p>
                <p>      </p><div class="g-recaptcha" data-sitekey="6LeZ2cwUAAAAAEqjldz__1uhQdNQoybLdrfd5DJO"></div><p></p>


				<p> 
				 
				<input type="submit" value="Submit" name="jetpack_subscriptions_widget">
				</p>
			</div>
		</form>
		<a class="popup-close" href="#closed">X</a>
	</div>
</div>        
        
           
         
        
         
        
        
        
        
        
        
        
        
        
       
         
        
		 
         
        
        
        

       
     
        
   

        
        
        
        
    

` }} />
    </>
  );
}
