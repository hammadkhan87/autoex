// src/services/carService.js (Demo Version)
// import api from './api'; // Comment out real API
import { demoCarsList, demoSelectedCar, demoDashboardStats, demoOrderHistory } from '../utils/demoData'; // Import demo data

// --- Mock delay function ---
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getCars = async (filters = {}) => {
  console.log("Demo: Fetching cars with filters:", filters);
  await delay(800); // Simulate network delay
  // In a real app, you'd filter demoCarsList based on `filters`
  return { data: demoCarsList }; // Mimic API response structure { data: [...] }
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