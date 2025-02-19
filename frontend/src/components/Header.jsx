import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo & Company Name */}
      <div className="flex items-center">
        <img
          src="/logo.png" // Ensure this path is correct
          alt="Logo"
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="ml-3 text-2xl font-bold text-gray-800 font-goudy">
          Sentiment <br />
          Analyzer
        </span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/home" className="text-lg text-gray-700 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/analysis" className="text-lg text-gray-700 hover:text-blue-500">
              Analysis
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg text-gray-700 hover:text-blue-500">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg text-gray-700 hover:text-blue-500">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
