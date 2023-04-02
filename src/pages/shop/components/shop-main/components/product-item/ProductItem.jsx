import { Link } from "react-router-dom";
import "./styles/product-item.scss";

export default function ProductItem({ product }) {
  console.log(product);
  return (
    <div className="product_item">
      <div className="thumbnail">
        <Link to={`product/${product.id}`} className="product_img">
          <img
            src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iphone_14_pro_2.JPG"
            alt="Product"
          />
        </Link>
        {product.discountPercent > 0 ? (
          <div className="label_discount">
            <span className="badget">{product.discountPercent}% endirim</span>
          </div>
        ) : null}

        <div className="product_hover_action">
          <ul className="actions">
            <li>
              <button className="wishlist">
                <i className="bx bx-heart icon"></i>
              </button>
            </li>
            <li>
              <button className="add_to_cart">Səbətə əlavə et</button>
            </li>
            <li>
              <button className="sm quickview">
                <i className="bx bx-show icon"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <h5 className="title">
          <Link to={`product/${product.id}`}>{product.productName}</Link>
        </h5>
        <div className="price">
          {product.discountPercent > 0 ? (
            <span className="discount_price">
              {(product.price - (product.price * product.discountPercent) / 100).toFixed()}₼
            </span>
          ) : null}
          <span
            className={`old_price ${
              product.discountPercent !== 0 ? "line" : null
            }`}
          >
            {product.price}₼
          </span>
        </div>
      </div>
    </div>
  );
}
