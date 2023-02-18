import "./styles/shop-sidebar.scss";
import Paper from "./components/toggle-paper/Paper";

export default function ShopSidebar() {

  return (
    <aside className="shop_sidebar p-inline-15">
      <Paper label="Kateqoriyalar">
        <ul>
          <li>
            <a href="#">Katoqoriya 1</a>
          </li>
          <li>
            <a href="#">Katoqoriya 2</a>
          </li>
        </ul>
      </Paper>

      <Paper label="Cinsiyyət">
        <ul>
          <li>
            <a href="#">Katoqoriya 1</a>
          </li>
          <li>
            <a href="#">Katoqoriya 2</a>
          </li>
        </ul>
      </Paper>
    </aside>
  );
}
