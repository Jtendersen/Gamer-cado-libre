import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./commons/Navbar";
import Footer from "./commons/Footer";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import Content from "./components/Content";
import { Products } from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Genre from "./components/Genre";
import Search from "./components/Search";
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";
import {setCart} from "./state/cart"
import SubNavbarGenre from "./commons/SubNavbarGenre";
import Admin_panel from "./components/admin_panel";
import Admin_genres from "./components/admin_panel/Admin_genres";
import Admin_products from "./components/admin_panel/Admin_products";
import Admin_users from "./components/admin_panel/Admin_users";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {

    let storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) dispatch(setUser(storedUser));
    //let storedCart = JSON.parse(localStorage.getItem("cart"))
     //if(storedCart) dispatch(setCart(storedCart))

  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Navbar />
            <SubNavbarGenre />
            <Content />
            <Footer />
            <Cart />
          </div>
        }
      />
      <Route path="/user" element={""} />
      <Route path="/cart" element={""} />
      <Route
        path="/signup"
        element={
          <>
            <SignUp />
          </>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/products/:genre" element={<Genre />} />
      <Route path="/products/search/:name" element={<Search />} />
      <Route path="/product/:name" element={<Product />} />
      <Route path="/admin" element={<Admin_panel/>} />
      <Route path='/admin/allUsers' element={<Admin_users/>}/>
      <Route path="/admin/genres" element={<Admin_genres/>} />
      <Route path="/admin/products" element={<Admin_products/>}/>
    </Routes>
  );
}

export default App;
