import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";


export const sendLoginRequest = createAsyncThunk("LOGIN", (input) => {
  return axios
    .post("/api/auth/login", input, {
      withCredentials: true,
      credentials: "include",
    })
    .then(({data}) => data);
    
});

export const sendSignUpRequest = createAsyncThunk("SIGNUP", (input) => {
  return axios.post("/api/auth/register", input)
  .then(({data})=> data);
});

export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios.post("/api/auth/logout")
});

export const setUser = createAsyncThunk("SETUSER", (input) => {
  return input;
});

export const changeUserInfo = createAsyncThunk("SETUSER", (input) => {
  return input;
});


const userReducer = createReducer(
  {},
  {
    [sendLoginRequest.fulfilled]: (state, action) => action.payload,
    [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
    [sendSignUpRequest.fulfilled]: (state, action) => action.payload,
    [setUser.fulfilled]: (state, action) => action.payload,
  }
);

export default userReducer;
