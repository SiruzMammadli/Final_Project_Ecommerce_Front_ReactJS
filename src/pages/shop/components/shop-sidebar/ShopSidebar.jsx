import "./styles/shop-sidebar.scss";
import "./styles/responsive-shop-sidebar.scss";
import Paper from "./components/toggle-paper/Paper";

export default function ShopSidebar() {
  return (
    <aside className="shop_sidebar p-inline-15">
      <Paper label="Kateqoriyalar">
        <ul className="drop_menu">
          <li>
            <a href="#" className="active">
              <i className="bx bx-check check"></i>Katoqoriya 1
            </a>
          </li>
          <li>
            <a href="#">Katoqoriya 2</a>
          </li>
          <li>
            <a href="#">Katoqoriya 3</a>
          </li>
          <li>
            <a href="#">Katoqoriya 4</a>
          </li>
        </ul>
      </Paper>

      <Paper label="Brend">
        <ul className="drop_menu">
          <li>
            <a href="#" className="active">
              <i className="bx bx-check check"></i>Apple (40)
            </a>
          </li>
          <li>
            <a href="#">Samsung (56)</a>
          </li>
        </ul>
      </Paper>
      <Paper label="Qiymət">Tezliklə...</Paper>
    </aside>
  );
}
