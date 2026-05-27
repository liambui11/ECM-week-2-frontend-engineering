import ErrorBoundary from './components/ErrorBoundary';
import HeaderLayout from './views/HeaderLayout';
import ProductCatalog from './views/ProductCatalog';
import CartDetails from './views/CartDetails';
import './App.css';

export default function App() {
  return (
    <div className="workspace-container">
      <ErrorBoundary sectionName="Application Header Layer">
        <HeaderLayout />
      </ErrorBoundary>

      <div className="workspace-body-layout">
        <ErrorBoundary sectionName="Product Ingestion Section">
          <ProductCatalog />
        </ErrorBoundary>

        <ErrorBoundary sectionName="Shopping Cart Drawer Area">
          <CartDetails />
        </ErrorBoundary>
      </div>
    </div>
  );
}