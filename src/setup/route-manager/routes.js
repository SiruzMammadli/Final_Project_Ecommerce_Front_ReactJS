import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../common/components/layouts/auth-layout/AuthLayout";
import HomeLayout from "../../common/components/layouts/home-layout/HomeLayout";
import { authRoutes } from "./auth-routes/authRoutes";
import { homeRoutes } from "./home-routes/homeRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: homeRoutes,
  },
  {
    path: "/auth/",
    element: <AuthLayout />,
    children: authRoutes,
  },
]);
