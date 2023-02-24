import "./styles/toggle-cart.scss";

export default function ToggleCart({ setToggleCart }) {
  return (
    <div className="toggle_cart_container">
      <div className="toggle_cart_header">
        <h2 className="header_title">Səbət</h2>
        <button className="close_btn" onClick={() => setToggleCart(false)}>
          <i class="bx bx-x close_icon"></i>
        </button>
      </div>
      <div className="toggle_cart_body"></div>
      <div className="toggle_cart_footer"></div>
    </div>
  );
}
