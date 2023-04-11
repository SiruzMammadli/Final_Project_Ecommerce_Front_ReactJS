import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartContext from "./setup/context/cart/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContext>
    <App />
  </CartContext>
);
