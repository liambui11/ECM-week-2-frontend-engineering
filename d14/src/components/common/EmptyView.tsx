import React from 'react';

interface EmptyViewProps {
  message: string;
}

export const EmptyView: React.FC<EmptyViewProps> = ({ message }) => (
  <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--secondary)' }}>
    <p>{message}</p>
  </div>
);
