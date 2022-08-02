import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  list: 'rating',
  listName: 'популярности',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortList(state, action) {
      state.list = action.payload.filter;
      state.listName = action.payload.name;
    },
  },
});

export const { setCategoryId, setSortList } = filterSlice.actions;

export default filterSlice.reducer;
