import { Link } from 'react-router-dom';
import './NotFoundView.css';

export default function NotFoundView() {
  return (
    <div className="view-container error-page">
      <h1>404</h1>
      <h3>Resource Inaccessible</h3>
      <p>The requested route structural pattern does not exist in our client-side register.</p>
      <Link to="/" className="home-link">Return to Safe Cluster</Link>
    </div>
  );
}