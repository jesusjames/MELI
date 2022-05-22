
// INITIAL STATE
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isLoading: false,
  error: null,
  data: {}
};

// ACTIONS CREATORS AND REDUCER
const { actions, reducer } = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    productsFetchInit: (state) => {
      state.isLoading = true;
    },
    productFetchInit: (state) => {
      state.isLoading = true;
    },
    productsFetchSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    productsFetchError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const ProductsReducer = reducer;
export const ProductsActions = actions;
