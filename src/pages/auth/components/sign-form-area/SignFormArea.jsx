import "./styles/sign-form-area.scss";
import React from "react";

export default function SignFormArea({ children, title }) {

  return (
    <div className="form_area">
      <h3 className="form_area_title">{title}</h3>
      {children}
    </div>
  );
}
