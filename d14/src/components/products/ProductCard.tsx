import React from 'react';
import type { Product } from '../../types/product';
import { useCartStore } from '../../store/useCartStore';
import { ShoppingCart } from 'lucide-react';
import '../../styles/products.css';

interface ProductCardProps {
  product: Product;
}

// Card component for displaying a single product
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCartStore();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title" title={product.title}>{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <div className="product-footer">
        <button 
          className="btn btn-primary w-full" 
          onClick={() => addItem(product)}
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
        >
          <ShoppingCart size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
};
