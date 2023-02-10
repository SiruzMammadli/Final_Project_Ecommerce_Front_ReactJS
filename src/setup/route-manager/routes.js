import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../../common/components/layouts/home-layout/HomeLayout";
import { homeRoutes } from "./home-routes/homeRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: homeRoutes,
  },
]);
