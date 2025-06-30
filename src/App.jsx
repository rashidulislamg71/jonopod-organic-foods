import React from "react";
import { RouterProvider } from "react-router-dom";
import rootRouter from "./router/router";
import { ProductsProvider } from "./Context/productContext";

function App() {
  return (
    <div>
      <ProductsProvider>
        <RouterProvider router={rootRouter} />
      </ProductsProvider>
    </div>
  );
}

export default App;
