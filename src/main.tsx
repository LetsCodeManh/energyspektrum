import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, RouteProps, Routes } from "react-router-dom";
import App from "./App";
import DataProtection from "./components/Footer/DataProtection";
import Impressum from "./components/Footer/Impressum";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/energyspektrum/" element={<App />} />
        <Route
          path="/energyspektrum/datenschutz"
          element={<DataProtection />}
        />
        <Route path="/energyspektrum/impressum" element={<Impressum />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
