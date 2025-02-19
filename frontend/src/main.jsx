import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./main.css";
import App from "./components/App.jsx"; // Corrected path

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
