import * as React from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import Navbar from "../commons/Navbar";
import SubNavbarGenre from "../commons/SubNavbarGenre";
import { Button } from "@mui/material";
import Grid from "../commons/Grid";
import axios from "axios";
import { Stack } from "@mui/system";

const Genre = () => {
  const { genre } = useParams();
  const [games, setGames] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/allGenres/${genre}`)
      .then((games) => {
        setGames(games.data);
      });
  }, [genre]);
  console.log(games);

  return (
    <>
      <Navbar />
      <SubNavbarGenre />
      <div id="genre">
        <Grid games={games} />
      </div>
    </>
  );
};

export default Genre;
