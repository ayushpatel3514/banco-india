// src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 👉 This component listens to route changes and resets scroll */}
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
