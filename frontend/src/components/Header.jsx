import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide header on specific routes
  if (location.pathname === "/" || location.pathname === "/start" || location.pathname === "/login" || location.pathname === "/register" ) return null;

  return (
    <header className="bg-black text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo & Name */}
        <div className="flex items-center">
          <img
            src="/logoo.jpg"
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
          <span className="ml-3 text-xl md:text-2xl font-bold font-goudy">
            SentimentShark
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {[
            { path: "/home", label: "Home" },
            { path: "/analytics", label: "Analytics" },
            { path: "/about", label: "About Us" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg transition-colors ${
                location.pathname === item.path
                  ? "font-bold underline text-blue-400"
                  : "text-white hover:text-blue-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-black border-t border-gray-700">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            {[
              { path: "/home", label: "Home" },
              { path: "/analytics", label: "Analytics" },
              { path: "/about", label: "About Us" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-lg py-2 ${
                    location.pathname === item.path
                      ? "font-bold underline text-blue-400"
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
