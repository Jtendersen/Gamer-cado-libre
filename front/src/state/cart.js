import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const getCart = createAsyncThunk("GETCART", (user) => {
  return axios.get(`/api/cart/${user}`).then((r) => r.data);
});

export const addToCart = createAsyncThunk("ADDTOCART", (itemId) => {
  return axios.post("/api/cart", itemId).then((r) => {
    return r.data;
  });
});

export const removeFromCart = createAsyncThunk(
  "REMOVEFROMCART",
  ({ userId, itemId }) => {
    return axios
      .delete(`/api/cart/delete/${userId}`, {
        data: { itemId: itemId },
      })
      .then((r) => r.data);
  }
);

export const cartItemQuantity = createAsyncThunk(
  "CARTITEMQUANTITY",
  ({ userId, productId, quantity }) => {
    return axios
      .put(`/api/cart//${userId}`, { productId, quantity })
      .then(({ data }) => data);
  }
);

export const makeOrder = createAsyncThunk("MAKEORDER", (orderDetails) => {
  return axios.post(`/api/order`, orderDetails).then(() => []);
});

const cartReducer = createReducer([], {
  [getCart.fulfilled]: (state, action) => action.payload,
  [addToCart.fulfilled]: (state, action) => action.payload,
  [removeFromCart.fulfilled]: (state, action) => action.payload,
  [cartItemQuantity.fulfilled]: (state, action) => action.payload,
  [makeOrder.fulfilled]: (state, action) => action.payload,
});

export default cartReducer;
