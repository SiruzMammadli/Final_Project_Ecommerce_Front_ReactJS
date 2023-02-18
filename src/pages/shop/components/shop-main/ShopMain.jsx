import "./styles/shop-main.scss";

export default function ShopMain() {
  return (
    <main className="shop_main p-inline-15">
      <div className="shop_top">
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
    </main>
  );
}
