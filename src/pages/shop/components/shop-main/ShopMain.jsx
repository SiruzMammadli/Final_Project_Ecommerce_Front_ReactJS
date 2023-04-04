import "./styles/shop-main.scss";
import "./styles/responsive-shop-main.scss";
import React from "react";
import ProductItem from "./components/product-item/ProductItem";
import ShopMainTop from "./components/shop-main-top/ShopMainTop";
import LoadingSpinner from "../../../../__test__/components/loading/LoadingSpinner";

export default function ShopMain({ loading, products }) {
  return (
    <main className="shop_main p-inline-15">
      {loading && (
        <LoadingSpinner svgWidth={150} svgHeight={150} circleWidth={3} />
      )}
      <ShopMainTop />
      <div className="wrapper">
        {products?.data?.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
      {products?.data?.length === 0 ? <div className="product_empty p-inline-15">Hal-hazırda bazada heç bir məhsul yoxdur.</div> : null}
      {!loading && products?.data.length > 0 && (
        <div className="shop_main_bottom">
          <button className="load_more">Daha çox</button>
        </div>
      )}
    </main>
  );
}
