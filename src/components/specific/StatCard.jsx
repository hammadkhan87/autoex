// src/components/specific/StatCard.jsx
import React from 'react';

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center">
      {icon && <div className="mr-4 text-blue-500">{icon}</div>}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-1">{value}</h3>
        <p className="text-gray-600 text-sm md:text-base">{title}</p>
      </div>
    </div>
  );
};

export default StatCard;