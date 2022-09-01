import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import cartReducer from "./cart";
import searchReducer from "./search";
import userReducer from "./user";
import openCartReducer from "./handleCart"
import genreReducer from "./genre";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
      cart: cartReducer,
      user: userReducer,
      genre:genreReducer,
      search:searchReducer,
      handleCart: openCartReducer,
      },
  });

export default store;
