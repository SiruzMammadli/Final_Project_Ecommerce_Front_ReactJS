import React from "react";

export default function AuthLeft({leftSideBgImg}) {
  return (
    <div
      className="auth_left"
      style={{
        backgroundImage: leftSideBgImg,
      }}
    >
      <h3 className="title">Biz ən keyfiyyətli məhsulları təklif edirik</h3>
    </div>
  );
}
