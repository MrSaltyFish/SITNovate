import React, { useEffect, useState } from "react";
import SentimentChart from "../components/SentimentChart.jsx";
import TextInput from "../components/TextInput.jsx";
import Button from "../components/Button.jsx";

const AnalyticsPage = () => {
  const [tweetVolume, setTweetVolume] = useState(0);
  const [sentimentData, setSentimentData] = useState({ positive: 0, negative: 0, neutral: 0 });
  const [trendingKeywords, setTrendingKeywords] = useState([]);
  const [topCompanies, setTopCompanies] = useState([]);
  const [topInfluencer, setTopInfluencer] = useState("");
  const [topUser, setTopUser] = useState("");
  const [userEngagement, setUserEngagement] = useState({ likes: 0, shares: 0, peakTime: "" });
  const [searchTopic, setSearchTopic] = useState("");


  useEffect(() => {
    fetch("/api/sentiment")
      .then((res) => res.json())
      .then((data) => {
        setTweetVolume(data.totalTweets);
        setSentimentData(data.sentiment);
        setTrendingKeywords(data.trendingKeywords);
        setTopCompanies(data.topCompanies);
        setTopInfluencer(data.topInfluencer);
        setTopUser(data.topUser);
        setUserEngagement(data.userEngagement);
      });
  }, []);

  // Function to send search topic to backend
  const handleSearch = async () => {
    if (!searchTopic.trim()) {
      alert("Please enter a search topic!");
      return;
    }

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: searchTopic }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }

      const data = await response.json();
      console.log("Search Results:", data);
      // You can update state here if you want to use the results
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <section className="w-full min-h-screen bg-gray-900 text-white flex flex-col p-6 md:p-12 items-center">
      {/* Heading Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 border border-white shadow-md bg-gray-800 rounded-2xl">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Sentiment Analysis Dashboard</h1>
          <p className="text-lg text-gray-400">Real-Time Insights from Social Media</p>
        </div>
        {/* Search Box and Button */}
        <div className="w-full md:w-1/3 mt-4 md:mt-0 flex items-center justify-center space-x-4">
          <TextInput
            label="Search Topic"
            placeholder="Enter a keyword..."
            value={searchTopic}
            onChange={(e) => setSearchTopic(e.target.value)}
          />
          <Button label="Search" variant="primary" onClick={handleSearch} />
          </div>
      </div>

      {/* Main Grid Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Sentiment Analysis Box */}
          <div className="p-6 border border-white shadow-md bg-gray-800 rounded-2xl flex flex-col lg:flex-row">
            <div className="lg:w-2/5 flex flex-col justify-center items-center border-b lg:border-r border-gray-600 p-4">
              <div className="text-lg font-semibold text-blue-400 mb-2">Total Tweet Volume</div>
              <p className="text-2xl font-bold">{tweetVolume}</p>
              <div className="text-sm text-gray-400 mt-3 text-center">
                <p>😀 Positive: {sentimentData.positive}%</p>
                <p>😡 Negative: {sentimentData.negative}%</p>
                <p>😐 Neutral: {sentimentData.neutral}%</p>
              </div>
            </div>
            <div className="lg:w-3/5 flex justify-center items-center p-4">
              <SentimentChart />
            </div>
          </div>

          {/* Keyword Trends Box */}
          <div className="p-6 border border-white shadow-md bg-gray-800 rounded-2xl">
            <div className="text-lg font-semibold text-blue-400 border-b pb-2 mb-3">Keyword Trends</div>
            <p className="text-md text-gray-400">🚀 Trending Hashtags: {trendingKeywords.join(", ")}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Data Visualization Box */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-3/5 p-6 border border-white shadow-md bg-gray-800 rounded-2xl">
              <div className="text-lg font-semibold text-green-400 border-b pb-2 mb-3">Graph/Chart</div>
              <p className="text-md text-gray-400">🏢 Most Discussed Companies: {topCompanies.join(", ")}</p>
            </div>
            <div className="lg:w-2/5 flex flex-col gap-6">
              <div className="p-6 border border-white shadow-md bg-gray-800 rounded-2xl">
                <div className="text-lg font-semibold text-green-400 border-b pb-2 mb-3">Top Influencer Tweets</div>
                <p className="text-md text-gray-400">🌟 Most Retweeted: {topInfluencer}</p>
              </div>
              <div className="p-6 border border-white shadow-md bg-gray-800 rounded-2xl">
                <div className="text-lg font-semibold text-green-400 border-b pb-2 mb-3">Most Active Users</div>
                <p className="text-md text-gray-400">👥 User: {topUser}</p>
              </div>
            </div>
          </div>

          {/* User Engagement Box */}
          <div className="p-6 border border-white shadow-md bg-gray-800 rounded-2xl">
            <div className="text-lg font-semibold text-green-400 border-b pb-2 mb-3">User Engagement</div>
            <p className="text-md text-gray-400">❤️ Total Likes in 24 Hours: {userEngagement.likes}</p>
            <p className="text-md text-gray-400">🔄 Retweets & Shares: {userEngagement.shares}</p>
            <p className="text-md text-gray-400">⏰ Peak Activity: {userEngagement.peakTime}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsPage;
