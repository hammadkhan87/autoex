// src/services/authService.js (Demo Version)
// import api from './api'; // Comment out real API
import { demoBuyerAccount, demoSellerAccount, demoToken } from '../utils/demoData'; // Import demo data

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Simple flag to alternate between buyer and seller for demo login
let isBuyer = true;

export const login = async (credentials) => {
  console.log("Demo: Logging in with:", credentials);
  await delay(1000); // Simulate network delay

  // Simple demo logic: alternate user type or check email
  let user;
  if (credentials.email.toLowerCase().includes('buyer')) {
    user = demoBuyerAccount;
  } else if (credentials.email.toLowerCase().includes('seller')) {
     user = demoSellerAccount;
  } else {
     // Default alternate for generic login like 'test@test.com'
     user = isBuyer ? demoBuyerAccount : demoSellerAccount;
     isBuyer = !isBuyer; // Flip for next call
  }

  if (credentials.email === user.email && credentials.password === "password123") {
    return { user, token: demoToken };
  } else {
    // Simulate error
    const error = new Error('Invalid credentials');
    error.response = { data: { message: 'Invalid email or password.' } };
    throw error;
  }
};

export const register = async (userData) => {
  console.log("Demo: Registering user:", userData);
  await delay(1500);
  // Simulate successful registration
  const newUser = { id: `USER${Date.now()}`, ...userData };
  return { user: newUser, token: demoToken };
};

export const logout = async () => {
  console.log("Demo: Logging out");
  await delay(300);
  // In a real app, you might call an API endpoint here
  // For demo, just clearing local storage is handled in the slice
};

export const updateProfile = async (userId, userData) => {
  console.log("Demo: Updating profile for user", userId, "with data:", userData);
  await delay(800);
  // Simulate successful update
  // In a real app, you'd probably fetch the updated user from the backend
  return { ...demoBuyerAccount, ...userData }; // Simplified for demo
};