import * as React from 'react';
import { useLocation, useNavigate } from 'react-router'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import fakeData from '../fakeData';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
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

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  React.useEffect(()=>{if(genre !== '') navigate(`/products/${genre.toLowerCase()}`)})
    const sendTo = (string)=>{
        navigate(`/products/${string}`)
    }

    if('a'){
        Auth = <div id='signup'><Button color="inherit" onClick={()=>{sendTo('signup')}}>SignUp</Button></div>
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
      <div id='nav'>
          <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                  <Toolbar>
                      <Box sx={{ minWidth: 250 }}>
                        <FormControl sx={{ minWidth: 250 }}>
                            <InputLabel id="demo-simple-select-label" className='input'>Genre</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={genre}
                            label="genre"
                            onChange={handleChange}
                            >
                            <MenuItem value={'Action'}>Action</MenuItem>
                            <MenuItem value={'Adventure'}>Adventure</MenuItem>
                            <MenuItem value={'Arcade'}>Arcade</MenuItem>
                            </Select>
                        </FormControl>
                      </Box>
                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      </Typography>
                      {Auth}
                  </Toolbar>
              </AppBar>
          </Box>
      </div>
      <div id='genre'>
        <Grid games={games}/>
      </div>
    </>
  )
}

export default Genre