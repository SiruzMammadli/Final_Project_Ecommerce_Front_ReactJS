import "./styles/shop-main.scss";
import "./styles/responsive-shop-main.scss";
import React from "react";
import ProductItem from "./components/product-item/ProductItem";
import ShopMainTop from "./components/shop-main-top/ShopMainTop";
import useQuery from "../../../../__test__/hooks/useQuery";
import LoadingSpinner from "../../../../__test__/components/loading/LoadingSpinner";

export default function ShopMain() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const Products = async () => {
      const { response } = await useQuery(
        "https://localhost:5000/api/admin/products/get_all",
        "get"
      );
      setData(response);
      setLoading(false);
    };

    Products();
  }, []);

  console.log(data);

  return (
    <main className="shop_main p-inline-15">
      {loading && (
        <LoadingSpinner svgWidth={150} svgHeight={150} circleWidth={3} />
      )}
      <ShopMainTop />
      <div className="wrapper">
        {data?.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
      {!loading && data && (
        <div className="shop_main_bottom">
          <button className="load_more">Daha çox</button>
        </div>
      )}
    </main>
  );
}
