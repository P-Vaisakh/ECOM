import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
     
        state.push(action.payload);
     
    },
    removeFromWishlist: (state, action) => {
      return state.filter((i) => i.id != action.payload);
    },
  },
});

export default wishlist.reducer;
export const { addToWishlist, removeFromWishlist } = wishlist.actions;
