import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  if (location.pathname === "/" || location.pathname === "/start") return null; // Hide header on Start and StartPage

  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md bg-black text-white">
      {/* Logo & Company Name */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="ml-3 text-2xl font-bold font-goudy text-white">
          SentimentShark
        </span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          {[ 
            { path: "/home", label: "Home" },
            { path: "/analytics", label: "Analytics" },
            { path: "/about", label: "About Us" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-lg ${
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
    </header>
  );
};

export default Header;
