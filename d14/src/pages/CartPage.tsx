import React from 'react';
import { useCartStore } from '../store/useCartStore';
import { Trash2, Plus, Minus } from 'lucide-react';
import { EmptyView } from '../components/common/EmptyView';
import '../styles/cart.css';

// Shopping cart page
export const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

  if (items.length === 0) {
    return <EmptyView message="Your cart is empty. Start shopping!" />;
  }

  return (
    <div className="container cart-container">
      <h1>Your Shopping Cart</h1>
      <div className="cart-list">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-info">
              <h4>{item.title}</h4>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="btn"><Minus size={16} /></button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn"><Plus size={16} /></button>
              <button onClick={() => removeItem(item.id)} className="btn btn-danger"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p className="cart-total">Total: ${getTotalPrice().toFixed(2)}</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <button onClick={clearCart} className="btn">Clear Cart</button>
          <button className="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  );
};
