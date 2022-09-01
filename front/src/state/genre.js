import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const get_genres = createAsyncThunk("GENRE", () =>
  axios.get("/api/genres").then((res) => res.data)
);

export const remove_genre = createAsyncThunk("REMOVE_GENRE", (id, thunkAPI) =>
  axios
    .delete(`/api/genres/${id}`)
    .then(() => thunkAPI.dispatch(get_genres()).then((res) => res.data))
);

export const edit_genre = createAsyncThunk(
  "EDIT_GENRE",
  (payload, thunkAPI) => {
    const { id, input } = payload;
    return axios
      .put(`/api/genres/${id}`, { input })
      .then(() => thunkAPI.dispatch(get_genres()).then((res) => res.data));
  }
);

export const add_genre = createAsyncThunk("ADD_GENRE", (genre, thunkAPI) => {
  return axios
    .post(`/api/genres`, { genre })
    .then(() => thunkAPI.dispatch(get_genres()).then((res) => res.data));
});

const genreReducer = createReducer([], {
  [get_genres.fulfilled]: (state, action) => action.payload,
  [remove_genre.fulfilled]: (state, action) => action.payload,
  [edit_genre.fulfilled]: (state, action) => action.payload,
  [add_genre.fulfilled]: (state, action) => action.payload,
});

export default genreReducer;
