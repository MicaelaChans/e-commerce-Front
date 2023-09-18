import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      console.log(action.payload);
      state.push({ ...item });
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === itemId
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== itemId
          );
        }
        state.counter -= 1;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
