import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, json, RouterProvider } from "react-router-dom";
import GetQuote from "./components/GetQuote";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import ProductsPage from "./components/ProductsPage";
import Products_config from'../src/config.json';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/getquote",
        element: <GetQuote />,
      },
      {
        path: "/bitumen",
        element: <ProductsPage  product={Products_config.products.bitumen} />,
      },
      {
        path: "/emulsion",
        element: <ProductsPage  product={Products_config.products.emulsion} />,
      },
      {
        path: "/steel",
        element: <ProductsPage  product={Products_config.products.steel} />,
      },
      {
        path: "/cement",
        element: <ProductsPage  product={Products_config.products.cement} />,
      },
      {
        path: "/oil",
        element: <ProductsPage  product={Products_config.products.oil} />,
      },
      {
        path: "/petrolium",
        element: <ProductsPage  product={Products_config.products.petrolium} />,
      },
      {
        path: "/roadinfra",
        element: <ProductsPage  product={Products_config.products.roadinfra} />,
      },
    
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
