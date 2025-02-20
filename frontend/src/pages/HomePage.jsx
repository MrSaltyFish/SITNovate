import React, { useState } from "react";
import TextInput from "../components/TextInput"; // Ensure this is correctly imported
import SentimentChart from "../components/SentimentChart"; // Placeholder for your chart component
import StatisticsCard from "../components/StatisticsCard";

const HomePage = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex h-screen p-12 bg-gray-100">
      {/* Full-Sized Rounded Card */}
      <div className="w-full h-full bg-white rounded-2xl p-12 shadow-xl flex flex-col justify-center items-center">
        {/* Text Input Section */}
        <div className="w-3/4">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            What do you want to see the sentiment for?
          </h2>
          <TextInput 
            label="Enter Topic" 
            placeholder="e.g. Bitcoin, Elections" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
