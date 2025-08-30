// src/services/carService.js (Demo Version)
// import api from './api'; // Comment out real API
import { demoCarsList, demoSelectedCar } from '../utils/demoData'; // Import demo data

// --- Mock delay function ---
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// --- Simple filter function ---
const applyFilters = (cars, filters) => {
  return cars.filter(car => {
    let match = true;
    if (filters.make && car.make.toLowerCase().indexOf(filters.make.toLowerCase()) === -1) {
      match = false;
    }
    if (filters.model && car.model.toLowerCase().indexOf(filters.model.toLowerCase()) === -1) {
      match = false;
    }
    if (filters.minPrice && car.price < parseFloat(filters.minPrice)) {
      match = false;
    }
    if (filters.maxPrice && car.price > parseFloat(filters.maxPrice)) {
      match = false;
    }
    // Add more filter conditions as needed (e.g., year, fuelType)
    return match;
  });
};

export const getCars = async (filters = {}) => {
  console.log("Demo: Fetching cars with filters:", filters);
  await delay(800); // Simulate network delay

  let filteredCars = [...demoCarsList];
  if (Object.keys(filters).length > 0) {
    filteredCars = applyFilters(demoCarsList, filters);
  }

  // Simulate API response structure { data: [...] }
  return { data: filteredCars };
};

export const getCarById = async (id) => {
  console.log("Demo: Fetching car by ID:", id);
  await delay(500);
  // Find the car in the demo list
  const car = demoCarsList.find(c => c.id === id) || demoSelectedCar; // Fallback to first car
  return { data: car };
};

export const createCar = async (carData) => {
  console.log("Demo: Creating car:", carData);
  await delay(1000);
  // Simulate successful creation
  const newCar = { id: `NEW${Date.now()}`, ...carData, addedDate: new Date().toISOString() };
  return { data: newCar };
};

// Add similar mocks for other service functions if needed