import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const getCart = createAsyncThunk("GETCART", (user) => {
  return axios.get(`/api/cart/${user}`).then((r)=>  r.data )
    // localStorage.setItem("cart",JSON.stringify(r.data));
   
    // return r.data;
 
});

export const addToCart = createAsyncThunk("ADDTOCART", (itemId) => {
  return axios.post("http://localhost:3001/api/cart", itemId).then((r) => {
    return r.data;
  });
});

export const removeFromCart = createAsyncThunk("REMOVEFROMCART", ({userId, itemId}) => {
  console.log(userId, itemId)

  return axios.delete(`http://localhost:3001/api/cart/delete/${userId}`,{ data: {itemId:itemId}}).then((r) => {
    console.log(r.data)
    return r.data;
  });
});

export const cartItemQuantity = createAsyncThunk(
  "CARTITEMQUANTITY",
  (recibido) => {
    //console.log("CARTITEMQUANTITY",recibido)
    return axios
      .put("http://localhost:3001/api/cart", itemId, counter)
      .then((r) => {
        // localStorage.setItem("cart", JSON.stringify(r.data));
        return r.data;
      });
  }
);

export const setCart = createAsyncThunk("SETCART", (input) => {
  return input;
});

const cartReducer = createReducer([], {
  [getCart.fulfilled]: (state, action) => action.payload,
  [addToCart.fulfilled]: (state, action) => action.payload,
  [removeFromCart.fulfilled]: (state, action) => action.payload,
  [cartItemQuantity.fulfilled]: (state, action) => action.payload,
  [setCart.fulfilled]: (state, action) => action.payload,
});

export default cartReducer;
