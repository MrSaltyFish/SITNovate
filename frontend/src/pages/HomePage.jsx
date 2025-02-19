import React, { useState } from "react";
import TextInput from "../components/TextInput"; // Ensure this is correctly imported
import SentimentChart from "../components/SentimentChart"; // Placeholder for your chart component

const HomePage = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex h-screen p-12 bg-gray-100 space-x-6">
      {/* Left Column - Wrapped in a rounded white card */}
      <div className="w-1/2 flex flex-col space-y-6">
        {/* Text Input Section (No Drop Shadow) */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">What do you want to see the sentiment for?</h2>
          <TextInput 
            label="Enter Topic" 
            placeholder="e.g. Bitcoin, Elections" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold">45M</h3>
            <p className="text-gray-600">Records</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold">87%</h3>
            <p className="text-gray-600">Positive</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold">13%</h3>
            <p className="text-gray-600">Negative</p>
          </div>
        </div>
      </div>

      {/* Right Column - Sentiment Chart (inside a rounded white card) */}
      <div className="w-1/2 flex items-start justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full flex justify-center">
          <SentimentChart />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
