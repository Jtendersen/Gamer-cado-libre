
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router'
import { useParams } from "react-router";
import Navbar from '../commons/Navbar'
import { Button } from '@mui/material';
import Grid from '../commons/Grid';
import Cart from "./Cart/Cart";
import SubNavbarGenre from "../commons/SubNavbarGenre";
import axios from 'axios';
import Footer from '../commons/Footer';


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

      <Navbar/>
      <Cart/>
      <SubNavbarGenre />
      <div id='genre'>
        <Grid games={games}/>
      </div>
      <Footer/>
    </>
  );
};

export default Genre;
