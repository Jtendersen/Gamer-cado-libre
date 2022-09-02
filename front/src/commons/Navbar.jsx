import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Stack, Badge, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendLogoutRequest } from "../state/user";
import { toggleCart } from "../state/handleCart";
import imagen from "../assets/version2.png";
import { useNavigate } from "react-router";
import Admin_panel from "../components/admin_panel";
import UserButton from "../components/UserButton";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountMenu from "../components/user_display_menu";
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
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
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
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const getQuantityCart = () => {
    var totalItems = 0;
    cart.map((item) => {
      totalItems += item.quantity;
    });
    console.log(totalItems);
    return totalItems;
  };

  const [search, setSearch] = React.useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = () => {
    navigate(`/products/search/${search}`);
  };

  if (!user.id) {
    Auth = (
      <>
        <Stack direction="row" spacing={2}>
          <Button
            variant="text"
            color="text"
            onClick={() => {
              sendTo("signin");
            }}
          >
            Login
          </Button>

          <Button
            variant="text"
            color="text"
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
    if (user.admin === false) {
      Auth = (
        <>
          <Stack direction="row" spacing={2}>
            <Button
              variant="text"
              color="text"
              onClick={() => {
                sendTo("user");
              }}
            >
              {user.firstName}
            </Button>
            <IconButton
              color="inherit"
              aria-label="cart"
              onClick={() => {
                dispatch(toggleCart());
              }}
            >
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
            <Button
              variant="text"
              color="text"
              onClick={() => {
                sendTo("user");
              }}
            >
              {user.firstName}
            </Button>
          </Stack>
        </>
      );
    } else {
      Auth = (
        <>
          <Stack direction="row" spacing={2}>
            <IconButton
              color="inherit"
              aria-label="cart"
              onClick={() => {
                dispatch(toggleCart());
              }}
            >
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
            <UserButton user={user} />
            <Admin_panel />
          </Stack>
        </>
      );
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" id="link" style={{ textDecoration: "none" }}>
              <Box sx={{ width: 0.5 }}>
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
          <IconButton
            color="inherit"
            aria-label="cart"
            onClick={() => {
              dispatch(toggleCart());
            }}
          >
            <StyledBadge badgeContent={getQuantityCart()} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <AccountMenu />
          <Divider />
          <Admin_panel />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
