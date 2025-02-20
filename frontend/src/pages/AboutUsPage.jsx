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
          We are a passionate team of three—<span className="text-blue-400 font-semibold">Anvesh Khode, Arya Zade, and Swarali Limaye</span>—who collaborated to create the <span className="text-green-400 font-semibold">Social Media Sentiment Analysis Dashboard</span>. Our goal is to provide real-time insights into public sentiment on platforms like Twitter and Reddit using advanced Natural Language Processing (NLP) techniques.
        </p>

        <div className="mt-6 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-blue-400">Arya Zade – Machine Learning & Design</h2>
            <p className="text-md text-gray-300">
              Arya developed the <span className="text-green-400">ML models</span> powering sentiment analysis, ensuring accurate classification of emotions and trends. She also focused on the <span className="text-green-400">design aspect</span>, making the dashboard intuitive and visually appealing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-purple-400">Swarali Limaye – Backend Development</h2>
            <p className="text-md text-gray-300">
              Swarali worked on the <span className="text-green-400">backend architecture</span>, developing APIs and integrating ML models into a seamless, efficient pipeline. She ensured the system could handle real-time sentiment analysis requests while maintaining stability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-yellow-400">Anvesh Khode – Frontend & Project Lead</h2>
            <p className="text-md text-gray-300">
              Anvesh designed and implemented the <span className="text-green-400">frontend</span> using React.js and TailwindCSS. He also had an <span className="text-green-400">overview of all aspects</span> of the project, ensuring smooth coordination between ML, backend, and UI components.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Image Section */}
      <div className="w-full md:w-1/2 relative">
        <motion.img 
          src="/aboutUs.jpg" 
          alt="Team Image"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>
    </div>
  );
};

export default AboutUsPage;
