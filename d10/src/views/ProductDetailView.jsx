import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetailView.css';

export default function ProductDetailView() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="view-container">
      <h2>Product Specification</h2>
      <div className="detail-card">
        <p>Currently inspecting dynamic route resource identifier: <strong>SKU #{id}</strong></p>
        <button className="back-btn" onClick={() => navigate(-1)}>← Back to Catalog</button>
      </div>
    </div>
  );
}