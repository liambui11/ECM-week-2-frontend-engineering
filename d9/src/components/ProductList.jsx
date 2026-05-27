import './ProductList.css';

export default function ProductList({ products, onAddToCart }) {
  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map(prod => (
          <div key={prod.id} className="product-item-card">
            <span className="item-category">{prod.category}</span>
            <h4 className="item-name">{prod.name}</h4>
            <p className="item-price">${prod.price.toFixed(2)}</p>
            <button className="add-to-cart-btn" onClick={() => onAddToCart(prod)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}