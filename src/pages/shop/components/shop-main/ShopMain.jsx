import "./styles/shop-main.scss";
import "./styles/responsive-shop-main.scss";
import ProductItem from "./components/product-item/ProductItem";
import ShopMainTop from "./components/shop-main-top/ShopMainTop";
import useQuery from "../../../../common/hooks/usequery/useQuery";

export default function ShopMain() {
  const url = "https://localhost:5000/api/admin/products/get_all";
  // const { data, loading, error } = useQuery(url);

  // console.log(data);
  return (
    <main className="shop_main p-inline-15">
      <ShopMainTop />
      <div className="wrapper">
        {/* {loading && <span>Loading...</span>}
        {data?.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))} */}
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
      </div>
    </main>
  );
}
