import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';
import { Avatar } from '@mui/material';

const Navbar = () => {

  let Auth;
  const navigate = useNavigate()
  const handle = (string)=>{
    navigate(`/${string}`)
  }

  if(''){
    Auth = <Button color="inherit" onClick={()=>{handle('signup')}}>SignUp</Button>
  } else{
    Auth =<>  <Button color='inherit' onClick={()=>{handle('user')}}>
                UserName
              </Button>
              <Button color='inherit' onClick={()=>{handle('cart')}}>
                Cart
              </Button>
          </>
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" onClick={()=>{handle('products')}}>Products</Button>
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