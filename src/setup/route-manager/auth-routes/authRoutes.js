import Login from "../../../pages/auth/login/Login";
import Register from "../../../pages/auth/register/Register";

export const authRoutes = [
  {
    path: "login",
    element: <Login />,
    index: true,
  },
  {
    path: "register",
    element: <Register/>
  }
];
