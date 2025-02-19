import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md py-4 mt-8">
      <div className="container mx-auto flex flex-col items-center space-y-2">
        <div className="flex space-x-6">
          <Link to="/about" className="text-gray-600 hover:text-green-500">
            About Us
          </Link>
          <Link to="/privacy" className="text-gray-600 hover:text-green-500">
            Privacy Policy
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-green-500">
            Contact
          </Link>
        </div>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Sentiment Analyzer. All rights reserved.</p>
      </div>

      
    </footer>
  );
};

export default Footer;
