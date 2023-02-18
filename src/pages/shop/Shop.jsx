import "./styles/shop.scss";
import ShopSidebar from "./components/shop-sidebar/ShopSidebar";
import ShopMain from "./components/shop-main/ShopMain";

export default function Shop() {
  return (
    <section className="shop_area">
      <div className="container">
        <div className="area_wrapper">
          <ShopSidebar />
          <ShopMain />
        </div>
      </div>
    </section>
  );
}
