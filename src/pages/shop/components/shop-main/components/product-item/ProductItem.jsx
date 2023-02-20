import "./styles/product-item.scss";

export default function ProductItem() {
  return (
    <div className="product_item">
      <div className="thumbnail">
        <a href="#" className="product_img">
          <img src="/assets/img/products/iphone_14_pro.jpg" alt="Product" />
        </a>
      </div>
      <div className="content">
        <h5 className="title"><a href="#">iPhone 14 PRO</a></h5>
        <div className="price">
          <span className="discount_price">30₼</span>
          <span className="old_price">40₼</span>
        </div>
      </div>
    </div>
  );
}
