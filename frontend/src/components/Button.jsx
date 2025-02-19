import React from "react";

const Button = ({ label, variant = "primary", onClick, className = "" }) => {
  const baseStyles =
    "px-6 py-2 rounded-lg border-2 font-semibold transition-all duration-200";

  const variantStyles = {
    primary: "bg-green-600 text-white border-green-600 hover:bg-green-700",
    theme:
      "bg-white dark:bg-black text-black dark:text-white border-green-600 hover:bg-gray-100 dark:hover:bg-gray-800",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
