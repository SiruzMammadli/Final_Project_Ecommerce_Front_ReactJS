import "./styles/single-product-info.scss";
import "./styles/responsive-single-product-info.scss";
import React from "react";
import { CartState } from "../../../../setup/context/cart/cartContext";

export default function SingleProductInfo({ product }) {
  const [quantity, setQuantity] = React.useState(1);
  console.log(quantity)

  const {
    state: { cart },
    dispatch,
  } = CartState();

  React.useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(cart));
  }, [cart, dispatch]);

  function handleSubmit(value, product) {
    dispatch({
      type: "SINGLE_PRODUCT_ADD_TO_CART",
      payload: {
        product,
        qty: parseInt(value ? value : 1),
      },
    });
  }
  return (
    <div className="single_product_info p-inline-15">
      <h2 className="product_title">{product.productName}</h2>
      <span className="product_price">
        {(
          product.price -
          (product.price * product.discountPercent) / 100
        ).toFixed()}
        ₼
      </span>
      {product.freeDelivery || product.isStock ? (
        <ul className="product_meta">
          {product.isStock ? (
            <li>
              <i className="bx bx-check icon"></i> Stokda var
            </li>
          ) : null}
          {product.freeDelivery ? (
            <li>
              <i className="bx bx-check icon"></i> Pulsuz çatdırılma
            </li>
          ) : null}
        </ul>
      ) : null}
      {product.description ? (
        <p className="description">{product.description}</p>
      ) : null}
      <ul className="product_action_wrapper">
        <li className="product_qty">
          <span
            className="dec qty_btn"
            onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : 1)}
          >
            <i className="bx bx-minus icon"></i>
          </span>
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              e.target.value > 1 ? setQuantity(e.target.value) : setQuantity(1);
            }}
          />
          <span className="inc qty_btn">
            <i
              className="bx bx-plus icon"
              onClick={() => setQuantity(quantity + 1)}
            ></i>
          </span>
        </li>
        <li className="actions">
          <button
            className="add_to_cart_btn"
            onClick={() => handleSubmit(quantity, product)}
          >
            Səbətə əlavə et
          </button>
          <button className="wishlist_btn">
            <i className="bx bx-heart"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}
