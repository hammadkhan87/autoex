// src/components/specific/AddCarWizard/Step3.jsx
import React, { useState, useEffect } from 'react';

const Step3 = ({ onSubmit, onBack, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});

  useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Condition & Description</h2>
      <div>
        <label htmlFor="physicalState" className="block text-sm font-medium text-gray-700 mb-1">Physical State</label>
        <select
          id="physicalState"
          name="physicalState"
          value={formData.physicalState || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
          <option value="Poor">Poor</option>
        </select>
      </div>
      <div>
        <label htmlFor="technicalState" className="block text-sm font-medium text-gray-700 mb-1">Technical State</label>
        <select
          id="technicalState"
          name="technicalState"
          value={formData.technicalState || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
          <option value="Poor">Poor</option>
        </select>
      </div>
      <div>
        <label htmlFor="tyresState" className="block text-sm font-medium text-gray-700 mb-1">Tyres State</label>
        <select
          id="tyresState"
          name="tyresState"
          value={formData.tyresState || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select</option>
          <option value="New">New</option>
          <option value="Good">Good</option>
          <option value="Worn">Worn</option>
        </select>
      </div>
      <div>
        <label htmlFor="damages" className="block text-sm font-medium text-gray-700 mb-1">Damages</label>
        <textarea
          id="damages"
          name="damages"
          value={formData.damages || ''}
          onChange={handleChange}
          rows="3"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Describe any damages..."
        ></textarea>
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description || ''}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Add a detailed description of the car..."
        ></textarea>
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
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Car
        </button>
      </div>
    </form>
  );
};

export default Step3;