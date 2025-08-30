// src/components/specific/CarCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <img src={car.image || 'https://placehold.co/300x200?text=Car+Image'} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate">{car.make} {car.model} {car.version}</h3>
        <p className="text-gray-600 text-sm mb-3">Year: {car.year} | Mileage: {car.mileage?.toLocaleString()} km</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-bold text-blue-700">€{car.price?.toLocaleString()}</span>
          <Link
            to={`/car/${car.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm px-3 py-1 rounded border border-blue-600 hover:bg-blue-50"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;