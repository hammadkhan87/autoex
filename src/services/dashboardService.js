// src/services/dashboardService.js (Demo Version)
// import api from './api';
import { demoDashboardStats } from '../utils/demoData';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getStats = async () => {
  console.log("Demo: Fetching dashboard stats");
  await delay(600);
  return { data: demoDashboardStats };
};