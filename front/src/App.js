import "./App.css";
import Navbar from "./commons/Navbar";
import Footer from "./commons/Footer";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import Content from "./components/Content";
import Product from "./components/Product";
import Cart from "./components/Cart/Cart";
import Genre from "./components/Genre";
import Search from "./components/Search";
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";
import { getCart } from "./state/cart";

import Admin_genres from "./components/admin_panel/Admin_genres";
import { useEffect } from "react";
import axios from "axios";
import Admin_products from "./components/admin_panel/Admin_products";
import Admin_users from "./components/admin_panel/Admin_users";
import SingularUser from "./components/SingularUser";
import Settings from "./components/Settings";
import { Route, Routes } from "react-router";

import { createTheme, ThemeProvider } from "@mui/material";

axios.defaults.withCredentials = true;

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#0e2998",
    },
    secondary: {
      main: "#f7de41",
    },
    error: {
      main: "#ff1b1b",
    },
    info: {
      main: "#0024d8",
    },
    text: {
      main: "rgba(0, 0, 0, 0.54)",
    },
  },
});

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("/api/auth/me")
      .then((resp) => {
        dispatch(setUser(resp.data));
        return resp.data;
      })
      .then((user) => {
        dispatch(getCart(user.id));
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Cart />

      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user/history" element={<SingularUser />} />
        <Route path="/user/settings" element={<Settings />} />
        <Route path="/*" element={<Content />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/products/:genre" element={<Genre />} />
        <Route path="/products/search/:name" element={<Search />} />
        <Route path="/product/:name" element={<Product />} />
        <Route path="/admin/allUsers" element={<Admin_users />} />
        <Route path="/admin/genres" element={<Admin_genres />} />
        <Route path="/admin/products" element={<Admin_products />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
