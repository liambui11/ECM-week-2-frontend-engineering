import React from 'react';

interface ErrorViewProps {
  message: string;
}

// Error state display
export const ErrorView: React.FC<ErrorViewProps> = ({ message }) => (
  <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--danger)' }}>
    <h3>Error</h3>
    <p>{message}</p>
  </div>
);
