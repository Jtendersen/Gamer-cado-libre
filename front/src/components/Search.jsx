import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Footer from "../commons/Footer";
import Grid from "../commons/Grid";
import Cart from "./Cart/Cart";

const Search = () => {
  const { pathname } = useLocation();
  const [games, setGames] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`/api/products/search/${pathname.split("/")[3]}`)
        .then((games) => {
          setGames(games.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Cart />
      <div id="genre">
        <Grid games={games} />
      </div>
      <Footer />
    </>
  );
};

export default Search;
