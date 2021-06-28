import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function SpecificCategory() {
  const [products, setProducts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/products`)
      .then((resp) => resp.json())
      .then(setProducts);
  }, [setProducts]);

  const filteredProducts = products.filter((product) => {
    return parseInt(product.categoryId) === parseInt(id);
  });

  return (
    <section className="products-container main-wrapper">
      <ul className="products-container__list">
        {filteredProducts.map((product) => (
          <li>
            <Link to={`/products/${product.id}`}>
              <article className="product-item">
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
