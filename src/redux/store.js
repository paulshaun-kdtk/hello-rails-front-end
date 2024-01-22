import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './slices/GreetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
