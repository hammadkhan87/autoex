// src/pages/CarDetailPage.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarById, clearSelectedCar } from '../features/cars/carSlice';

const CarDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCar, loading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCarById(id));
    return () => {
        // Cleanup: Clear selected car when component unmounts
        dispatch(clearSelectedCar());
    };
  }, [dispatch, id]);

  if (loading) return <div className="text-center py-10">Loading car details...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  if (!selectedCar) return <div className="text-center py-10">Car not found.</div>;

  return (
    <div className="max-w-6xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={selectedCar.image || 'https://placehold.co/600x400?text=Car+Image'} alt={selectedCar.make} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{selectedCar.make} {selectedCar.model} {selectedCar.version}</h1>
          <p className="text-xl text-blue-700 font-semibold mb-4">€{selectedCar.price?.toLocaleString()}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="font-medium">Year:</span> {selectedCar.year}</div>
            <div><span className="font-medium">Mileage:</span> {selectedCar.mileage?.toLocaleString()} km</div>
            <div><span className="font-medium">Fuel:</span> {selectedCar.fuelType}</div>
            <div><span className="font-medium">Transmission:</span> {selectedCar.transmission}</div>
            <div><span className="font-medium">Engine Size:</span> {selectedCar.engineSize} L</div>
            <div><span className="font-medium">Power:</span> {selectedCar.power} HP</div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{selectedCar.description || 'No description provided.'}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Condition</h2>
            <p className="text-gray-700"><span className="font-medium">Physical State:</span> {selectedCar.physicalState}</p>
            <p className="text-gray-700"><span className="font-medium">Technical State:</span> {selectedCar.technicalState}</p>
            <p className="text-gray-700"><span className="font-medium">Tyres State:</span> {selectedCar.tyresState}</p>
            <p className="text-gray-700"><span className="font-medium">Damages:</span> {selectedCar.damages || 'None reported'}</p>
          </div>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Make an Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;