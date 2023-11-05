import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import wishlistSlice from "./wishlistSlice";

const store=configureStore({
    reducer:{
        cart:CartSlice,
        wishlist:wishlistSlice
    }
})

export default store