import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productsList/fetchProducts",
  async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  }
);

const productsSlice = createSlice({
  name: "productsList",
  initialState: {
    loading: false,
    allProducts: [],
    searchArr: [],
    error: "",
  },
  reducers: {
    searchProduct: (state, action) => {
      state.allProducts = state.searchArr.filter((i) =>
        i.title
          .toLowerCase()
          .trim()
          .includes(action.payload.toLowerCase().trim())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.searchArr = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.allProducts = [];
    });
  },
});

export default productsSlice.reducer;
export const {searchProduct}=productsSlice.actions
