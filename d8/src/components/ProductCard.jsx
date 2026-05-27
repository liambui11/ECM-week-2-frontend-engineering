import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <article class="product-card">
      <div class="card-badge">{product.category}</div>
      <div class="card-body">
        <h3 class="product-title">{product.name}</h3>
        <p class="product-price">${product.price.toFixed(2)}</p>
      </div>
    </article>
  );
}

