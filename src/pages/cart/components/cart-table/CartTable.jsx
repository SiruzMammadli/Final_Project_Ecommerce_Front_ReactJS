import "./styles/cart-table.scss";
import React from "react";
import { CartState } from "../../../../setup/context/cart/cartContext.js";
const CartTable = () => {
  const [qtyVal, setQtyVal] = React.useState(null);

  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart);

  React.useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(cart));
  }, [cart, dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <th className="product_remove"></th>
          <th className="product_thumbnail">Məhsul</th>
          <th className="product_title"></th>
          <th className="product_price">Qiymət</th>
          <th className="product_quantity">Miqdar</th>
          <th className="product_subtotal">Cəmi</th>
        </tr>
      </thead>
      <tbody>
        {cart?.length > 0 ? (
          cart?.map((item, index) => (
            <tr key={index}>
              <td className="product_remove">
                <span
                  className="remove_cart circle_btn"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item.id,
                    });
                  }}
                >
                  <i className="bx bx-x"></i>
                </span>
              </td>
              <td className="product_thumbnail">
                <a href="#">
                  <img
                    src={`/assets/img/products/${item.imageUrl[0]}`}
                    alt="iPhone 13"
                  />
                </a>
              </td>
              <td className="product_title">
                <a href="#">{item.productName}</a>
              </td>
              <td className="product_price">
                {(
                  item.price -
                  (item.price * item.discountPercent) / 100
                ).toFixed()}
                <span className="currency">₼</span>
              </td>
              <td className="product_quantity">
                <span
                  className="circle_btn dec"
                  onClick={() => {
                    dispatch({
                      type: "DECREMENT_CART_ITEM",
                      payload: item.id,
                    });
                  }}
                >
                  <i className="bx bx-minus icon"></i>
                </span>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => {
                    setQtyVal(parseInt(e.target.value));
                    dispatch({
                      type: "QUANTITY_ONCHANGE_CART_ITEM",
                      payload: {
                        itemId: item.id,
                        qty: qtyVal,
                      },
                    });
                  }}
                  className="qty_input"
                />
                <span
                  className="circle_btn inc"
                  onClick={() => {
                    dispatch({
                      type: "INCREMENT_CART_ITEM",
                      payload: item.id,
                    });
                  }}
                >
                  <i className="bx bx-plus icon"></i>
                </span>
              </td>
              <td className="product_subtotal">
                {(
                  item.price -
                  (item.price * item.discountPercent) / 100
                ).toFixed() * item.quantity}
                <span className="currency">₼</span>
              </td>
            </tr>
          ))
        ) : (
          <tr>Səbət boşdur.</tr>
        )}
      </tbody>
    </table>
  );
};

export default CartTable;
