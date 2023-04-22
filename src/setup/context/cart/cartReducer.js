export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      const existItem = state.cart.some((item) => item.id === payload.id);
      if (existItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...payload, quantity: 1 }],
        };
      }
    case "SINGLE_PRODUCT_ADD_TO_CART":
      const existItem2 = state.cart.some((item) => item.id === payload.product.id);
      console.log(existItem2, state.cart);
      if (existItem2) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === payload.product.id
              ? {
                  ...item,
                  quantity: item.quantity + payload.qty,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...payload.product, quantity: payload.qty }],
        };
      }
    case "INCREMENT_CART_ITEM":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };
    case "DECREMENT_CART_ITEM":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 1,
              }
            : item
        ),
      };
    case "QUANTITY_ONCHANGE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.itemId
            ? {
                ...item,
                quantity: payload.qty,
              }
            : item
        ),
      };
    case "REMOVE_FROM_CART":
      return { cart: state.cart.filter((item) => item.id !== payload) };
    default:
      return state;
  }
};
