import React from "react";
import { Box, Button, Drawer, Paper, Typography } from "@mui/material";
import { useState } from "react";
import CartProducts from "./CartProducts";
import { getCart, addToCart, setCart } from "../state/cart";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [showCart, toggleShowCart] = useState(false);

  const handleCart = () => {
    showCart ? toggleShowCart(false) : toggleShowCart(true);
    axios.get(`/api/cart/${user.id}`).then((r) => {
      // localStorage.setItem("cart",JSON.stringify(r.data));
      dispatch(setCart(r.data));
      // return r.data
    });
  };

  return (
    <>
      <Button onClick={handleCart}>Cart</Button>
      <Drawer
        open={showCart}
        onClose={handleCart}
        anchor="right"
        PaperProps={{ sx: { width: 700 } }}
      >
        <Box
          sx={{ p: 5 }}
          display="flex"
          justifyContent={"center"}
          flexDirection="column"
          alignItems={"center"}
        >
          <Typography variant="h3">Your cart</Typography>
          <Typography variant="body1">Start gaming today!</Typography>
          <Paper
            elevation={0}
            sx={{
              mt: 2,
              width: "100%",
              padding: 3,
            }}
          >
            <CartProducts />
          </Paper>
        </Box>
      </Drawer>
    </>
  );
};

export default Cart;
