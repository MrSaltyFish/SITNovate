import React, { useEffect, useState } from "react";
import SentimentChart from "../components/SentimentChart.jsx";
import TextInput from "../components/TextInput.jsx";
import Button from "../components/Button.jsx";
import { motion } from "framer-motion";

const AnalyticsPage = () => {
  const [tweetVolume, setTweetVolume] = useState(0);
  const [sentimentData, setSentimentData] = useState(null);
  const [sampledThings, setSampledThings] = useState([]); // Holds API response
  const [searchTopic, setSearchTopic] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchSentimentData = async () => {
    if (!searchTopic.trim()) return; // Prevent empty requests
    setLoading(true);

    try {
      const encodedQuery = encodeURIComponent(searchTopic.trim()); // Handle spaces
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/sentiment/${encodedQuery}`);
      const data = await response.json();

      // Store the response into sampledThings
      setSampledThings(data || []);
    } catch (error) {
      console.error("Error fetching sentiment data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-gray-900 text-white flex flex-col p-6 md:p-12 items-center">
      {/* Heading Section */}
      <motion.div 
        className="w-full flex flex-col md:flex-row items-center justify-between p-6 border border-gray-700 shadow-lg bg-gray-800 rounded-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-blue-400">Sentiment Analysis Dashboard</h1>
          <p className="text-lg text-gray-400">Real-Time Social Media Insights</p>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0 flex items-center justify-center space-x-4">
          <TextInput placeholder="Enter a keyword..." value={searchTopic} onChange={(e) => setSearchTopic(e.target.value)} />
          <Button label="Search" variant="primary" onClick={fetchSentimentData} />
        </div>
      </motion.div>
      
      {/* Sampled Things (Response Boxes) */}
      <motion.div 
        className="w-full p-6 border border-gray-700 shadow-lg bg-gray-800 rounded-2xl mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-lg font-semibold text-blue-400">Sampled Things</h2>

        <div className="mt-4 space-y-4">
          {loading ? (
            <p className="text-gray-400">Fetching data...</p>
          ) : sampledThings.length > 0 ? (
            sampledThings.map((item, index) => (
              <div key={index} className="p-4 border border-gray-700 rounded-xl bg-gray-700 shadow">
                <p className="text-sm text-gray-400">📢 <span className="font-semibold text-white">{item.title}</span></p>
                <p className="text-sm text-gray-400">💡 Score: <span className="text-white">{item.score}</span></p>
                <p className="text-sm text-gray-400">🔎 Sentiment: <span className={item.sentiment === "Positive" ? "text-green-400" : item.sentiment === "Negative" ? "text-red-400" : "text-yellow-400"}>
                  {item.sentiment}
                </span></p>
                <p className="text-sm text-gray-400">🌍 Language: <span className="text-white">{item.language}</span></p>
                {item.error && (
                  <p className="text-sm text-red-400">⚠ Error: {item.error}</p>
                )}

              </div>
            ))
          ) : (
            <p className="text-gray-400">No data available.</p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default AnalyticsPage;
