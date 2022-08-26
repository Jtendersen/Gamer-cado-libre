import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit"; 

export const search = createAsyncThunk('SEARCH', ()=>{
    return axios.get(`/products/search/:name`).then(res=>res.data)
} )

const searchReducer = createReducer([], {
    [search.fulfilled]: (state, action) => action.payload,
})

export default searchReducer