import CreateProductView from './views/CreateProductView';
import './App.css'; 

export default function App() {
  return (
    <div className="app-global-container">
      <header className="app-header">
        <div className="brand-logo">Architectural Panel</div>
        {/* <div className="status-badge">Production Environment</div> */}
      </header>

      <main className="app-main-content">
        <CreateProductView />
      </main>
    </div>
  );
}