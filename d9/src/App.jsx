import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: "Wireless Mouse", price: 25.00, category: "Electronics" },
    { id: 2, name: "Mechanical Keyboard", price: 80.00, category: "Electronics" },
    { id: 3, name: "Ergonomic Chair", price: 200.00, category: "Furniture" },
    { id: 4, name: "Noise Canceling Headphones", price: 150.00, category: "Electronics" },
    { id: 5, name: "Minimalist Desk Lamp", price: 45.00, category: "Furniture" }
  ];

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, amount) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + amount;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="app-container">
      <Header totalItems={totalItems} />
      <div className="main-layout">
        <ProductList products={products} onAddToCart={handleAddToCart} />
        <Cart 
          cartItems={cartItems} 
          totalPrice={totalPrice} 
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemoveItem}
        />
      </div>
    </div>
  );
}