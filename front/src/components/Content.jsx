import Grid from "../commons/Grid";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import UsePagination from "./Pagination";
import SubNavbarGenre from "../commons/SubNavbarGenre";

const Content = () => {
  const [lastIndex, setIndex] = useState(0);
  const [games, setGames] = useState([]);
  const [actualGames, setActualGames] = useState([]);
  var thisPage = useLocation();
  var thisPath = thisPage.pathname.slice(1);
  var thisPath = thisPage.pathname.slice(1) ? thisPage.pathname.slice(1) : "/";
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/allProducts")
      .then((dbGames) => {
        setGames([]);
        setActualGames([]);
        var limitPerPage = 0;
        var page = 1;
        dbGames.data.map((game, i) => {
          limitPerPage++;
          if (limitPerPage === 12) {
            page++;
            limitPerPage = 0;
          }
          game.page = page === 1 ? "/" : page;
          setGames((oldArray) => [...oldArray, game]);
          if (!dbGames.data[i + 1]) setGames((oldArray) => [page, ...oldArray]);
          if (game.page == thisPath)
            setActualGames((oldArray) => [...oldArray, game]);
        });
      });
  }, [thisPath]);
  return (
    <>
      <SubNavbarGenre />
      <div id="grid">
        <Grid games={actualGames} />
      </div>
      <UsePagination games={games} />
    </>
  );
};

export default Content;
