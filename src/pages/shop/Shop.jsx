import "./styles/shop.scss";
import "./styles/responsive-shop.scss";
import React from "react";
import ShopSidebar from "./components/shop-sidebar/ShopSidebar";
import ShopMain from "./components/shop-main/ShopMain";
import Newsletter from "../../common/components/layouts/home-layout/newsletter/Newsletter";

export default function Shop() {
  return (
    <React.Fragment>
      <section className="shop_area">
        <div className="container">
          <div className="area_wrapper">
            <ShopSidebar />
            <ShopMain />
          </div>
        </div>
      </section>
      <Newsletter letterBgImage="/assets/img/others/bg-image-5.jpg"/>
    </React.Fragment>
  );
}
