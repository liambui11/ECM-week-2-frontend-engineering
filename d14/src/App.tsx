import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { ProductListPage } from './pages/ProductListPage';
import { CartPage } from './pages/CartPage';
import { LoginPage } from './pages/LoginPage';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import './styles/main.css';

export const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<ProductListPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>
        </div>
      </ErrorBoundary>
    </Router>
  );
};
