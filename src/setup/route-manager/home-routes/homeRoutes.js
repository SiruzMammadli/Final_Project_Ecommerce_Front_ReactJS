import Cart from "../../../pages/cart/Cart";
import Home from "../../../pages/home/Home";
import Shop from "../../../pages/shop/Shop";

export const homeRoutes = [
    {
      element: <Home />,
      index: true,
    },
    {
      path: "shop",
      element: <Shop />,
    },
    {
      path: "cart",
      element: <Cart/>
    }
  ]