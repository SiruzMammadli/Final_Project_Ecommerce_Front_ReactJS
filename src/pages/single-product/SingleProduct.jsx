import React from "react";
import SingleProductInfo from "./components/single-product-info/SingleProductInfo";
import SingleProductSlider from "./components/single-product-slider/SingleProductSlider";
import "./styles/single-product.scss";
import "./styles/responsive-single-product.scss";
import SingleProductTabs from "./components/single-product-tabs/SingleProductTabs";

export default function SingleProduct() {
  return (
    <section className="single_product">
      <div className="container p-inline-15">
        <div className="product_wrapper">
          <SingleProductSlider />
          <SingleProductInfo />
        </div>
      </div>
      <SingleProductTabs />
    </section>
  );
}
