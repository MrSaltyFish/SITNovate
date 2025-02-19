import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import AnalysisPage from "../pages/AnalysisPage";
import AboutUsPage from "../pages/AboutUsPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
};

export default App;
