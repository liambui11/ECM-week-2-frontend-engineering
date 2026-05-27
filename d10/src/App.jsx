import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import HomeView from './views/HomeView';
import ProductDetailView from './views/ProductDetailView';
import CartView from './views/CartView';
import LoginView from './views/LoginView';
import NotFoundView from './views/NotFoundView';
import './App.css';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const activeClass = ({ isActive }) => isActive ? "nav-item active" : "nav-item";

  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="nav-bar">
          <div className="nav-brand">EcoStore</div>
          <div className="nav-links">
            <NavLink to="/" className={activeClass}>Home</NavLink>
            <NavLink to="/cart" className={activeClass}>Cart</NavLink>
            {isAuthenticated ? (
              <button className="auth-btn logout" onClick={() => setIsAuthenticated(false)}>Logout</button>
            ) : (
              <NavLink to="/login" className="nav-item auth-link">Login</NavLink>
            )}
          </div>
        </nav>

        <main className="content-body">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/products/:id" element={<ProductDetailView />} />
            <Route path="/404" element={<NotFoundView />} />
            <Route path="/login" element={<LoginView isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/cart" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}><CartView /></ProtectedRoute>
            } />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}