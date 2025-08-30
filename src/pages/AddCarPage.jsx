// src/pages/AddCarPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from '../features/cars/carSlice';
import Step1 from '../components/specific/AddCarWizard/Step1';
import Step2 from '../components/specific/AddCarWizard/Step2'; // Placeholder
import Step3 from '../components/specific/AddCarWizard/Step3'; // Placeholder

const AddCarPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [carData, setCarData] = useState({ step1: {}, step2: {}, step3: {} });
  const dispatch = useDispatch();

  const handleNext = (data) => {
    setCarData(prev => ({ ...prev, [`step${currentStep}`]: data }));
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (data) => {
    const finalData = { ...carData.step1, ...carData.step2, ...carData.step3, ...data };
    dispatch(addCar(finalData));
    // Handle success/error and redirect
    alert('Car added successfully!');
    // Reset form or navigate
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Add a New Car for Sale</h1>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          {[1, 2, 3].map(step => (
            <div key={step} className={`flex-1 text-center ${step < currentStep ? 'text-green-600' : step === currentStep ? 'text-blue-600 font-bold' : 'text-gray-500'}`}>
              Step {step}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(currentStep / 3) * 100}%` }}></div>
        </div>
      </div>

      {currentStep === 1 && <Step1 onNext={handleNext} initialData={carData.step1} />}
      {currentStep === 2 && <Step2 onNext={handleNext} onBack={handleBack} initialData={carData.step2} />}
      {currentStep === 3 && <Step3 onSubmit={handleSubmit} onBack={handleBack} initialData={carData.step3} />}
    </div>
  );
};

export default AddCarPage;