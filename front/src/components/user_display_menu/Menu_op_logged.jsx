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
import { sendLogoutRequest } from "../../state/user";



const Menu_op_logged=()=>{
    
    const navigate = useNavigate();
  const sendTo = (string) => {
    navigate(`/${string}`);
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
    return(
              <Stack direction="row" spacing={2}>
                <MenuItem onClick={() => {
                sendTo("user");}} >
         <Avatar>{user.firstName[0].toUpperCase()}</Avatar > {user.firstName}
        </MenuItem>
        <MenuItem onClick={() => {
                sendTo("user/settings");
              }}  >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
          </MenuItem>
          <MenuItem onClick={() => {
                sendTo("user/history");
              }} >
            Order history
        </MenuItem>
        <MenuItem onClick={() => {
                dispatch(sendLogoutRequest());
                sendTo("");
              }} >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        
              </Stack>
    )
}

export default Menu_op_logged;