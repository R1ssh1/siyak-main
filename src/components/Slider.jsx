
import React, { useEffect } from 'react';
export default function Slider() {
  useEffect(() => {
    // Re-initialize Revolution Slider
    setTimeout(() => {
        if (window.jQuery && window.jQuery('.tp-banner').length > 0 && window.jQuery('.tp-banner').revolution) {
            window.jQuery('.tp-banner').show().revolution({
                delay: 5000,
                effect: "slideInRight",
                startwidth: 1200,
                startheight: 350,
                hideThumbs: 10,
                navigationType: "bullet"
            });
        }
    }, 500);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: `<div class="boxedcontainer no-bottom-margin"> 
            
            <div class="tp-banner-fullscreen-container">
                <div class="tp-banner">
                <ul>
                    
                    <li data-transition="fade" data-slotamount="15" data-masterspeed="1500"> 
                     
                    <img src="img/slider/monel-seamless-u-tubes-supplier.jpg" alt="Monel Seamless U Tubes" title="Monel Seamless U Tubes Supplier" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat">
                    <div class="tp-caption background paragraph lfb" data-x="760" data-y="270" data-speed="600" data-start="2000" data-easing="Back.easeOut" data-endspeed="500">
                        <h1>Manufacturer &amp; Exporter of <span class="cap1">Seamless U Tubes</span></h1>
                      </div>
                      </li>
                      
                      
                    <li data-transition="fade" data-slotamount="15" data-masterspeed="1500"> 
                     
                    <img src="img/slider/forgings-products-manufacturer.jpg" alt="Forged Products Supplier" title="Forged Products Manufacturer" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat">
                    <div class="tp-caption background paragraph lfb" data-x="760" data-y="270" data-speed="600" data-start="2000" data-easing="Back.easeOut" data-endspeed="500">
                        <h1>Buy Premium Quality <span class="cap1">Forged Products</span></h1>
                      </div>
                      </li>
                      
                      
                    <li data-transition="fade" data-slotamount="15" data-masterspeed="1500"> 
                     
                    <img src="img/slider/cladded-tubes-sheets-supplier.jpg" alt="Cladded Tube Sheets Supplier" title="Heat Exchanger Tube Sheets Manufacturer" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat">
                    <div class="tp-caption background paragraph lfb" data-x="760" data-y="270" data-speed="600" data-start="2000" data-easing="Back.easeOut" data-endspeed="500">
                        <h1>Manufacturer &amp; Exporter of High Quality <span class="cap1">Cladded Tube Sheets</span></h1>
                      </div>
                      </li>
                      
                    
                    <li data-transition="fade" data-slotamount="15" data-masterspeed="1500"> 
                     
                    <img src="img/slider/vision.jpg" alt="Vision of Neon Alloys" title="Vision of The Future" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat">
                    <div class="tp-caption background paragraph lfb" data-x="760" data-y="270" data-speed="600" data-start="2000" data-easing="Back.easeOut" data-endspeed="500">
                        <h1>Having A <span class="cap1">VISION for BIG ENTERPRISE</span></h1>
                      </div>
                  </li>
                    
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="1500"> 
                     
                    <img src="img/slider/perfection-quality.jpg" alt="Perfection &amp; Quality" title="Best Quality Products" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat"> 
                    
                    <div class="tp-caption background paragraph lfb" data-x="750" data-y="265" data-speed="600" data-start="2000" data-easing="Back.easeOut" data-endspeed="500">
                        <h1>An eagles eye for <span class="cap1">PERFECTION &amp; QUALITY</span></h1>
                      </div>
                    
                     
                  </li>
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="1500"> 
                     
                    <img src="img/slider/excellence-service.jpg" alt="Excellence Service" title="Excellence Service" data-bgfit="cover" data-bgposition="center top" data-bgrepeat="no-repeat"> 
                    
                    
                    <div class="tp-caption background paragraph lfb" data-x="750" data-y="260" data-speed="600" data-start="2000" data-easing="Back.easeOut" data-endspeed="500">
                        <h1>Passion for Excellence &amp; meeting <span class="cap1">CUSTOMER EXPECTATION </span>at any cost</h1>
                      </div>
                  </li>
                    
                    
                    
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="1500"> 
                     
                    <img src="img/slider/customers-requirement.jpg" alt="High Quality Products" title="High Quality Products" data-bgfit="cover" data-bgposition="center top" data-bgrepeat="no-repeat"> 
                    
                    
                    <div class="tp-caption background paragraph lfb" data-x="750" data-y="260" data-speed="600" data-start="2000" data-easing="Back.easeOut" data-endspeed="500">
                        <h1>Though old school thought but listen to <span class="cap1">CUSTOMERS REQUIREMENT</span></h1>
                      </div>
                  </li>
                    
                    
                    
                    
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="1500"> 
                     
                    <img src="img/slider/commitment.jpg" alt="Stand by Commitment" title="Stand by Commitment" data-bgfit="cover" data-bgposition="center top" data-bgrepeat="no-repeat"> 
                    
                    
                    <div class="tp-caption background paragraph lfb" data-x="750" data-y="230" data-speed="600" data-start="2000" data-easing="Back.easeOut" data-endspeed="500">
                        <h1>..And a casual &amp; flexible approach in dealing without loosing the seriousness of <span class="cap1">COMMITTMENTS</span>.</h1>
                      </div>
                  </li>
                  </ul>
              </div>
                 
              </div>
             
          </div>` }} />;
}
