import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendLoginRequest = createAsyncThunk("LOGIN", (input) => {
  
 return axios.post("/api/login",input).then((r)=> r.data)
});

export const sendSigninRequest = createAsyncThunk("SIGNIN", (input) => {
  return axios.post("/api/signin",input).then((r)=> r.data)
 });

export const sendLogoutRequest = createAsyncThunk("LOGIN", (input) => {
  return axios.post("/api/logout",input).then(()=> null)
 });


const user = JSON.parse(window.localStorage.getItem("user"))

const userReducer = createReducer(user,{
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
  [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
  [sendSigninRequest.fulfilled]: (state, action) => action.payload,
  
  
});

export default userReducer;