import { useEffect, useState } from 'react';
import { useGlobalStore } from '../store/useGlobalStore';
import { API_ENDPOINTS } from '../constants/storage.constants';
import type { CartItem } from '../types/store.types';
import './ProductCatalog.css';

type ApiProduct = Omit<CartItem, 'quantity'>;

export default function ProductCatalog() {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const addToCart = useGlobalStore(state => state.addToCart);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL || 'https://fakestoreapi.com';
    
    setIsLoading(true);
    setErrorMessage(null);

    fetch(`${baseUrl}${API_ENDPOINTS.PRODUCTS}?limit=4`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch marketplace data');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("API Fetch Error:", err);
        setErrorMessage('The catalog service is currently unavailable. Please try again later.');
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="catalog-status-box">
        <div className="loading-spinner"></div>
        <p>Retrieving marketplace inventory...</p>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="catalog-status-box error-theme">
        <p>{errorMessage}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="catalog-status-box">
        <p>No products are currently available in the catalog.</p>
      </div>
    );
  }

  return (
    <div className="catalog-panel">
      <h3>Marketplace Catalog</h3>
      <div className="catalog-grid">
        {products.map(product => (
          <div key={product.id} className="catalog-card">
            <div className="img-wrapper">
              <img src={product.image} alt={product.title} />
            </div>
            <h4 className="product-title-text">{product.title}</h4>
            <p className="price-tag">${product.price.toFixed(2)}</p>
            <button className="add-cart-btn" onClick={() => addToCart(product)}>
              Add To Basket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}