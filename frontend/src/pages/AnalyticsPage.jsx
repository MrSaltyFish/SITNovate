import React, { useEffect, useState } from "react";
import SentimentChart from "../components/SentimentChart.jsx";

const AnalyticsPage = () => {
  const [tweetVolume, setTweetVolume] = useState(0);
  const [sentimentData, setSentimentData] = useState({ positive: 0, negative: 0, neutral: 0 });
  const [trendingKeywords, setTrendingKeywords] = useState([]);
  const [topCompanies, setTopCompanies] = useState([]);
  const [topInfluencer, setTopInfluencer] = useState("");
  const [topUser, setTopUser] = useState("");
  const [userEngagement, setUserEngagement] = useState({ likes: 0, shares: 0, peakTime: "" });

  useEffect(() => {
    // Fetch data from backend API
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

  return (
    <section className="w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-18">
      {/* Heading Section */}
      <div className="w-full text-center p-8 border border-white shadow-md bg-gray-800 rounded-2xl">
        <h1 className="text-3xl font-bold">Sentiment Analysis Dashboard</h1>
        <p className="text-lg text-gray-400">Real-Time Insights from Social Media</p>
      </div>

      {/* Main Grid Section */}
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Sentiment Analysis Box */}
          <div className="h-1/2 p-6 border border-white shadow-md bg-gray-800 rounded-2xl flex">
            <div className="w-2/5 flex flex-col justify-center items-center border-r border-gray-600 p-6">
              <div className="text-lg font-semibold text-blue-400 border-b pb-2 mb-2">Total Tweet Volume</div>
              <p className="text-xl font-bold mb-2">{tweetVolume}</p>
              <div className="text-sm text-gray-400 flex flex-col items-center">
                <p>😀 Positive: {sentimentData.positive}%</p>
                <p>😡 Negative: {sentimentData.negative}%</p>
                <p>😐 Neutral: {sentimentData.neutral}%</p>
              </div>
            </div>
            <div className="w-3/5 flex justify-center items-center p-4">
              <SentimentChart />
            </div>
          </div>
          {/* Keyword Trends Box */}
          <div className="h-1/2 p-6 border border-white shadow-md bg-gray-800 rounded-2xl flex flex-col">
            <div className="text-lg font-semibold text-blue-400 border-b pb-2 mb-2">Keyword Trends</div>
            <p className="text-md text-gray-400">🚀 Trending Hashtags: {trendingKeywords.join(", ")}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Data Visualization Box */}
          <div className="h-1/2 flex gap-6">
            <div className="w-3/5 p-6 border border-white shadow-md bg-gray-800 rounded-2xl flex flex-col">
              <div className="text-lg font-semibold text-green-400 border-b pb-2 mb-2">Graph/Chart</div>
              <p className="text-md text-gray-400">🏢 Most Discussed Companies: {topCompanies.join(", ")}</p>
            </div>
            <div className="w-2/5 flex flex-col gap-6">
              <div className="h-1/2 p-6 border border-white shadow-md bg-gray-800 rounded-2xl flex flex-col">
                <div className="text-lg font-semibold text-green-400 border-b pb-2 mb-2">Top Influencer Tweets</div>
                <p className="text-md text-gray-400">🌟 Most Retweeted: {topInfluencer}</p>
              </div>
              <div className="h-1/2 p-6 border border-white shadow-md bg-gray-800 rounded-2xl flex flex-col">
                <div className="text-lg font-semibold text-green-400 border-b pb-2 mb-2">Most Active Users</div>
                <p className="text-md text-gray-400">👥 User: {topUser}</p>
              </div>
            </div>
          </div>
          {/* User Engagement Box */}
          <div className="h-1/2 p-6 border border-white shadow-md bg-gray-800 rounded-2xl flex flex-col">
            <div className="text-lg font-semibold text-green-400 border-b pb-2 mb-2">User Engagement</div>
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
