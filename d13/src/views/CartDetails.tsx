import { useGlobalStore } from '../store/useGlobalStore';
import './CartDetails.css';

export default function CartDetails() {
  const cart = useGlobalStore(state => state.cart);
  const isVisible = useGlobalStore(state => state.isSidebarOpen);
  const removeFromCart = useGlobalStore(state => state.removeFromCart);
  const clearCart = useGlobalStore(state => state.clearCart);

  const cartTotalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isVisible) return null;

  return (
    <div className="cart-sidebar">
      <div className="sidebar-header">
        <h3>Live Basket</h3>
        <button className="clear-all-btn" onClick={clearCart}>Clear All</button>
      </div>

      {cart.length === 0 ? (
        <p className="empty-notice">Your shopping basket is empty.</p>
      ) : (
        <div className="basket-items-list">
          {cart.map(item => (
            <div key={item.id} className="basket-item">
              <img src={item.image} alt={item.title} className="cart-thumb" />
              <div className="item-meta">
                <h5>{item.title}</h5>
                <p className="sub-text">${item.price} × {item.quantity}</p>
              </div>
              <button className="drop-item-btn" onClick={() => removeFromCart(item.id)}>✕</button>
            </div>
          ))}
          <div className="aggregate-box">
            <span>Total Aggregate:</span>
            <strong>${cartTotalSum.toFixed(2)}</strong>
          </div>
        </div>
      )}
    </div>
  );
}