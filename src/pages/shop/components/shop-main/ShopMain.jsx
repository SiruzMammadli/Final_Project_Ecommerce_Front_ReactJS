import "./styles/shop-main.scss";
import "./styles/responsive-shop-main.scss";
import ProductItem from "./components/product-item/ProductItem";
import ShopMainTop from "./components/shop-main-top/ShopMainTop";

export default function ShopMain() {
  return (
    <main className="shop_main p-inline-15">
      <ShopMainTop />
      <div className="wrapper">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </main>
  );
}
