// NPM packages
import React from "react";
import ReactDOM from "react-dom/client";

// Project files
import App from "./App";
import { ProductProvider } from "./state/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <App />
  </ProductProvider>
);
