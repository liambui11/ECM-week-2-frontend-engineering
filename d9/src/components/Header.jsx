import './Header.css';

export default function Header({ totalItems }) {
  return (
    <header className="store-header">
      <h1 className="logo">EcoStore</h1>
      <div className="cart-badge-container">
        🛒 Cart: <span className="badge-count">{totalItems}</span> items
      </div>
    </header>
  );
}