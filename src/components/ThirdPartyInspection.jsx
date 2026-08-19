import React from "react";
import ritesLogo from "../assets/certifications/logos/rites.webp";
import pdilLogo from "../assets/certifications/logos/pdil.webp";
import lloydLogo from "../assets/certifications/logos/lloyd.webp";
import questLogo from "../assets/certifications/logos/quest.webp";
import tataProjectsLogo from "../assets/certifications/logos/tata_projects.webp";
import tuvSudLogo from "../assets/certifications/logos/tuv_sud.webp";
import bureauVeritasLogo from "../assets/certifications/logos/bureau_veritas.webp";
import tuvNordLogo from "../assets/certifications/logos/tuv_nord.webp";
import thermotechLogo from "../assets/certifications/logos/thermotech.webp";
import ltLogo from "../assets/certifications/logos/lt.webp";
import khdLogo from "../assets/certifications/logos/khd.webp";

const agencies = [
  { name: "DNV", sub: "Det Norske Veritas", render: () => (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <div style={{ padding: '4px 12px', background: '#0f5ea8', color: 'white', fontWeight: 'bold', fontSize: '18px', letterSpacing: '1px' }}>DNV</div>
        <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#666' }}>Det Norske Veritas</span>
      </div>
  )},
  { name: "Bureau Veritas", img: bureauVeritasLogo },
  { name: "NPCIL", sub: "Nuclear Power Corp. of India", render: () => (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>NPCIL</span>
        <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1.2px', color: '#666', textAlign: 'center', lineHeight: '1.2' }}>Nuclear Power Corp.<br/>of India Ltd.</span>
      </div>
  )},
  { name: "TUV India", render: () => (
      <div style={{ fontWeight: '900', fontSize: '24px', color: '#333', letterSpacing: '-1px' }}>
        TÜV <span style={{ color: '#005d65' }}>INDIA</span>
      </div>
  )},
  { name: "PDIL", img: pdilLogo },
  { name: "Lloyd's Register", render: () => (
      <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#0b3d91', lineHeight: '1.2', textAlign: 'center' }}>
        Lloyd's<br/>Register
      </div>
  )},
  { name: "SGS", render: () => (
      <div style={{ fontWeight: '900', fontSize: '30px', color: '#333', fontStyle: 'italic', letterSpacing: '-2px' }}>SGS</div>
  )},
  { name: "TATA Projects", img: tataProjectsLogo },
  { name: "BHEL", render: () => (
      <div style={{ padding: '4px 10px', background: '#1a4fa0', color: 'white', fontWeight: 'bold', fontSize: '18px', letterSpacing: '1px' }}>BHEL</div>
  )},
  { name: "Larsen & Toubro", img: ltLogo },
  { name: "HEG Ltd.", render: () => (
      <div style={{ fontWeight: 'bold', fontSize: '24px', letterSpacing: '-1px' }}>
        <span style={{ color: '#0f5ea8' }}>HE</span><span style={{ color: '#666' }}>G</span>
      </div>
  )},
  { name: "TUV SUD", img: tuvSudLogo },
  { name: "EIL", sub: "Engineers India Ltd.", render: () => (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '2px solid #1a4fa0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px', color: '#1a4fa0' }}>EIL</div>
      </div>
  )},
  { name: "VELOSI", render: () => (
      <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#333', letterSpacing: '1px', textTransform: 'uppercase' }}>Velosi</div>
  )},
  { name: "IQC", render: () => (
      <div style={{ fontWeight: '900', fontSize: '24px', color: '#1a4fa0', letterSpacing: '-1px' }}>IQC</div>
  )},
  { name: "Germanischer Lloyd", render: () => (
      <div style={{ fontWeight: '600', fontSize: '14px', color: '#333', textAlign: 'center', lineHeight: '1.2' }}>
        Germanischer<br/>Lloyd
      </div>
  )},
  { name: "Bechtel", render: () => (
      <div style={{ fontWeight: 'bold', fontSize: '24px', color: '#b8202e', letterSpacing: '-1px' }}>BECHTEL</div>
  )},
  { name: "RITES", img: ritesLogo },
  { name: "Lloyd Register Quality Assurance", img: lloydLogo },
  { name: "Quest", img: questLogo },
  { name: "TUV NORD", img: tuvNordLogo },
  { name: "Thermotech Boiler", img: thermotechLogo },
  { name: "KHD Humboldt Wedag", img: khdLogo },
];

function LogoCard({ agency }) {
  return (
    <div style={{ 
      flexShrink: 0, 
      width: '180px', 
      height: '110px', 
      margin: '0 15px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      border: '1px solid #e5e5e5', 
      backgroundColor: 'white', 
      padding: '15px' 
    }}>
      {agency.img ? (
        <img
          src={agency.img}
          alt={agency.name}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
      ) : (
        <div style={{ transform: 'scale(1.1)' }}>
          {agency.render()}
        </div>
      )}
    </div>
  );
}

export default function ThirdPartyInspection() {
  return (
    <section className="page-content bg-white" style={{ paddingTop: '10px', paddingBottom: '60px', borderTop: '1px solid #e5e5e5' }}>
      <div className="container">
        <div className="row">
          <section className="grid_12">
            <div className="box-pro1" style={{ "background": "#02898f", marginTop: '40px' }}>
              <div className="bphead">THIRD-PARTY INSPECTION</div>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px' }}>
              <h2 style={{ fontSize: '28px', color: '#333', fontWeight: '300' }}>Inspected and approved by global agencies</h2>
              <p style={{ color: '#666', marginTop: '10px', fontSize: '14px' }}>
                Every consignment can be verified by independent, internationally recognised inspection and certification bodies before it leaves our facility.
              </p>
            </div>
          </section>
        </div>
        
        <div className="row">
          <div className="grid_12" style={{ overflow: 'hidden', position: 'relative' }}>
            {/* simple CSS marquee fallback since Tailwind isn't available */}
            <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 40s linear infinite' }}>
              {[0, 1].map((copy) => (
                <div key={copy} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  {agencies.map((agency) => (
                    <LogoCard key={`${copy}-${agency.name}`} agency={agency} />
                  ))}
                </div>
              ))}
            </div>
            <style>
              {`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </section>
  );
}
