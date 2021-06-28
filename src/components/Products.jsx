import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then(setProducts);
  });

  return (
    <section class="products-container main-wrapper">
      <ul class="products-container__list">
        {products.map((product) => (
          <li>
            <Link to={`/products/${product.id}`}>
              <article class="product-item">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
