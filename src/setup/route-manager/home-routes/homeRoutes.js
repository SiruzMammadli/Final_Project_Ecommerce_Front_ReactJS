import PrivateRoute from "../../../common/components/PrivateRoute";
import Account from "../../../pages/account/Account";
import Cart from "../../../pages/cart/Cart";
import Home from "../../../pages/home/Home";
import Shop from "../../../pages/shop/Shop";
import SingleProduct from "../../../pages/single-product/SingleProduct";

export const homeRoutes = [
  {
    element: <Home />,
    index: true,
  },
  {
    path: "shop",
    children: [
      {
        index: true,
        element: <Shop />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "account",
    element: (
      <PrivateRoute>
        <Account />
      </PrivateRoute>
    ),
  },
];
