import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
