import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

// Simple login page (mock)
export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      login({ id: 1, username, email: `${username}@example.com` });
      navigate('/');
    }
  };

  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '4rem' }}>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Login to E-Craft</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
              placeholder="Enter any name"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
        </form>
      </div>
    </div>
  );
};
