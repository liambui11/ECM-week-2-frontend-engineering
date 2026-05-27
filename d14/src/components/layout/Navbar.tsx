import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, LogIn, LogOut, Package } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { useCartStore } from '../../store/useCartStore';
import '../../styles/navbar.css';

export const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const { items } = useCartStore();
  
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">E-CraftMan Shop</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link"><Package size={20} /> Products</Link>
          <Link to="/cart" className="nav-link">
            <ShoppingCart size={20} /> Cart 
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          
          {isAuthenticated ? (
            <div className="nav-links">
              <span>Hi, {user?.username}</span>
              <button onClick={logout} className="btn btn-danger"><LogOut size={16} /></button>
            </div>
          ) : (
            <Link to="/login" className="nav-link"><LogIn size={20} /> Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};
