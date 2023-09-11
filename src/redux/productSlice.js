import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    getProducts(state, action) {
      return action.payload;
    },
    getProduct(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = productSlice;
export const { getProducts, getProduct } = actions;
export default reducer;
