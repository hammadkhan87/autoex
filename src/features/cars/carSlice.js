// src/features/cars/carSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as carService from '../../services/carService';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (filters = {}, { rejectWithValue }) => {
    try {
      const response = await carService.getCars(filters);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch cars');
    }
  }
);

export const fetchCarById = createAsyncThunk(
  'cars/fetchCarById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await carService.getCarById(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch car details');
    }
  }
);

export const addCar = createAsyncThunk(
  'cars/addCar',
  async (carData, { rejectWithValue }) => {
    try {
      const response = await carService.createCar(carData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to add car');
    }
  }
);

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    carsList: [],
    selectedCar: null,
    filters: {},
    loading: false,
    error: null,
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    clearSelectedCar: (state) => {
      state.selectedCar = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.carsList = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addCar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCar.fulfilled, (state, action) => {
        state.loading = false;
        state.carsList.push(action.payload);
      })
      .addCase(addCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters, clearSelectedCar } = carSlice.actions;
export default carSlice.reducer;