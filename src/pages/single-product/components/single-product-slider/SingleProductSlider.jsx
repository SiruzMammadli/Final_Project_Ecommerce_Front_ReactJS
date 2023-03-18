import "./styles/single-product-slider.scss";

export default function SingleProductSlider() {
  return (
    <div className="product_img_slider">
      <ul className="p-inline-15">
        <li className="current_slide">
          <img
            src="/assets/img/products/single-product/thumbnails/thumb-08.png"
            alt="Product"
          />
        </li>
        <li>
          <img
            src="/assets/img/products/single-product/thumbnails/thumb-07.png"
            alt="Product"
          />
        </li>
        <li>
          <img
            src="/assets/img/products/single-product/thumbnails/thumb-09.png"
            alt="Product"
          />
        </li>
        <li>
          <img
            src="/assets/img/products/single-product/thumbnails/thumb-07.png"
            alt="Product"
          />
        </li>
      </ul>
      <div className="current_slide p-inline-15">
        <a href="#">
          <img
            src="/assets/img/products/single-product/thumbnails/product-big-01.png"
            alt=""
          />
        </a>
        <div className="label_discount">
            <span className="badget">10% endirim</span>
        </div>
      </div>
    </div>
  );
}
