// src/features/transactions/transactionSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as transactionService from '../../services/transactionService';

export const fetchOrderHistory = createAsyncThunk(
  'transactions/fetchOrderHistory',
  async (_, { rejectWithValue }) => {
    try {
      const response = await transactionService.getOrderHistory();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch order history');
    }
  }
);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrderHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default transactionSlice.reducer;