import * as React from 'react';
import { useLocation, useNavigate } from 'react-router'
import Navbar from '../commons/Navbar'
import { Button } from '@mui/material';
import Grid from '../commons/Grid';
import axios from 'axios';

const Genre = () => {

  const [games, setGames] = React.useState([])
  React.useEffect(()=>{
    axios.get('http://localhost:3001/api/products/allProducts').then((games)=>{setGames(games.data)})
  },[])
  console.log(games)
  let Auth;
  const [genre, setGenre] = React.useState('');
  const navigate = useNavigate()
  const {pathname} = useLocation()
  console.log(pathname.split('/')[2][0].toUpperCase()+pathname.split('/')[2].substring(1))


  React.useEffect(()=>{if(genre !== '') navigate(`/products/${genre.toLowerCase()}`)})
    const sendTo = (string)=>{
        navigate(`/products/${string}`)
    }

    if('a'){
        Auth =<div id='signup'><Button color="inherit" onClick={()=>{sendTo('signup')}}>SignUp</Button></div>
    } else{
        Auth =<div id='signup'>  <Button color='inherit' onClick={()=>{sendTo('user')}}>
                    UserName
                  </Button>
                  <Button color='inherit' onClick={()=>{sendTo('cart')}}>
                    Cart
                  </Button>
              </div>
    }
      
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