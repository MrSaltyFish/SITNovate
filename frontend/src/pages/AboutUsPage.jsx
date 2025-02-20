import React from "react";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Text Section */}
      <motion.div 
        className="w-full md:w-1/2 bg-black p-10 text-white flex flex-col justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-300 mb-4">
          Our Social Media Sentiment Dashboard helps users analyze public sentiment on platforms like Twitter and Reddit.
        </p>
        <p className="text-lg text-gray-300">
          Using advanced Natural Language Processing (NLP) techniques, we provide insights into trends, emotions, and opinions 
          surrounding topics and events in real-time. Our goal is to empower businesses and individuals with actionable data 
          for informed decision-making.
        </p>
      </motion.div>

      {/* Right Side - Image Section */}
      <div className="w-full md:w-1/2 relative">
        {/* Full-Sized Logo */}
        <motion.img 
          src="/aboutUs.jpg" // Replace with actual logo path
          alt="Logo"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Black Gradient Overlay (Left to Right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>
    </div>
  );
};

export default AboutUsPage;
