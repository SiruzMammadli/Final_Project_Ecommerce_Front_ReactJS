import "./styles/single-product-info.scss";
import "./styles/responsive-single-product-info.scss";

export default function SingleProductInfo() {
  return (
    <div className="single_product_info p-inline-15">
      <h2 className="product_title">3D™ naqilsiz qulaqcıq</h2>
      <span className="product_price">155.00₼</span>
      <ul className="product_meta">
        <li>
          <i className="bx bx-check icon"></i> Stokda var
        </li>
        <li>
          <i className="bx bx-check icon"></i> Pulsuz çatdırılma
        </li>
      </ul>
      <p className="description">
        In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante
        est, elementum eget magna. Pellentesque sagittis dictum libero, eu
        dignissim tellus.
      </p>
      <ul className="product_action_wrapper">
        <li className="product_qty">
          <span className="dec qty_btn">
            <i className="bx bx-minus icon"></i>
          </span>
          <input type="number" value="1" />
          <span className="dec qty_btn">
            <i className="bx bx-plus icon"></i>
          </span>
        </li>
        <li className="actions">
          <button className="add_to_cart_btn">Səbətə əlavə et</button>
          <button className="wishlist_btn">
            <i className="bx bx-heart"></i>
          </button>
        </li>
        <li className="wishlist"></li>
      </ul>
    </div>
  );
}
