import React from "react";
import Footer from "../components/Footer"; // Ensure you have a Footer component

const Contacts = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg">We&apos;d love to hear from you!</p>

        {/* Contact Information */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-full max-w-md text-center">
          <p className="text-gray-600"><strong>Email:</strong> contact@yourwebsite.com</p>
          <p className="text-gray-600 mt-2"><strong>Phone:</strong> +1 234 567 890</p>
          <p className="text-gray-600 mt-2"><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
