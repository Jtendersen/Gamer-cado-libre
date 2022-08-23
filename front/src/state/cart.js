import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";



export const getCart = createAsyncThunk("CART", () => {
  return axios.get("/api/cart").then((r) => r.data);
});

export const addToCart = createAsyncThunk("CART", (input) => {
    return axios.post("/api/cart").then((r) => r.data);
  });

  export const removeFromCart = createAsyncThunk("CART", (input) => {
    return axios.delete("/api/cart").then((r) => r.data);
  });




const cartReducer = createReducer([], {
  [getCart.fulfilled]: (state, action) => action.payload,
  [addToCart.fulfilled]: (state, action) => action.payload,
  [removeFromCart.fulfilled]: (state, action) => action.payload,
  

  
});

export default cartReducer;