import "./styles/product-item.scss";

export default function ProductItem() {
  return (
    <div className="product_item">
      <div className="thumbnail">
        <a href="#" className="product_img">
          <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iphone_14_pro_2.JPG" alt="Product" />
        </a>
        <div className="label_discount">
          <span className="badget">10% endirim</span>
        </div>
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
              <button className="sm quickview"><i className='bx bx-show icon'></i></button>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <h5 className="title">
          <a href="#">iPhone 14 PRO Gold</a>
        </h5>
        <div className="price">
          <span className="discount_price">30₼</span>
          <span className="old_price">40₼</span>
        </div>
      </div>
    </div>
  );
}
