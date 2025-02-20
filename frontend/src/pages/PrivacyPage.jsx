import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <section className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center p-12">
      {/* Heading Section */}
      <div className="w-full text-center p-8 border border-white shadow-md bg-gray-800 rounded-2xl">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl bg-gray-800 rounded-2xl p-8 mt-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-300 mb-6">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data when using our sentiment analysis dashboard.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="text-gray-300 mb-6">
          We collect various types of information, including data from social media platforms, user interactions, and analytics to improve our services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="text-gray-300 mb-6">
          The collected data is used for sentiment analysis, service improvements, and providing you with personalized insights.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
        <p className="text-gray-300 mb-6">
          We implement security measures to protect your data and ensure confidentiality.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
