import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import AnalyticsPage from "./pages/AnalyticsPage";
import PrivacyPage from "./pages/PrivacyPage";
import ContactPage from "./pages/ContactPage";
import { Billing, Business, CardDeal, Clients, CTA, Navbar, Stats, Testimonials, Hero } from "./components";

import Start from "./pages/Start";
import Home from "./pages/Home";
// import { styles } from './constants/style';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />

        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/register' element={<UserRegister />} />
        <Route path = '/home' element={<Home />} />
        <Route path = '/homepageWhat' element={<HomePage />} />
        <Route path = '/contact' element={<ContactPage />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
