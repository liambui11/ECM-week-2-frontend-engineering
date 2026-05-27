import React, { useEffect, useState } from 'react';
import type { Product } from '../types/product';
import { fetchProducts } from '../services/apiService';
import { ProductCard } from '../components/products/ProductCard';
import { Loading } from '../components/common/Loading';
import { ErrorView } from '../components/common/ErrorView';
import { EmptyView } from '../components/common/EmptyView';

export const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <ErrorView message={error} />;
  if (products.length === 0) return <EmptyView message="No products found." />;

  return (
    <div className="container">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
