import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput"; // Ensure this is correctly imported
import SentimentChart from "../components/SentimentChart"; // Placeholder for your chart component

const HomePage = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex h-screen p-8">
      {/* Left Column */}
      <div className="w-1/2 flex flex-col space-y-8">
        {/* Text Input Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">What do you want to see the sentiment for?</h2>
          <TextInput 
            label="Enter Topic" 
            placeholder="e.g. Bitcoin, Elections" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <h3 className="text-2xl font-bold">45M</h3>
            <p className="text-gray-600">Records</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <h3 className="text-2xl font-bold">87%</h3>
            <p className="text-gray-600">Positive</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <h3 className="text-2xl font-bold">13%</h3>
            <p className="text-gray-600">Negative</p>
          </div>
        </div>
      </div>

      {/* Right Column - Sentiment Chart */}
      <div className="w-1/2 flex justify-center items-center">
        <SentimentChart />
      </div>
    </div>
  );
};

export default HomePage;
