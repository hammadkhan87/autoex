// src/components/specific/SearchFilters.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, fetchCars } from '../../features/cars/carSlice'; // Import actions

const SearchFilters = () => {
  // Get current filters from Redux state
  const currentFilters = useSelector((state) => state.cars.filters);
  const dispatch = useDispatch();

  // Local state for the form, initialized with current Redux filters
  const [localFilters, setLocalFilters] = useState(currentFilters || {});

  // Sync local state with Redux state if it changes externally (e.g., reset)
  useEffect(() => {
    setLocalFilters(currentFilters || {});
  }, [currentFilters]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update local state immediately for responsive UI
    setLocalFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the action to update filters in Redux
    dispatch(setFilters(localFilters));
    // Dispatch fetchCars to reload the list with new filters
    dispatch(fetchCars(localFilters)); // Pass filters directly
  };

  const handleReset = () => {
    // Reset local state
    setLocalFilters({});
    // Dispatch reset action to Redux
    dispatch(setFilters({}));
    // Fetch all cars again (no filters)
    dispatch(fetchCars({}));
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
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
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
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
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="md:col-span-4 flex flex-wrap justify-end gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md text-sm font-medium transition duration-150 ease-in-out"
          >
            Reset Filters
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition duration-150 ease-in-out shadow-sm"
          >
            Apply Filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;