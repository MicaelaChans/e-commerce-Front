import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      state.push({ ...item });
    },
    removeItem(state, action) {
      
    },
    removeAll(state, action){
      return [];
    },
  },
});

export const { addItem, removeItem, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
