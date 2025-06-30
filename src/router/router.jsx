

import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./../Components/RootLayout";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import NotFound from "../Pages/NotFound";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import CartPage from "../Pages/CartPage";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, 
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "productDetails/:id",
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

export default rootRouter;
