import "./styles/shop.scss";
import "./styles/responsive-shop.scss";
import React from "react";
import ShopSidebar from "./components/shop-sidebar/ShopSidebar";
import ShopMain from "./components/shop-main/ShopMain";
import Newsletter from "../../common/components/layouts/home-layout/newsletter/Newsletter";
import useQuery from "../../__test__/hooks/useQuery";

export default function Shop() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const Products = async () => {
      const { response } = await useQuery(
        "https://localhost:5000/api/admin/products/get_all",
        "get"
      );
      setProducts(response);
      setLoading(false);
    };

    Products();
  }, []);

  return (
    <React.Fragment>
      <section className="shop_area">
        <div className="container">
          <div className="area_wrapper">
            <ShopSidebar />
            <ShopMain {...{loading, products}} />
          </div>
        </div>
      </section>
      <Newsletter letterBgImage="/assets/img/others/bg-image-5.jpg" />
    </React.Fragment>
  );
}
