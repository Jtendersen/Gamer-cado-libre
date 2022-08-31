import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./commons/Navbar";
import Footer from "./commons/Footer";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import Content from "./components/Content";
import Product from "./components/Product";
import Cart from "./components/Cart/Cart";
import Genre from "./components/Genre";
import Search from "./components/Search";
import { useDispatch, useSelector} from "react-redux";
import { setUser } from "./state/user";
import { getCart } from "./state/cart";
import SubNavbarGenre from "./commons/SubNavbarGenre";
import Admin_genres from "./components/admin_panel/Admin_genres";

import axios from "axios";

import Admin_products from "./components/admin_panel/Admin_products";
import Admin_users from "./components/admin_panel/Admin_users";


axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios.get("/api/auth/me").then((resp) => {
    dispatch(setUser(resp.data))
    return resp.data})
    .then((user)=>{
      dispatch(getCart(user.id)) })
  }, []);

  
  // useEffect(() => {

  // let storedUser = JSON.parse(localStorage.getItem("user"));
  // if (storedUser) dispatch(setUser(storedUser));
  //let storedCart = JSON.parse(localStorage.getItem("cart"))
  //if(storedCart) dispatch(setCart(storedCart))

  // }, []);

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
      <Route path='/admin/allUsers' element={<Admin_users/>}/>
      <Route path="/admin/genres" element={<Admin_genres/>} />
      <Route path="/admin/products" element={<Admin_products/>}/>

    </Routes>
  );
}

export default App;
