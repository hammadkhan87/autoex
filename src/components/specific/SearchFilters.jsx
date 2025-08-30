// src/components/specific/SearchFilters.jsx
import React, { useState, useEffect } from 'react';

const SearchFilters = ({ onFilterChange, currentFilters }) => {
  const [localFilters, setLocalFilters] = useState(currentFilters || {});

  useEffect(() => {
    setLocalFilters(currentFilters || {});
  }, [currentFilters]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(localFilters);
  };

  const handleReset = () => {
    setLocalFilters({});
    onFilterChange({});
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">Make</label>
          <input
            type="text"
            id="make"
            name="make"
            value={localFilters.make || ''}
            onChange={handleChange}
            placeholder="e.g., Toyota"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Model</label>
          <input
            type="text"
            id="model"
            name="model"
            value={localFilters.model || ''}
            onChange={handleChange}
            placeholder="e.g., RAV 4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div>
          <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">Min Price (€)</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            value={localFilters.minPrice || ''}
            onChange={handleChange}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">Max Price (€)</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={localFilters.maxPrice || ''}
            onChange={handleChange}
            placeholder="100000"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div className="md:col-span-4 flex justify-end space-x-3">
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm font-medium hover:bg-gray-300"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
          >
            Apply Filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;