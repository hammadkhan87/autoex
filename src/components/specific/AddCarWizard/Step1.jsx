// src/components/specific/AddCarWizard/Step1.jsx
import React, { useState, useEffect } from 'react';

const Step1 = ({ onNext, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});

  useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Basic Car Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">Make *</label>
          <input
            type="text"
            id="make"
            name="make"
            value={formData.make || ''}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Model *</label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model || ''}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Year *</label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year || ''}
            onChange={handleChange}
            min="1900"
            max={new Date().getFullYear() + 1}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-1">Mileage (km) *</label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            value={formData.mileage || ''}
            onChange={handleChange}
            min="0"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-end">
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

export default Step1;