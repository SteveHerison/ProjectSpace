import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./page/layout";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <main className="h-screen w-screen">
        <Layout />
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
