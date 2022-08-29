import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendLoginRequest = createAsyncThunk("LOGIN", (input) => {
  
 return axios.post("http://localhost:3001/api/auth/login",input).then((r)=> {
  localStorage.setItem("user",JSON.stringify(r.data))
  return r.data})
});

export const sendSignUpRequest = createAsyncThunk("SIGNUP", (input) => {
  
  return axios.post("http://localhost:3001/api/auth/register",input)
 
 });

export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios.post("http://localhost:3001/api/auth/logout").then(()=> {
    localStorage.setItem("user",null)
    return null})
 });

 export const setUser = createAsyncThunk("SETUSER", (input) => {
  return input
 });


const user = JSON.parse(window.localStorage.getItem("user"))

const userReducer = createReducer(user,{
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
  [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
  [sendSignUpRequest.fulfilled]: (state, action) => action.payload,
  [setUser.fulfilled]: (state, action) => action.payload,
  
  
});

export default userReducer;