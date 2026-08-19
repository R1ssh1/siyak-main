import React from 'react';
import { Link } from 'react-router-dom';
import ExportCalloutBanner from '../../components/ExportCalloutBanner';

import SEO from '../../components/SEO';
import { OrganizationLd, WebPageLd, BreadcrumbLd } from '../../components/JsonLd';
import { absoluteUrl } from '../../lib/site';
export default function Contact() {
  return (
    <>
      <SEO
        description="Contact Siyak Steel International, Mumbai. Reach our head office, warehouse or overseas representative in Saudi Arabia. Email, phone and map included."
        keywords="contact siyak steel, steel supplier mumbai contact, steel exporter contact india"
      />
      <OrganizationLd />
      <WebPageLd url={absoluteUrl('/contact')} description="Contact Siyak Steel International, Mumbai. Reach our head office, warehouse or overseas representative in Saudi Arabia. Email, phone and map included." />
      <section id="page-title-enquiry" className="page-title-1" data-stellar-background-ratio="0.3">
        <div className="container">
          <div className="row">
            <div className="grid_9">
              <div className="pt-box" style={{ backgroundColor: 'rgba(29, 140, 160, 0.86)' }}>
                <div className="pt-title triggerAnimation animated" data-animate="fadeInLeft">
                  <h1><span className="strong">Contact Us</span></h1>
                  <h4>Are you looking for some more information?<br />
                    We are sure your search will end here.</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="grid_8">
                <div className="breadcrumbs triggerAnimation animated" data-animate="fadeInUp">
                  <ul>
                    <li><span>You are here:</span></li>
                    <li><Link to="/">Home / </Link></li>
                    <li><span className="active">Contact us</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="row">
            <article className="grid_12">
              <div className="triggerAnimation animated" data-animate="fadeInLeft">
                <section className="heading-bordered">
                  <h3>Contact Information</h3>
                </section>
              </div>
              <br />
            </article>
          </div>

          <div className="row">
            <article className="grid_7 triggerAnimation animated" data-animate="fadeInLeft">
              <div style={{ border: '1px solid #e5e5e5', padding: '28px 30px', marginBottom: '20px' }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '22px' }}>
                  <div>
                    <h2 style={{ fontSize: '14px', letterSpacing: '0.08em', color: '#005d65', borderBottom: '1px solid #e5e5e5', paddingBottom: '8px', marginBottom: '12px' }}>HEAD OFFICE</h2>
                    <p style={{ margin: 0, lineHeight: '1.6' }}>
                      <strong>Siyak Steel International</strong><br />
                      Plot No. 2,7 Kikabhai Mansion, 3rd Floor,<br />
                      Office No. 17, Kika Street, Girgaon,<br />
                      Mumbai - 400004, INDIA
                    </p>
                  </div>

                  <div>
                    <h2 style={{ fontSize: '14px', letterSpacing: '0.08em', color: '#005d65', borderBottom: '1px solid #e5e5e5', paddingBottom: '8px', marginBottom: '12px' }}>OVERSEAS REPRESENTATIVE</h2>
                    <p style={{ margin: 0, lineHeight: '1.6' }}>
                      <strong>Saudi Arabia</strong><br />
                      P.O. Box 8214, Dammam,<br />
                      Postal Code: 32415<br />
                      Prince Mohammed Bin Fahd Road, Muhammed Ibn Saud<br />
                      Kingdom of Saudi Arabia
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <h2 style={{ fontSize: '14px', letterSpacing: '0.08em', color: '#005d65', borderBottom: '1px solid #e5e5e5', paddingBottom: '8px', marginBottom: '12px' }}>CONTACT PERSON</h2>
                  <p style={{ margin: 0 }}>Mr. Narpat Siyak</p>
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <h2 style={{ fontSize: '14px', letterSpacing: '0.08em', color: '#005d65', borderBottom: '1px solid #e5e5e5', paddingBottom: '8px', marginBottom: '12px' }}>PHONE</h2>
                  <p style={{ margin: 0 }}>
                    <i className="icon-phone" style={{ marginRight: '6px', color: '#005d65' }}></i>+91 98209 76537<br />
                    <i className="icon-phone" style={{ marginRight: '6px', color: '#005d65' }}></i>+91 22 6615 1478<br />
                    <i className="icon-phone" style={{ marginRight: '6px', color: '#005d65' }}></i>+91 22 6659 5225
                  </p>
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <h2 style={{ fontSize: '14px', letterSpacing: '0.08em', color: '#005d65', borderBottom: '1px solid #e5e5e5', paddingBottom: '8px', marginBottom: '12px' }}>WAREHOUSE</h2>
                  <p style={{ margin: 0 }}>
                    Plot No. 1320, Kalamboli Steel Market,<br />
                    Kalamboli, Dist. Raigad,<br />
                    Navi Mumbai - 410218, India
                  </p>
                  <p style={{ margin: '8px 0 0' }}>
                    <i className="icon-phone" style={{ marginRight: '6px', color: '#005d65' }}></i>+91 98922 48158
                  </p>
                </div>

                <div>
                  <h2 style={{ fontSize: '14px', letterSpacing: '0.08em', color: '#005d65', borderBottom: '1px solid #e5e5e5', paddingBottom: '8px', marginBottom: '12px' }}>EMAIL</h2>
                  <p style={{ margin: 0 }}>
                    <i className="icon-envelope" style={{ marginRight: '6px', color: '#005d65' }}></i><a href="mailto:info@siyaksteel.com">info@siyaksteel.com</a><br />
                    <i className="icon-envelope" style={{ marginRight: '6px', color: '#005d65' }}></i><a href="mailto:siyaksteel@gmail.com">siyaksteel@gmail.com</a>
                  </p>
                </div>

              </div>
            </article>

            <article className="grid_5 triggerAnimation animated" data-animate="fadeInRight">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.875!2d72.8295!3d18.9549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3d3f8ed309%3A0x76ba3ee4afcb906f!2sSiyak%20Steel%20International!5e1!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="560"
                frameBorder="0"
                style={{ border: '1px solid #e5e5e5', display: 'block', minHeight: '480px', marginBottom: '20px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </article>
          </div>

          <div className="row">
            <article className="grid_12">
              <ExportCalloutBanner style={{ marginTop: '10px', marginBottom: '20px' }} />
            </article>
          </div>
        </div>
      </section>

      <a href="https://wa.me/919820976537?text=I%20want%20to%20enquire%20about" className="float" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}
