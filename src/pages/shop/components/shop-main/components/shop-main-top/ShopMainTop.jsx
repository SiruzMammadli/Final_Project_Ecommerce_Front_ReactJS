import "./styles/shop-main-top.scss";
import "./styles/responsive-shop-main-top.scss";

export default function ShopMainTop() {
  return (
    <div className="shop_top p-inline-15">
      <div className="select_by">
        <span className="ordering">Sırala:</span>
        <select className="single_select">
          <option>Ada görə</option>
          <option>Yenilər əvvəlcə</option>
          <option>Populyar məhsullar əvvəlcə</option>
          <option>Populyar məhsullar sonda</option>
          <option>Əvvəlcə ucuz</option>
          <option>Əvvəlcə baha</option>
        </select>
      </div>
    </div>
  );
}
