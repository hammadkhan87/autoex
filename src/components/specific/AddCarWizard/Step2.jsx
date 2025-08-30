// src/components/specific/AddCarWizard/Step2.jsx
import React, { useState, useEffect } from 'react';

const Step2 = ({ onNext, onBack, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});

  useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleNext} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Car Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700 mb-1">Fuel Type</label>
          <select
            id="fuelType"
            name="fuelType"
            value={formData.fuelType || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div>
          <label htmlFor="transmission" className="block text-sm font-medium text-gray-700 mb-1">Transmission</label>
          <select
            id="transmission"
            name="transmission"
            value={formData.transmission || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="engineSize" className="block text-sm font-medium text-gray-700 mb-1">Engine Size (L)</label>
          <input
            type="number"
            id="engineSize"
            name="engineSize"
            value={formData.engineSize || ''}
            onChange={handleChange}
            step="0.1"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="power" className="block text-sm font-medium text-gray-700 mb-1">Power (HP)</label>
          <input
            type="number"
            id="power"
            name="power"
            value={formData.power || ''}
            onChange={handleChange}
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2;