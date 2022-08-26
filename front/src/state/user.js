import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendLoginRequest = createAsyncThunk("LOGIN", (input) => {
  
 return axios.post("http://localhost:3001/api/auth/login",input).then((r)=> {
  console.log("LOGIN",r.data)
  localStorage.setItem("user",JSON.stringify(r.data))
  return r.data})
});

export const sendSigninRequest = createAsyncThunk("SIGNIN", (input) => {
  
  return axios.post("http://localhost:3001/api/auth/register",input).then((r)=>{
    localStorage.setItem("user",JSON.stringify(r.data))
    return r.data
  }
  )
 });

export const sendLogoutRequest = createAsyncThunk("LOGOUT", (input) => {
  return axios.post("http://localhost:3001/api/auth/logout",input).then(()=> {
    localStorage.setItem("user",null)
    return null})
 });

 export const setUser = createAsyncThunk("SET", (input) => {
  return input
 });


const user = JSON.parse(window.localStorage.getItem("user"))

const userReducer = createReducer(user,{
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
  [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
  [sendSigninRequest.fulfilled]: (state, action) => action.payload,
  [sendSigninRequest.fulfilled]: (state, action) => action.payload,
  
  
});

export default userReducer;