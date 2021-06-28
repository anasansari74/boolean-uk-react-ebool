import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Basket from "./Pages/Basket";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Product from "./components/Product";
import SpecificCategory from "./components/SpecificCategory";

function App() {
  const [basket, setBasket] = useState([]);

  function addItemToBasket(productId, item) {
    const productFound = basket.find(
      (basketItem) => basketItem.id === productId
    );

    if (productFound !== undefined) {
      const basketUpdated = basket.map((basketItem) =>
        basketItem.id === productId
          ? { ...basketItem, quantity: basketItem.quantity + 1 }
          : basketItem
      );
      setBasket(basketUpdated);
    } else {
      const newItem = {
        id: productId,
        image: item.image,
        title: item.title,
        price: item.price,
        quantity: 1,
      };
      setBasket([...basket, newItem]);
    }
  }

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products" />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id" exact>
            <Product addItemToBasket={addItemToBasket} />
          </Route>
          <Route path="/categories" exact>
            <Categories />
          </Route>
          <Route path="/categories/:id" exact>
            <SpecificCategory />
          </Route>
          <Route path="/basket" exact>
            <Basket basket={basket} />
          </Route>
          <Route>
            <h1>Page NOT found!</h1>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
