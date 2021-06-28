import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product({ addItemToBasket }) {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/products/${id}`)
      .then((resp) => resp.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <h1>Loading...</h1>;

  return (
    <section class="product-detail main-wrapper">
      <img src={product.image} alt={product.title} />
      <div class="product-detail__side">
        <h3></h3>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>£{product.price}</p>
        {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
        <button
          onClick={() => {
            addItemToBasket(product.id, product);
          }}
        >
          Add to basket
        </button>
      </div>
    </section>
  );
}
