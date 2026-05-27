import { useGlobalStore } from '../store/useGlobalStore';
import './HeaderLayout.css';

export default function HeaderLayout() {
  const user = useGlobalStore(state => state.user);
  const cart = useGlobalStore(state => state.cart);
  const toggleSidebar = useGlobalStore(state => state.toggleSidebar);
  const loginUser = useGlobalStore(state => state.loginUser);
  const logoutUser = useGlobalStore(state => state.logoutUser);

  const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAuthAction = () => {
    if (user) {
      logoutUser();
    } else {
      loginUser('intern.developer@ecraftman.com');
    }
  };

  return (
    <nav className="header-nav">
      <div className="brand-title">EcoStore Central</div>
      <div className="action-cluster">
        <button className="auth-trigger-btn" onClick={handleAuthAction}>
          {user ? `Sign Out (${user.email})` : 'Mock Authenticate'}
        </button>
        <button className="cart-badge-btn" onClick={toggleSidebar}>
          Shopping Basket <span className="badge-count">{totalItemsCount}</span>
        </button>
      </div>
    </nav>
  );
}