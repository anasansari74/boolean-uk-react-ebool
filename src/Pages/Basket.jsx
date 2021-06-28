export default function Basket({ basket }) {
  // const quantities = Array(item.quantity + 1).fill().map((item, index) => index);

  return (
    <section class="basket-container">
      <h2>Your Basket</h2>
      <ul>
        {basket.map((item) => (
          <li>
            <article class="basket-container__item">
              <img src={item.image} alt={item.title} width="90" />
              <p>{item.title}</p>
              <p>
                Qty:
                <select value={item.quantity}>
                  {Array(item.quantity + 1)
                    .fill()
                    .map((item, index) => index)
                    .map((quantity) => (
                      <option>{quantity}</option>
                    ))}
                </select>
              </p>
              <p>Item total: £{(item.price * item.quantity).toFixed(2)}</p>
            </article>
          </li>
        ))}
      </ul>
      <h3>Your total: £109.95</h3>
    </section>
  );
}
