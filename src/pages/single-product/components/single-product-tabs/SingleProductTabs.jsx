import "./styles/single-product-tabs.scss";

export default function SingleProductTabs() {
  return (
    <section className="single_product_tabs">
      <div className="container p-inline-15">
        <ul className="nav_tab" role="tablist">
          <li className="tab_item">
            <a id="additionalInfo" class="active" href="#">
              Əlavə məlumatlar
            </a>
          </li>
          <li className="tab_item">
            <a id="comments" href="#">
              Rəylər
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
