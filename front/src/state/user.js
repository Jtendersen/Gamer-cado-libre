import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

// export const sendLoginRequest = createAsyncThunk("LOGIN_USER", (userObj) => {
//   return axios
//     .post("/api/auth/login", userObj, { withCredentials: true })
//     .catch((err) => err.response.data);
// });

export const sendLoginRequest = createAsyncThunk("LOGIN", (input) => {
  return axios
    .post("/api/auth/login", input, {
      withCredentials: true,
      credentials: "include",
    })
    .then((resp) => {
      
      return resp.data;
    })
    
  // .then((r) => {
  // localStorage.setItem("user", JSON.stringify(r.data));
  //       // return r.data;
  // });
});

export const sendSignUpRequest = createAsyncThunk("SIGNUP", (input) => {
  return axios.post("/api/auth/register", input);
});

export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios.post("/api/auth/logout")
});

export const setUser = createAsyncThunk("SETUSER", (input) => {
  return input;
});

// const user = JSON.parse(window.localStorage.getItem("user"));

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
