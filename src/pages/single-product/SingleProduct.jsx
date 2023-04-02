import React from "react";
import SingleProductInfo from "./components/single-product-info/SingleProductInfo";
import SingleProductSlider from "./components/single-product-slider/SingleProductSlider";
import "./styles/single-product.scss";
import "./styles/responsive-single-product.scss";
import SingleProductTabs from "./components/single-product-tabs/SingleProductTabs";
import { useParams } from "react-router-dom";
import useQuery from "../../__test__/hooks/useQuery";
import LoadingSpinner from "../../__test__/components/loading/LoadingSpinner";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const Product = async () => {
      const { response } = await useQuery(
        `https://localhost:5000/api/admin/products/get_by_id/${id}`,
        "get"
      );
      setProduct(response);
      setLoading(false);
    };

    Product();
  }, []);

  return (
    <section className="single_product">
      <div className="container p-inline-15">
        <div className="product_wrapper">
          {loading && (
            <LoadingSpinner svgWidth={150} svgHeight={150} circleWidth={3} />
          )}
          {!loading && product && (
            <>
              <SingleProductSlider />
              <SingleProductInfo product={product?.data}/>
            </>
          )}
        </div>
      </div>
      <SingleProductTabs />
    </section>
  );
}
