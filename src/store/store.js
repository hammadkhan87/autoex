// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import carReducer from '../features/cars/carSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import transactionReducer from '../features/transactions/transactionSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
    dashboard: dashboardReducer,
    transactions: transactionReducer,
  },
});

export default store;