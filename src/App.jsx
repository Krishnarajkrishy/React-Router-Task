import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
import CartPage from "./Components/CartPage";
import ProductsPage from "./Components/ProductsPage";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);

   const addToCart = (product) => {
     if (cart.some((item) => item.id === product.id)) {
       alert('product is already added')
     } else {
       setCart([...cart, product]);
     }
   };
   const removeFromCart = (productId) => {
     setCart(cart.filter((item) => item.id !== productId));
   };

   return (
    <Router>
      <div>
        <NavBar
          count={cart.length} />
        <Routes>
          <Route
            path="/"
            element={<ProductsPage
              addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                key={cart.id}
                cart={cart}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App