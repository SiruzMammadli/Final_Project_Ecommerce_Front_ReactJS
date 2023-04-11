import CartTable from "./components/cart-table/CartTable";
import "./styles/cart.scss";

export default function Cart() {
  return (
    <div className="container">
      <div className="cart_wrapper p-inline-15">
        <div className="product_table_top">
          <h2 className="title">Səbət</h2>
          <button className="cart_clear_btn">Səbəti sıfırla</button>
        </div>
        <div className='cart_table'>
          <CartTable/>
        </div>
      </div>
    </div>
  );
}
