import "./styles/account-sidebar.scss";

export default function AccountSidebar() {
  return (
    <aside className="account_sidebar p-inline-15">
      <ul className="nav_tab">
        <li className="tab_item active">
          <a href="#">
            <i className="bx bxs-dashboard icon"></i> Kontrol paneli
          </a>
        </li>
        <li className="tab_item">
          <a href="#">
            <i className="bx bx-basket icon"></i> Sifarişlər
          </a>
        </li>
        <li className="tab_item">
          <a href="#">
            <i className="bx bx-home icon"></i> Ünvanlar
          </a>
        </li>
        <li className="tab_item">
          <a href="#">
            <i className="bx bx-user icon"></i> Məxfilik
          </a>
        </li>
        <li className="tab_item">
          <a href="#">
            <i className="bx bx-log-out icon"></i> Hesabdan çıx
          </a>
        </li>
      </ul>
    </aside>
  );
}
