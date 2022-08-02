import { configureStore } from '@reduxjs/toolkit';
import backetSlice from './reducers/backetSlice';
import filterSlice from './reducers/filterSlice';

export const store = configureStore({
  reducer: {
    filterReducer: filterSlice,
    backetReducer: backetSlice,
  },
});
