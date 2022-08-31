import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendLogoutRequest } from "../state/user";

import { useLocation, useNavigate } from 'react-router';
import Admin_panel from "../components/admin_panel";



const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/api/auth/me")
  //     .then((resp) => console.log(resp));
  // }, []);

  let Auth;

  const navigate = useNavigate();
  const sendTo = (string) => {
    navigate(`/${string}`);
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const {pathname} = useLocation()
  const [search, setSearch] = React.useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = () => {
    navigate(`/products/search/${search}`);
  };

  if(!user.id){
    Auth =  <>  
                <Button color='inherit' onClick={()=>{sendTo('signin')}}>
                  Login
                </Button>
                <Button color='inherit' onClick={()=>{sendTo('signup')}}>
                  Signup
                </Button>
            </>
  } else{
    if(user.admin == false){
    Auth =<>  
              <Button color='inherit' onClick={()=>{sendTo('user')}}>
                {user.firstName}
              </Button>
              <Button color='inherit' onClick={()=>{sendTo('cart')}}>
                Cart
              </Button>
              <Button color='inherit' onClick={()=>{
                dispatch(sendLogoutRequest())
                sendTo('')
                }}>
                Logout
              </Button>
          </>
    }else{
    Auth=   <>
              <Button color='inherit' onClick={()=>{sendTo('user')}}>
                {user.firstName}
              </Button>
              <Button color='inherit' onClick={()=>{sendTo('cart')}}>
                Cart
              </Button>
              <Button color='inherit' onClick={()=>{
                dispatch(sendLogoutRequest())
                sendTo('')
                }}>
                Logout
              </Button>
              <Admin_panel/>
            </>
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color='inherit' onClick={()=>{navigate('/')}}>
                Gamer-cado Libre
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <form onSubmit={handleSubmit}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearch}
              />
            </Search>
          </form>
          {Auth}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
