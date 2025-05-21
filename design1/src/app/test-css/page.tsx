"use client";

import React from 'react';

export default function TestCssPage() {
  return (
    <div>
      <h1 style={{ color: 'blue', fontSize: '24px', marginBottom: '20px' }}>
        Test avec CSS Inline
      </h1>
      <p style={{ fontFamily: 'Arial', lineHeight: '1.5' }}>
        Cette page teste si les styles CSS inline fonctionnent correctement.
      </p>
      <button 
        style={{ 
          backgroundColor: 'purple', 
          color: 'white', 
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
        onClick={() => alert('Le bouton fonctionne!')}
      >
        Cliquez-moi
      </button>
    </div>
  );
}
