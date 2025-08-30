// src/pages/CarListingPage.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../features/cars/carSlice';
import SearchFilters from '../components/specific/SearchFilters';
import CarCard from '../components/specific/CarCard';

const CarListingPage = ({ saleType }) => {
  const dispatch = useDispatch();
  const { carsList, loading, error, filters } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars({ ...filters, saleType }));
  }, [dispatch, filters, saleType]);

  const handleFilterChange = (newFilters) => {
    console.log("Filters changed:", newFilters);
    // Implement setFilters action and logic in carSlice
    // dispatch(setFilters(newFilters));
    // The useEffect above would then trigger fetchCars with the new filters
  };

  if (loading) return <div className="text-center py-10">Loading cars...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error loading cars: {error}</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Available Cars</h1>
      <SearchFilters onFilterChange={handleFilterChange} currentFilters={filters} />
      {carsList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {carsList.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">
          <p>No cars found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CarListingPage;