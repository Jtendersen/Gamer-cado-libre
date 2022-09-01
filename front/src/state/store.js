import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import cartReducer from "./cart";
import searchReducer from "./search";
import userReducer from "./user";
import openCartReducer from "./handleCart"
import productReducer from "./product";
import handleCartReducer from "./handleCart"

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
      cart: cartReducer,
      user: userReducer,
      search:searchReducer,
      product: productReducer
      handleCart: handleCartReducer,
      },
  });

export default store;
