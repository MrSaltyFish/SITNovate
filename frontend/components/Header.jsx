import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo & Company Name */}
      <div className="flex items-center">
        <img
          src="/your-image.jpg" // Change this to your image path
          alt="Logo"
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="ml-3 text-2xl font-bold text-gray-800 font-goudy">
          Your Company
        </span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-lg text-gray-700 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-lg text-gray-700 hover:text-blue-500">
              About Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
