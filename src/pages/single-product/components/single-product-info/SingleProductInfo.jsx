import "./styles/single-product-info.scss";
import "./styles/responsive-single-product-info.scss";

export default function SingleProductInfo({ product }) {
  return (
    <div className="single_product_info p-inline-15">
      <h2 className="product_title">{product.productName}</h2>
      <span className="product_price">
        {product.discountPrice ? product.discountPrice : product.price}₼
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
        <p className="description">
          {product.description}
        </p>
      ) : null}
      <ul className="product_action_wrapper">
        <li className="product_qty">
          <span className="dec qty_btn">
            <i className="bx bx-minus icon"></i>
          </span>
          <input type="number" defaultValue="1" />
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
      </ul>
    </div>
  );
}
