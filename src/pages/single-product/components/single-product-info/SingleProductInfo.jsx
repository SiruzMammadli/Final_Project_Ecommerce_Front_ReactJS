import "./styles/single-product-info.scss";

export default function SingleProductInfo() {
  return (
    <div className="single_product_info p-inline-15">
      <h2 className="product_title">3D™ naqilsiz qulaqcıq</h2>
      <span className="product_price">155.00₼</span>
      <ul className="product_meta">
        <li>
          <i class="bx bx-check icon"></i> Stokda var
        </li>
        <li>
          <i class="bx bx-check icon"></i> Pulsuz çatdırılma
        </li>
      </ul>
      <p className="description">
        In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante
        est, elementum eget magna. Pellentesque sagittis dictum libero, eu
        dignissim tellus.
      </p>
    </div>
  );
}
