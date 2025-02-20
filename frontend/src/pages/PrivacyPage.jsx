import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
  return (
    <section className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 md:p-12">
      {/* Heading Section */}
      <motion.div 
        className="w-full max-w-6xl text-center p-8 border border-gray-700 shadow-lg bg-gray-800 rounded-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-blue-400">Privacy Policy</h1>
        <p className="text-lg text-gray-400 mt-2">Updated: February 2025</p>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="w-full max-w-6xl bg-gray-800 rounded-2xl p-8 mt-6 shadow-lg border border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Introduction</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data while using our sentiment analysis dashboard.
        </p>
      </motion.div>

      <motion.div 
        className="w-full max-w-6xl bg-gray-800 rounded-2xl p-8 mt-6 shadow-lg border border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Information We Collect</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          We gather data from various sources, including:
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Public social media posts for sentiment analysis.</li>
          <li>User interaction data to enhance the dashboard experience.</li>
          <li>Analytics for improving performance and personalization.</li>
        </ul>
      </motion.div>

      <motion.div 
        className="w-full max-w-6xl bg-gray-800 rounded-2xl p-8 mt-6 shadow-lg border border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">How We Use Your Information</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The collected data is utilized to:
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Perform sentiment analysis and provide insights.</li>
          <li>Improve the accuracy and efficiency of our services.</li>
          <li>Personalize recommendations based on trends.</li>
        </ul>
      </motion.div>

      <motion.div 
        className="w-full max-w-6xl bg-gray-800 rounded-2xl p-8 mt-6 shadow-lg border border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Data Protection</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          We take security seriously and employ industry-standard measures to safeguard your data, ensuring confidentiality and compliance with data protection regulations.
        </p>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicyPage;
