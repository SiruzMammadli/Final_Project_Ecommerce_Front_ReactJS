import "./styles/toggle-cart.scss";

export default function ToggleCart({ setToggleCart }) {
  return (
    <div className="toggle_cart_container">
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
              <button className="close_btn">
                <i className="bx bx-x close_icon"></i>
              </button>
            </div>
            <div className="item_content">
              <h3 className="item_title">
                <a href="#">iPhone 14 PRO</a>
              </h3>
              <div className="item_price">
                155.00
                <span className="currency_symbol">₼</span>
              </div>
            </div>
            <div className="item_quantity">
              <span className="qty_btn dec">-</span>
              <input type="number" value={1} className="qty_input" />
              <span className="qty_btn inc">+</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="toggle_cart_footer"></div>
    </div>
  );
}
