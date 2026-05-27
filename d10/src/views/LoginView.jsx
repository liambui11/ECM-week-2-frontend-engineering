import { useLocation, useNavigate } from 'react-router-dom';
import './LoginView.css';

export default function LoginView({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPath = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate(fromPath, { replace: true });
  };

  return (
    <div className="view-container auth-box">
      <h2>Authentication Guard Required</h2>
      {isAuthenticated ? (
        <p style={{ color: 'green' }}>✓ Authenticated successfully.</p>
      ) : (
        <div>
          <p style={{ color: 'red' }}>Access Denied. You must authenticate to view: <code>{fromPath}</code></p>
          <button className="login-action-btn" onClick={handleLogin}>Authenticate Session</button>
        </div>
      )}
    </div>
  );
}