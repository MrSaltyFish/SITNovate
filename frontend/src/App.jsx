import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AnalysisPage from "./pages/AnalysisPage";
import AboutUsPage from "./pages/AboutUsPage";
import UserLogin from "./pages/UserLogin";
import StartPage from "./pages/StartPage";
import UserRegister from "./pages/UserRegister";

import Start from "./pages/Start";
import Home from "./pages/Home";
import AnalyticsPage from "./pages/AnalyticsPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/homepageours" element={<HomePage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/startpage" element={<StartPage />} />

        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/register' element={<UserRegister />} />
        <Route path = '/home' element={<Home />} />
        <Route path = '/AnalyticsPage' element={<AnalyticsPage />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
