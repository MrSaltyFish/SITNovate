import React, { useEffect, useState } from "react";
import SentimentChart from "../components/SentimentChart.jsx";
import TextInput from "../components/TextInput.jsx";
import Button from "../components/Button.jsx";
import { motion } from "framer-motion";

const AnalyticsPage = () => {
  const [tweetVolume, setTweetVolume] = useState(0);
  const [sentimentData, setSentimentData] = useState(null);
  const [trendingKeywords, setTrendingKeywords] = useState([]);
  const [topCompanies, setTopCompanies] = useState([]);
  const [topInfluencer, setTopInfluencer] = useState("");
  const [topUser, setTopUser] = useState("");
  const [userEngagement, setUserEngagement] = useState(null);
  const [searchTopic, setSearchTopic] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/search`);
      const data = await response.json();
      setTweetVolume(data.totalTweets);
      setSentimentData(data.sentiment);
      setTrendingKeywords(data.trendingKeywords);
      setTopCompanies(data.topCompanies);
      setTopInfluencer(data.topInfluencer);
      setTopUser(data.topUser);
      setUserEngagement(data.userEngagement);
    } catch (error) {
      console.error("Error fetching sentiment data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="w-full min-h-screen bg-background text-text flex flex-col p-6 md:p-12 items-center">
      {/* Heading Section */}
      <motion.div 
        className="w-full flex flex-col md:flex-row items-center justify-between p-6 border border-border shadow-md bg-card rounded-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-primary">Sentiment Analysis Dashboard</h1>
          <p className="text-lg text-mutedText">Real-Time Social Media Insights</p>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0 flex items-center justify-center space-x-4">
          <TextInput placeholder="Enter a keyword..." value={searchTopic} onChange={(e) => setSearchTopic(e.target.value)} />
          <Button label="Search" variant="primary" onClick={fetchData} />
        </div>
      </motion.div>
      {/* Main Content */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Sentiment Analysis Card */}
        <motion.div 
          className="p-6 border border-border shadow-md bg-card rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-lg font-semibold text-primary">Total Tweet Volume</h2>
          <p className="text-2xl font-bold">{tweetVolume}</p>
          <p className="text-md text-mutedText">😀 {sentimentData?.positive}% 😡 {sentimentData?.negative}% 😐 {sentimentData?.neutral}%</p>
          <SentimentChart />
        </motion.div>
        {/* Trending Keywords */}
        <motion.div 
          className="p-6 border border-border shadow-md bg-card rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-primary">Trending Hashtags</h2>
          <p className="text-md text-mutedText">🚀 {trendingKeywords.join(", ")}</p>
        </motion.div>
        {/* Most Discussed Companies */}
        <motion.div 
          className="p-6 border border-border shadow-md bg-card rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-lg font-semibold text-primary">Most Discussed Companies</h2>
          <p className="text-md text-mutedText">🏢 {topCompanies.join(", ")}</p>
        </motion.div>
        {/* Top Influencer */}
        <motion.div 
          className="p-6 border border-border shadow-md bg-card rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-lg font-semibold text-primary">Top Influencer</h2>
          <p className="text-md text-mutedText">🌟 {topInfluencer}</p>
        </motion.div>
        {/* Most Active Users */}
        <motion.div 
          className="p-6 border border-border shadow-md bg-card rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <h2 className="text-lg font-semibold text-primary">Most Active User</h2>
          <p className="text-md text-mutedText">👥 {topUser}</p>
        </motion.div>
        {/* User Engagement */}
        <motion.div 
          className="p-6 border border-border shadow-md bg-card rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <h2 className="text-lg font-semibold text-primary">User Engagement</h2>
          <p className="text-md text-mutedText">❤️ Likes: {userEngagement?.likes}</p>
          <p className="text-md text-mutedText">🔄 Shares: {userEngagement?.shares}</p>
          <p className="text-md text-mutedText">⏰ Peak Activity: {userEngagement?.peakTime}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsPage;
