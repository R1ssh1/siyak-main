import React from 'react';

export default function ExportCalloutBanner({ style = {} }) {
  return (
    <div
      className="export-callout-banner"
      style={{
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderLeft: '4px solid #005d65',
        borderRadius: '4px',
        padding: '18px 24px',
        textAlign: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.03)',
        marginTop: '32px',
        marginBottom: '20px',
        ...style,
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: '20px',
          lineHeight: '2',
          color: '#1e293b',
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        Contact <strong>Siyak Steel International</strong> for all your requirements of steel piping materials in UAE, Saudi Arabia, Kuwait, Bahrain, Singapore, Malaysia, Indonesia, South Africa, and the USA. A global steel exporter in Mumbai.
      </p>
    </div>
  );
}
