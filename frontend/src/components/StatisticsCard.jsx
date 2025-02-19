import React from "react";

const StatisticsCard = ({ value, label }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatisticsCard;
