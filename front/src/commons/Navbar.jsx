import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';

const Navbar = () => {

  let Auth;
  const navigate = useNavigate()
  const sendTo = (string)=>{
    navigate(`/${string}`)
  }

  if('a'){
    Auth = <Button color="inherit" onClick={()=>{sendTo('signup')}}>SignUp</Button>
  } else{
    Auth =<>  
              <Button color='inherit' onClick={()=>{sendTo('user')}}>
                UserName
              </Button>
              <Button color='inherit' onClick={()=>{sendTo('cart')}}>
                Cart
              </Button>
          </>
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>{sendTo('products')}}>Products</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gamer-cado Libre
          </Typography>
          {Auth}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar