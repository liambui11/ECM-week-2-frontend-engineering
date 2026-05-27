import React from 'react';

// Loading spinner component
export const Loading: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
    <div className="spinner">Loading...</div>
  </div>
);
