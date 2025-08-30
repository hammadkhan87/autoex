// src/pages/CarListingPage.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../features/cars/carSlice';
import SearchFilters from '../components/specific/SearchFilters';
import CarCard from '../components/specific/CarCard';

const CarListingPage = ({ saleType }) => { // saleType prop can still be used if needed
  const dispatch = useDispatch();
  // Select data from Redux store
  const { carsList, loading, error, filters } = useSelector((state) => state.cars);

  // Fetch cars when the component mounts or filters/saleType change
  useEffect(() => {
    // You can merge saleType into filters if it's a specific filter
    // const mergedFilters = { ...filters, saleType };
    dispatch(fetchCars(filters)); // Fetch using current Redux filters
  }, [dispatch, filters]); // Removed saleType dependency for now

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Available Cars</h1>
        <div className="mt-4 md:mt-0 text-sm text-gray-600">
          Showing {carsList.length} {carsList.length === 1 ? 'car' : 'cars'}
        </div>
      </div>
      
      <SearchFilters /> {/* Include the filter component */}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">Failed to load cars: {error}</span>
        </div>
      ) : carsList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {carsList.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-white rounded-lg shadow-sm border border-gray-200">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No cars found</h3>
          <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
          <div className="mt-6">
            <button
              onClick={() => dispatch(fetchCars({}))} // Reset and fetch all
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View All Cars
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarListingPage;