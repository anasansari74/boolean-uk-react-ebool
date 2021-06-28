export default function BasketCard({ item }) {
  return (
    <li>
      <article class="basket-container__item">
        <img src={item.image} alt={item.title} width="90" />
        <p>{item.title}</p>
        <p>
          Qty:
          <select>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </p>
        {/* <!-- The item total is calculated using the Qty selected value --> */}
        <p>Item total: £{(item.price * item.quantity).toFixed(2)}</p>
      </article>
    </li>
  );
}
