import { useState } from 'react';
import ProductCatalogView from './views/ProductCatalogView';
import './App.css';

export default function App() {
  const [showCatalog, setShowCatalog] = useState(true);

  return (
    <div className="app-global-container">
      <header className="app-system-header">
        <div className="system-logo">EcoStore Index</div>
        
        <button 
          className="unmount-test-btn" 
          onClick={() => setShowCatalog(!showCatalog)}
        >
          {showCatalog ? "⚠️ FORCE UNMOUNT COMPONENT" : "🔄 MOUNT COMPONENT"}
        </button>
      </header>

      <main className="app-main-viewport">
        {showCatalog ? (
          <ProductCatalogView />
        ) : (
          <div className="state-prompt empty">
            🚫 Component has been destroyed from DOM tree. Request must be aborted!
          </div>
        )}
      </main>
    </div>
  );
}