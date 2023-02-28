import "./styles/mobile-navbar.scss";
import React from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../../../../../hooks/useclickoutside/useClickOutside";

export default function MobileNavbar({ setNavMenu }) {
  const { menuRef, clickRef } = useClickOutside(() => setNavMenu(false));

  return (
    <div ref={menuRef} className="mobile_nav_container">
      <div className="mobile_nav_top">
        <input
          type="text"
          className="mobile_search"
          placeholder="Nə axtarırsınız?"
        />
        <button className="close_btn" onClick={() => setNavMenu(false)}>
          <i className="bx bx-x close_icon"></i>
        </button>
      </div>
      <div className="mobile_nav_body">
        <ul className="navbar_menu">
          <li>
            <Link to="/shop" ref={btn => clickRef.current[0] = btn}>Məhsullar</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
