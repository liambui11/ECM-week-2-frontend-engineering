import ProductCard from './ProductCard';
import './ProductList.css';

export default function ProductList() {
  const products = [
    { id: 1, name: "Wireless Mouse", price: 25.99, category: "Electronics" },
    { id: 2, name: "Mechanical Keyboard", price: 89.49, category: "Electronics" },
    { id: 3, name: "Leather Journal", price: 15.00, category: "Stationery" },
    { id: 4, name: "Ergonomic Desk Chair", price: 199.99, category: "Furniture" },
    { id: 5, name: "Stainless Water Bottle", price: 24.50, category: "Lifestyle" }
  ];

  return (
    <section class="product-list-container">
      <h2>Featured Products</h2>
      <div class="product-grid">
        {products.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </section>
  );
}


