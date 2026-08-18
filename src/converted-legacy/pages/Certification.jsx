import React from 'react';
import { Link } from 'react-router-dom';

export default function Certification() {
  return (
    <>
      
        
        
        

        
        <section id="page-title-cert" className="page-title-1 " data-stellar-background-ratio="0.3">

            <div className="container">
                <div className="row">
                    <div className="grid_9">
                        <div className="pt-box">
                            <div className="pt-title triggerAnimation animated" data-animate="fadeInLeft">
                                <h1>Certification</h1>
                                <h4>Commitment to International Standards and Quality Assurance.</h4>
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
                                    <span className="active">Certification</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="page-content">
            <div className="grid_12">
                <section className="heading-bordered">
                    <h3>Certification</h3>
                </section>
            </div>
            
            <div className="container">
                
                <article className="grid_12">

                    

                    <div className="triggerAnimation animated" data-animate="fadeInUp" style={{ padding: '40px 0', textAlign: 'center' }}>
                        <img src="/img/iso-cert.jpeg" alt="ISO 9001:2015 Certification" style={{ height: '120px', marginBottom: '20px', display: 'inline-block' }} />
                        <h2 style={{ color: '#005d65', marginBottom: '20px', fontWeight: 'bold' }}>ISO 9001:2015 Certified Quality Management System</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', lineHeight: '1.8' }}>
                            Siyak Steel operates under a certified ISO 9001:2015 Quality Management System. While we do not display our formal documentation publicly for security reasons, this certification is a testament to our rigorous manufacturing processes, continuous improvement, and dedication to customer satisfaction. We uphold the highest international standards for consistency and reliability in sourcing, manufacturing, and supplying steel products.
                        </p>
                    </div>

                    <div className="clrspace40"></div>

                    <section className="heading-bordered">
                        <h3>What This Means For You</h3>
                    </section>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px', width: '100%', boxSizing: 'border-box' }}>
                        <div style={{ background: '#f9f9f9', borderTop: '4px solid #005d65', padding: '30px' }}>
                            <h4 style={{ color: '#005d65', marginBottom: '15px', fontWeight: 'bold', fontSize: '18px' }}>Consistent Quality</h4>
                            <p style={{ margin: 0 }}>Standardized, rigorously audited processes ensuring every batch of material meets or exceeds international industry benchmarks before dispatch.</p>
                        </div>
                        <div style={{ background: '#f9f9f9', borderTop: '4px solid #005d65', padding: '30px' }}>
                            <h4 style={{ color: '#005d65', marginBottom: '15px', fontWeight: 'bold', fontSize: '18px' }}>Full Traceability</h4>
                            <p style={{ margin: 0 }}>Complete, transparent documentation spanning from raw material sourcing to final delivery, including comprehensive test reporting for all supplied materials.</p>
                        </div>
                        <div style={{ background: '#f9f9f9', borderTop: '4px solid #005d65', padding: '30px' }}>
                            <h4 style={{ color: '#005d65', marginBottom: '15px', fontWeight: 'bold', fontSize: '18px' }}>Customer Focus</h4>
                            <p style={{ margin: 0 }}>A dedicated, agile management system designed to continuously adapt, improve, and consistently exceed client expectations globally.</p>
                        </div>
                    </div>

                </article>
                
            </div>
        </section>


        <div className="clrspace50"></div>

        
        
  
  <a href="https://wa.me/919820976537?text=I%20want%20to%20enquire%20about" className="float" target="_blank">
     <i className="fa-brands fa-whatsapp"></i>

</a> 

        
        
           
         
        
         
        
        
        
        
        
        
        
        
        
       
         
        
		 
         
        
        
        





    </>
  );
}
