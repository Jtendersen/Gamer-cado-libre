import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Stack,Badge, MenuItem, ListItemIcon, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";



const Menu_op_logged=()=>{
    
    const navigate = useNavigate();
  const sendTo = (string) => {
    navigate(`/${string}`);
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
    return(

        <Stack direction="row" spacing={2} >
            
        <IconButton color='inherit' aria-label="cart" onClick={()=>{dispatch(toggleCart())}} >
    <StyledBadge badgeContent={getQuantityCart()} color="primary">
      <ShoppingCartIcon />
    </StyledBadge>
  </IconButton>
          <Button
            variant="text"
            color="text"
            onClick={() => {
              dispatch(sendLogoutRequest());
              sendTo("");
            }}
          >
            Logout
          </Button>
          <UserButton  user={user}/>
          <Admin_panel />
        </Stack>

    )
}

export default Menu_op_logged;