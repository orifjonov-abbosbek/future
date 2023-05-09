import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root/Root";
import { BrowserRouter } from "react-router-dom";
import "./base.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
