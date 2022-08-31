import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import cartReducer from "./cart";
import searchReducer from "./search";
import userReducer from "./user";
import handleCartReducer from "./handleCart"


const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
      cart: cartReducer,
      user: userReducer,
      search:searchReducer,
      handleCart: handleCartReducer,
      
      },
  });

export default store;
