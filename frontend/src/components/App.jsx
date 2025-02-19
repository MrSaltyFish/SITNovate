import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import HomePage from "../pages/HomePage";
import AnalysisPage from "../pages/AnalysisPage";
import AboutUsPage from "../pages/AboutUsPage";
import UserLogin from "../pages/UserLogin";
import StartPage from "../pages/StartPage";
import UserRegister from "../pages/UserRegister";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/startpage" element={<StartPage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/UserRegister" element={<UserRegister />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
