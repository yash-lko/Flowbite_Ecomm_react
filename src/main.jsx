import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainContext from "./components/pages/MainContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <MainContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainContext>
);




