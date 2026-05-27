import './Cart.css';

export default function Cart({ cartItems, totalPrice, onUpdateQuantity, onRemove }) {
  return (
    <aside className="cart-sidebar">
      <h3>Your Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <p className="empty-msg">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <div className="item-info">
                <div className="name">{item.name}</div>
                <small className="price-details">${item.price.toFixed(2)} x {item.quantity}</small>
              </div>
              <div className="action-controls">
                <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>✕</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <hr className="divider" />
      <div className="total-container">
        <span>Total:</span>
        <span className="total-price">${totalPrice.toFixed(2)}</span>
      </div>
    </aside>
  );
}
