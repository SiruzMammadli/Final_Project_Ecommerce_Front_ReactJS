import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { cartReducer } from "./cartReducer";
import { useContext } from "react";

const Cart = createContext();

const CartContext = ({ children }) => {
  const cartLocal = JSON.parse(localStorage.getItem('cart-items'));
  const [state, dispatch] = useReducer(cartReducer, {
    cart: cartLocal || [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default CartContext;

export const CartState = () => {
  return useContext(Cart);
};
