import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";



export const getCart = createAsyncThunk("GETCART", (itemId) => {
  return axios.get(" http://localhost:3001/api/cart",itemId).then((r) => {
  localStorage.setItem("cart",JSON.stringify(r.data))
  console.log(r.data)
   return r.data})
  
});

export const addToCart = createAsyncThunk("ADDTOCART", (itemId) => {
     axios.post("http://localhost:3001/api/cart",itemId).then((r) => {
    return r.data});
  });

export const removeFromCart = createAsyncThunk("REMOVEFROMCART", (itemId) => {
    return axios.delete("http://localhost:3001/api/cart",itemId).then((r) => {
    return r.data});
  });
  
export const cartItemQuantity= createAsyncThunk("CARTITEMQUANTITY", (itemId,counter) => {
    return axios.put("http://localhost:3001/api/cart",itemId,counter).then((r) => {
   localStorage.setItem("cart",JSON.stringify(r.data))
    return r.data});
  });

export const setCart = createAsyncThunk("SETCART", (input) => {
    return input
   });







const cartReducer = createReducer([], {
  [getCart.fulfilled]: (state, action) => action.payload,
  [addToCart.fulfilled]: (state, action) => action.payload,
  [removeFromCart.fulfilled]: (state, action) => action.payload,
  [cartItemQuantity.fulfilled]: (state, action) => action.payload,
  
  

  
});

export default cartReducer;