import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white shadow-md py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4 px-4 text-center md:flex-row md:justify-between md:text-left">
        {/* Navigation Links */}
        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
          <Link to="/about" className="text-gray-400 hover:text-green-400">
            About Us
          </Link>
          <Link to="/privacy" className="text-gray-400 hover:text-green-400">
            Privacy Policy
          </Link>
          <Link to="/contact" className="text-gray-400 hover:text-green-400">
            Contact
          </Link>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Sentiment Analyzer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
