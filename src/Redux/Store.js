import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import wishlistSlice from "./wishlistSlice";
import ProductsSlice from "./ProductsSlice";


const store=configureStore({
    reducer:{
        cart:CartSlice,
        wishlist:wishlistSlice,
        ProductsSlice
    }
})

export default store