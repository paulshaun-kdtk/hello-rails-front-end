import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk('greetings/fetchGreeting', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/greetings/index');
    return response.data;
  } catch (error) {
    console.error('Error fetching greeting:', error);
    throw error;
  }
});

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    message: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectGreeting = (state) => state.greetings.message;

export default greetingsSlice.reducer;
