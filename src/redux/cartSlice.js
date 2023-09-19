import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      state.push({ ...item });
    },
    removeAll(state, action){
      return [];
    },
    removeOneItem(state,action){
      console.log(action.payload)
      for(let i=0; i<state.length; i++){
        if(state[i].id == action.payload){
          state.splice(i,1);
          i = state.length;
        }
      }

    }
  },
});

export const { addItem, removeItem, removeAll, removeOneItem } = cartSlice.actions;
export default cartSlice.reducer;
