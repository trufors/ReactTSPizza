import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

export const backetSlice = createSlice({
  name: 'backet',
  initialState,
  reducers: {
    addItemBacket(state, action) {
      const findItem = state.items.find((obj) => obj.title === action.payload.title);
      console.log(findItem);
      if (findItem) {
        findItem.count++;
        state.totalCount++;
        state.totalPrice += findItem.price;
      } else {
        state.items.push({ ...action.payload, count: 1 });
        state.totalCount++;
        state.totalPrice += action.payload.price;
      }
    },
    onClickPlusCart(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      findItem.count++;
      state.totalCount++;
      state.totalPrice += findItem.price;
    },
    onClickMinusCart(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem.count > 1) {
        findItem.count--;
        state.totalCount--;
        state.totalPrice -= findItem.price;
      } else {
        state.items = state.items.filter((obj) => obj.id !== findItem.id);
      }
    },
    removeItemBacket(state, action) {
      const newItems = state.items.filter((obj) => obj.id !== action.payload);
      console.log(newItems);
      console.log(action.payload);
      state.items = newItems;
    },
    clearAllBacket(state) {
      state.items = [];
    },
  },
});

export const {
  onClickMinusCart,
  onClickPlusCart,
  removeItemBacket,
  addItemBacket,
  clearAllBacket,
} = backetSlice.actions;

export default backetSlice.reducer;
