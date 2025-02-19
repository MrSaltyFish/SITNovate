import React from "react";
import SentimentChart from "../components/SentimentChart.jsx";

const Analytics = () => {
  return (
    <section className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center p-18">
      
      {/* Heading Section */}
      <div className="w-full text-center p-8 border border-black shadow-md bg-white rounded-2xl">
        <h1 className="text-3xl font-bold">TODO HEADING</h1>
      </div>

      {/* Main Grid Section */}
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Sentiment Analysis Box */}
          <div className="h-1/2 p-6 border border-black shadow-md bg-white rounded-2xl flex">
            {/* Left Side - Total Tweet Volume */}
            <div className="w-2/5 flex flex-col justify-center items-center border-r border-gray-300 p-4">
              <div className="text-lg font-semibold text-blue-700 border-b pb-2 mb-2">Total Tweet Volume</div>
              <div className="flex-1"></div>
            </div>
            {/* Right Side - Sentiment Chart */}
            <div className="w-3/5 flex justify-center items-center p-4">
              <SentimentChart />
            </div>
          </div>
          {/* Keyword Trends Box */}
          <div className="h-1/2 p-6 border border-black shadow-md bg-white rounded-2xl flex flex-col">
            <div className="text-lg font-semibold text-blue-700 border-b pb-2 mb-2">Keyword Trends</div>
            <div className="flex-1"></div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Data Visualization Box */}
          <div className="h-1/2 flex gap-6">
            <div className="w-3/5 p-6 border border-black shadow-md bg-white rounded-2xl flex flex-col">
              <div className="text-lg font-semibold text-green-700 border-b pb-2 mb-2">Graph/Chart</div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="flex flex-col gap-4">
                  <div className="flex-1 p-4 border border-gray-300 shadow-md bg-white rounded-lg">Top Box</div>
                  <div className="h-1/3 p-4 border border-gray-300 shadow-md bg-white rounded-lg">Bottom Box</div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex-1 p-4 border border-gray-300 shadow-md bg-white rounded-lg">Box 1</div>
                  <div className="flex-1 p-4 border border-gray-300 shadow-md bg-white rounded-lg">Box 2</div>
                  <div className="flex-1 p-4 border border-gray-300 shadow-md bg-white rounded-lg">Box 3</div>
                </div>
              </div>
            </div>
            <div className="w-2/5 flex flex-col gap-6">
              <div className="h-1/2 p-6 border border-black shadow-md bg-white rounded-2xl flex flex-col">
                <div className="text-lg font-semibold text-green-700 border-b pb-2 mb-2">Stats A</div>
                <div className="flex-1"></div>
              </div>
              <div className="h-1/2 p-6 border border-black shadow-md bg-white rounded-2xl flex flex-col">
                <div className="text-lg font-semibold text-green-700 border-b pb-2 mb-2">Stats B</div>
                <div className="flex-1"></div>
              </div>
            </div>
          </div>
          {/* User Engagement Box */}
          <div className="h-1/2 p-6 border border-black shadow-md bg-white rounded-2xl flex flex-col">
            <div className="text-lg font-semibold text-green-700 border-b pb-2 mb-2">User Engagement</div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;

