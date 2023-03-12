import React from "react";
import { Link } from "react-router-dom";

export default function AuthHeader({ preBtnString, btnString, btnHref }) {
  return (
    <div className="auth_header">
      <div className="logo_brand"><Link to="/">eTicarət</Link></div>
      <div className="signin_header_btn">
        <p>{preBtnString}</p>
        <Link to={btnHref} className="signin_btn">
          {btnString}
        </Link>
      </div>
    </div>
  );
}
