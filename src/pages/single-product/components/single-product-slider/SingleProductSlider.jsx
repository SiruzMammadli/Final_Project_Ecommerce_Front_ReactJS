import "./styles/single-product-slider.scss";
import "./styles/responsive-single-product-slider.scss";
import React from "react";

export default function SingleProductSlider({ imageUrl }) {
  const [imgIndex, setImgIndex] = React.useState(0);

  return (
    <div className="product_img_slider">
      <div className="thumbnail_wrapper">
        <ul className="p-inline-15">
          {imageUrl.map((url, index) =>
            index === imgIndex ? (
              <li
                onClick={() => setImgIndex(index)}
                key={index}
                className="current_thumb"
              >
                <img src={`/assets/img/products/${url}`} alt="Product" />
              </li>
            ) : (
              <li onClick={() => setImgIndex(index)} key={index}>
                <img src={`/assets/img/products/${url}`} alt="Product" />
              </li>
            )
          )}
        </ul>
      </div>
      <div className="current_slide p-inline-15">
        <a>
          <img
            src={`/assets/img/products/${imageUrl[imgIndex]}`}
            alt="Product"
          />
        </a>
        <div className="label_discount">
          <span className="badget">10% endirim</span>
        </div>
      </div>
    </div>
  );
}
