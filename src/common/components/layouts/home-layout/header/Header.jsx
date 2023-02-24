import "./styles/_header.scss";
import "./styles/_responsive_header.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import MobileNavbar from "./components/mobile-navbar/MobileNavbar";
import ToggleCart from "./components/toggle-cart/ToggleCart";

export default function Header() {
  const [navMenu, setNavMenu] = React.useState(false);
  const [toggleCart, setToggleCart] = React.useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header_wrapper">
          <div className="logo_brand">
            <Link to="/" className="brand brand_dark">
              eTicarət
            </Link>
            <Link to="/" className="brand-short brand_dark">
              eT
            </Link>
          </div>
          <ul className="nav_menu">
            <li className="menu_item">
              <NavLink to="/" activeclassname="active">
                Əsas səhifə
              </NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/shop" activeclassname="active">
                Məhsullar
              </NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/blog" activeclassname="active">
                Bloqlar
              </NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/about" activeclassname="active">
                Haqqımızda
              </NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/contact" activeclassname="active">
                Əlaqə
              </NavLink>
            </li>
          </ul>
          <div className="header_actions">
            <ul className="action_list">
              <li className="search">
                <input type="text" placeholder="Nə axtarırsınız?" />
                <button type="submit" className="btn_search">
                  <i className="bx bx-search search_icon"></i>
                </button>
              </li>
              <li className="mobile_search">
                <button className="mobile_btn_search btn_search">
                  <i className="bx bx-search search_icon"></i>
                </button>
              </li>
              <li className="wishlist">
                <button>
                  <i className="bx bx-heart"></i>
                </button>
              </li>
              <li className="cart">
                <span className="cart_count">3</span>
                <button onClick={() => setToggleCart(true)}>
                  <i className="bx bx-cart-alt"></i>
                </button>
              </li>
              <li className="account">
                <button>
                  <i className="bx bx-user"></i>
                </button>
              </li>
              <li className="mobile_toggle">
                <button onClick={() => setNavMenu(true)}>
                  <i className="bx bx-menu"></i>
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Nav Menu */}
          <div className={navMenu ? "mobile_navbar show" : "mobile_navbar"}>
              <MobileNavbar setNavMenu={setNavMenu} />
          </div>
          {/* End Mobile Nav Menu */}
          {/* Toggle Cart */}
          <div className={toggleCart ? "toggle_cart show" : "toggle_cart"}>
            <ToggleCart setToggleCart={setToggleCart}/>
          </div>
          {/* End Toggle Cart */}
          <div className={navMenu || toggleCart ? "menu_overlay show" : "menu_overlay"}></div>
        </div>
      </div>
    </header>
  );
}
