// src/views/ProductCatalogView.tsx
import { useEffect, useState } from 'react';
import { ProductService } from '../services/product.service';
import './ProductCatalogView.css';
import type { Product } from '../services/product.types';

export default function ProductCatalogView() {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<'loading' | 'error' | 'empty' | 'data'>('loading');

  useEffect(() => {
    const controller = new AbortController();

    const executeFetchPipeline = async () => {
      try {
        setStatus('loading');
        const data = await ProductService.getAllProducts(controller.signal);
        
        if (data.length === 0) {
          setStatus('empty');
        } else {
          setProducts(data);
          setStatus('data');
        }
      } catch (err: unknown) {
        if ((err as Error).name !== 'CanceledError') setStatus('error');
      }
    };

    executeFetchPipeline();
    return () => controller.abort();
  }, []);

  if (status === 'loading') return <div className="state-prompt loading">⌛ Loading index data...</div>;
  if (status === 'error') return <div className="state-prompt error">⚠ API Gateway Communication Failure.</div>;
  if (status === 'empty') return <div className="state-prompt empty">📭 No operational entries found.</div>;

  return (
    <div className="catalog-container">
      <h2>Architectural Index</h2>
      <div className="products-grid">
        {products.map(p => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.title} className="product-img-preview" />
            <h4>{p.title}</h4>
            <p className="price">${p.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}