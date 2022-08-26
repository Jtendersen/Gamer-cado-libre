import * as React from 'react';
import { useLocation, useNavigate } from 'react-router'
import Navbar from '../commons/Navbar'
import { Button } from '@mui/material';
import Grid from '../commons/Grid';
import axios from 'axios';

const Genre = () => {

  const {pathname} = useLocation()
  const [games, setGames] = React.useState([])
  const [genre, setGenre] = React.useState(pathname.split('/')[2][0].toUpperCase()+pathname.split('/')[2].substring(1));


  React.useEffect(()=>{
    axios.get(`http://localhost:3001/api/products/allGenres/${genre}`).then((games)=>{setGames(games.data)})
  },[]) 
  console.log(games)  

  return (
    <>
      <Navbar/>
      <div id='genre'>
        <Grid games={games}/>
      </div>
    </>
  )
}

export default Genre