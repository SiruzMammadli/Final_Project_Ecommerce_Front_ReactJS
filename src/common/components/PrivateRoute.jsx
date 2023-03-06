import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("access_token");

  return token ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Navigate to="/auth/login" replace={true} />
  );
}
