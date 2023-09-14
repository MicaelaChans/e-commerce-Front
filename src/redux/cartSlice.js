import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      return state;
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addItem, removeItem } = actions;
export default reducer;
