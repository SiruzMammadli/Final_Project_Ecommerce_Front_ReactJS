import { createSlice } from "@reduxjs/toolkit";

const cartLocal = JSON.parse(localStorage.getItem("cart-items"));

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: cartLocal ? cartLocal : [],
  },
  reducers: {
    addToCart: ({ cart }, { payload }) => {
      const existItem = cart.find((item) => item.id === payload.id);
      if (existItem) {
        existItem.quantity += 1;
      } else {
        cart.push({ ...payload, quantity: 1 });
      }
      localStorage.setItem("cart-items", JSON.stringify(cart));
    },
    removeFromCart: ({ cart }, { payload }) => {
      const removedItemList = cart.filter((item) => item.id !== payload);
      cart = removedItemList;
      localStorage.setItem("cart-items", JSON.stringify(cart));
    },
    incrementQuantity: ({ cart }, { payload }) => {
      const existItem = cart.find((item) => item.id === payload.id);
      existItem.quantity += 1;
    },
    decrementQuantity: ({ cart }, { payload }) => {
      const existItem = cart.find((item) => item.id === payload.id);
      if (existItem.quantity === 1) {
        existItem.quantity = 1;
      } else {
        existItem.quantity += 1;
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
