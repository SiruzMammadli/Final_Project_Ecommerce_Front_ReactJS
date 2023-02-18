import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/_header.scss";
import "./styles/_responsive_header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_wrapper">
          <div className="logo_brand">
            <Link to="/" className="brand brand_dark">
              eTicarət
            </Link>
          </div>
          <ul className="nav_menu">
            <li className="menu_item">
              <NavLink to="/" activeclassname="active">Əsas səhifə</NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/shop" activeclassname="active">Məhsullar</NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/blog" activeclassname="active">Bloqlar</NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/about" activeclassname="active">Haqqımızda</NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/contact" activeclassname="active">Əlaqə</NavLink>
            </li>
          </ul>
          <div className="header_actions">
            <ul className="action_list">
              <li className="search">
                <input type="text" placeholder="Nə axtarırsınız?"/>
                <button type="submit" className="btn_search">
                  <i className="bx bx-search search_icon"></i>
                </button>
              </li>
              <li className="mobile_search">
                <a href="#" className="mobile_btn_search btn_search">
                  <i className="bx bx-search search_icon"></i>
                </a>
              </li>
              <li className="wishlist">
                <a href="#">
                  <i className="bx bx-heart"></i>
                </a>
              </li>
              <li className="cart">
                <span className="cart_count">3</span>
                <a href="#">
                  <i className="bx bx-cart-alt"></i>
                </a>
              </li>
              <li className="account">
                <a href="#">
                  <i className="bx bx-user"></i>
                </a>
              </li>
              <li className="mobile_toggle">
                <a href="#">
                  <i className="bx bx-menu"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
