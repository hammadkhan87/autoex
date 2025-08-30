// src/services/transactionService.js (Demo Version)
// import api from './api';
import { demoOrderHistory } from '../utils/demoData';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getOrderHistory = async () => {
  console.log("Demo: Fetching order history");
  await delay(700);
  return { data: demoOrderHistory };
};