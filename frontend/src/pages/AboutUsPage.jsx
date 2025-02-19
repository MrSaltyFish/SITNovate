import React from "react";

const AboutUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        Our Social Media Sentiment Dashboard helps users analyze public sentiment on platforms like Twitter and Reddit. 
        Using advanced Natural Language Processing (NLP) techniques, we provide insights into trends, emotions, and opinions 
        surrounding topics and events in real-time. Our goal is to empower businesses and individuals with actionable data 
        for informed decision-making.
      </p>
    </div>
  );
};

export default AboutUsPage;
