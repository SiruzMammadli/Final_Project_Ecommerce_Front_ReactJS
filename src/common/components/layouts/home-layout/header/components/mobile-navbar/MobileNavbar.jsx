import "./styles/mobile-navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function MobileNavbar({ setNavMenu }) {
  return (
    <div className="mobile_nav_container">
      <div className="mobile_nav_top">
        <input
          type="text"
          className="mobile_search"
          placeholder="Nə axtarırsınız?"
        />
        <button className="close_btn" onClick={() => setNavMenu(false)}>
          <i class="bx bx-x close_icon"></i>
        </button>
      </div>
      <div className="mobile_nav_body">
        <ul className="navbar_menu">
          <li>
            <Link to="/shop">Məhsullar</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
