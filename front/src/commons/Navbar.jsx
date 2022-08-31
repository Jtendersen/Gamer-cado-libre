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
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendLogoutRequest } from "../state/user";

import { useEffect } from "react";
import axios from "axios";
import imagen from "../assets/version1.png";
import { yellow } from "@mui/material/colors";
import { useLocation, useNavigate } from "react-router";
import { Container } from "@mui/system";
import Admin_panel from "../components/admin_panel";

const color = yellow[500];







const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.25),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.55),
  },
  marginRight: theme.spacing(10),
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
  color: "primary",
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
  let Auth;

  const navigate = useNavigate();
  const sendTo = (string) => {
    navigate(`/${string}`);
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);


  let Genres;
  const { pathname } = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const {pathname} = useLocation()

  const [search, setSearch] = React.useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = () => {
    navigate(`/products/search/${search}`);
  };


  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link
          id="link"
          to="/products/action"
          style={{ textDecoration: "none" }}
        >
          Action
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          id="link"
          to="/products/adventure"
          style={{ textDecoration: "none" }}
        >
          Adventure
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          id="link"
          to="/products/strategy"
          style={{ textDecoration: "none" }}
        >
          Strategy
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          id="link"
          to="/products/shooter"
          style={{ textDecoration: "none" }}
        >
          Shooter
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="primary">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  if (pathname != "/") {
    Genres = (
      <>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="small"
            edge="end"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            id="margin"
          >
            Genres
          </IconButton>
        </Box>
      </>
    );
  } else Genres = <></>;

  if (!user.id) {
    Auth = (
      <>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              sendTo("signin");
            }}
          >
            Login
          </Button>

          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              sendTo("signup");
            }}
          >
            Signup
          </Button>
        </Stack>
      </>
    );
  } else {
    if (user.admin == false) {
      Auth = (
        <>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                sendTo("user");
              }}
            >
              {user.firstName}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                sendTo("cart");
              }}
            >
              Cart
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                dispatch(sendLogoutRequest());
                sendTo("");
              }}
            >
              Logout
            </Button>
          </Stack>
        </>
      );
    } else {
      Auth = (
        <>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                sendTo("user");
              }}
            >
              {user.firstName}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                sendTo("cart");
              }}
            >
              Cart
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                dispatch(sendLogoutRequest());
                sendTo("");
              }}
            >
              Logout
            </Button>
           <Admin_panel/>
          </Stack>
        </>
      );
    }
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ backgroundColor: color, color: "primary" }}
        position="static"
      >
        <Toolbar>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" id="link" style={{ textDecoration: "none" }}>
              <Box sx={{ width: 0.5, height: 0.1 }}>
                <div id="loguito">
                  <img
                    id="loguitoPosta"
                    src={imagen}
                    alt="logo"
                    loading="lazy"
                  />
                </div>
              </Box>
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="primary"
              id="margin"
            ></IconButton>
          </Box>

          {Genres}


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
