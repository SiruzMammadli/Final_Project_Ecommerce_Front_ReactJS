import "./styles/_header.scss";
import "./styles/_responsive_header.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import MobileNavbar from "./components/mobile-navbar/MobileNavbar";
import ToggleCart from "./components/toggle-cart/ToggleCart";
import useClickOutside from "../../../../hooks/useclickoutside/useClickOutside";

export default function Header() {
  const [navMenu, setNavMenu] = React.useState(false);
  const [toggleCart, setToggleCart] = React.useState(false);
  const [accountDropdown, setAccountDropdown] = React.useState(false);
  const { menuRef, clickRef } = useClickOutside(() =>
    setAccountDropdown(false)
  );
  const token = localStorage.getItem("access_token");

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
                <button className="mobile_btn_search">
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
                <button onClick={() => setAccountDropdown(!accountDropdown)}>
                  <i className="bx bx-user"></i>
                </button>
                <div
                  ref={menuRef}
                  className={
                    accountDropdown
                      ? "account_dropdown show"
                      : "account_dropdown"
                  }
                >
                  <span className="title">Keçidlər</span>
                  <ul>
                    <li>
                      <Link
                        to="/account"
                        ref={(btn) => (clickRef.current[0] = btn)}
                      >
                        Hesabım
                      </Link>
                    </li>
                    <li>
                      <a href="#" ref={(btn) => (clickRef.current[1] = btn)}>
                        Dəstək
                      </a>
                    </li>
                    <li>
                      <a href="#">Dil</a>
                    </li>
                  </ul>
                  {!token ? (
                    <React.Fragment>
                      <Link to="auth/login" className="btn_login">
                        Sayta daxil ol
                      </Link>
                      <div className="reg_area">
                        Hesabınız yoxdur?
                        <Link to="/auth/register" className="btn_link">
                          Hesab yarat
                        </Link>
                      </div>
                    </React.Fragment>
                  ) : <Link to="/" className="btn_login" onClick={() => localStorage.removeItem("access_token")}>
                  Hesabdan çıx
                </Link>}
                </div>
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
            <ToggleCart setToggleCart={setToggleCart} />
          </div>
          {/* End Toggle Cart */}
          <div
            className={
              navMenu || toggleCart ? "menu_overlay show" : "menu_overlay"
            }
          ></div>
        </div>
      </div>
    </header>
  );
}
