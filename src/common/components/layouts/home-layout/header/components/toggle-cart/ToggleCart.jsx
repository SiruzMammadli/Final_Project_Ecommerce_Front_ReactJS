import React from "react";
import { Link } from "react-router-dom";
import "./styles/toggle-cart.scss";
import "./styles/responsive-toggle-cart.scss";
import useClickOutside from "../../../../../../hooks/useclickoutside/useClickOutside";

export default function ToggleCart({ setToggleCart }) {
  const { menuRef, clickRef } = useClickOutside(() => setToggleCart(false));

  return (
    <div className="toggle_cart_container" ref={menuRef}>
      <div className="toggle_cart_header">
        <h2 className="header_title">Səbət</h2>
        <button className="close_btn" onClick={() => setToggleCart(false)}>
          <i className="bx bx-x close_icon"></i>
        </button>
      </div>
      <div className="toggle_cart_body">
        <ul className="product_list">
          <li className="product_item">
            <div className="item_img">
              <a href="#">
                <img
                  src="/assets/img/products/iphone_14_pro.jpg"
                  width="100"
                  alt="Product"
                />
              </a>
              <button className="remove_item_btn">
                <i className="bx bx-x remove_item_icon"></i>
              </button>
            </div>
            <div className="item_content">
              <div className="item_content_info">
                <h3 className="item_title">
                  <a href="#">iPhone 14 PRO Gold</a>
                </h3>
                <div className="item_price">
                  155.00
                  <span className="currency_symbol">₼</span>
                </div>
              </div>
              <div className="item_quantity">
                <span className="qty_btn dec">
                  <i className="bx bx-minus icon"></i>
                </span>
                <input type="number" defaultValue={1} className="qty_input" />
                <span className="qty_btn inc">
                  <i className="bx bx-plus icon"></i>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="toggle_cart_footer">
        <h3 className="cart_subtotal">
          <span className="subtotal_title">Cəmi:</span>
          <span className="subtotal_amount">610₼</span>
        </h3>
        <div className="footer_action_btn">
          <Link
            ref={(btn) => (clickRef.current[0] = btn)}
            to="/cart"
            className="btn cart_btn"
            style={{ "--footer-action-bg-color": "#3577f0" }}
          >
            Səbətə keç
          </Link>
          <a
            ref={(btn) => (clickRef.current[1] = btn)}
            href="#"
            className="btn checkout_btn"
            style={{ "--footer-action-bg-color": "#ff497c" }}
          >
            Sifarişi rəsmiləşdir
          </a>
        </div>
      </div>
    </div>
  );
}
