import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    login(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return state;
    },
  },
});

const { actions, reducer } = productSlice;
export const { login, logout } = actions;
export default reducer;
