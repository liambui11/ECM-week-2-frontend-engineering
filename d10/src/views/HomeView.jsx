import { Link, useNavigate } from 'react-router-dom';
import './HomeView.css';

export default function HomeView() {
  const navigate = useNavigate();
  const mockProducts = [1, 2, 3, 4, 5];

  return (
    <div className="view-container">
      <h2>Home Dashboard</h2>
      <p>Explore our architectural catalog:</p>
      <div className="product-grid">
        {mockProducts.map(id => (
          <div key={id} className="prod-shortcut-card">
            <h4>Product SKU: #{id}</h4>
            <Link to={`/products/${id}`} className="view-detail-btn">View Specification</Link>
          </div>
        ))}
      </div>
      <hr />
      <button className="prog-nav-btn" onClick={() => navigate('/cart')}>
        Go to Checkout (Programmatic Navigation)
      </button>
    </div>
  );
}