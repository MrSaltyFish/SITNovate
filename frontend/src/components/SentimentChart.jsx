import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", positive: 60, negative: 40 },
  { name: "Feb", positive: 75, negative: 25 },
  { name: "Mar", positive: 85, negative: 15 },
  { name: "Apr", positive: 70, negative: 30 },
];

export default function SentimentChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <defs>
          {/* Gradient for Positive Sentiment */}
          <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7B61FF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#7B61FF" stopOpacity={0} />
          </linearGradient>

          {/* Gradient for Negative Sentiment */}
          <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />

        {/* Positive Area */}
        <Area
          type="monotone"
          dataKey="positive"
          stroke="#7B61FF"
          strokeWidth={3}
          fill="url(#colorPositive)"
          dot={{ r: 6, fill: "#7B61FF", stroke: "white", strokeWidth: 2 }}
        />

        {/* Negative Area */}
        <Area
          type="monotone"
          dataKey="negative"
          stroke="#3B82F6"
          strokeWidth={3}
          fill="url(#colorNegative)"
          dot={{ r: 6, fill: "#3B82F6", stroke: "white", strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
