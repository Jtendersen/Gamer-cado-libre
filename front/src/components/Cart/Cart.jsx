import React from "react";
import { Box, Button, Drawer, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CartProducts from "./CartProducts";
import { getCart, addToCart, setCart } from "../../state/cart";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {toggleCart} from "../../state/handleCart"
import Checkout from "./Checkout";









const Cart = () => {

  const dispatch = useDispatch();
  
  const handleCart = useSelector((state)=>state.handleCart.open)
  const onCloseCart = () => { dispatch(toggleCart())}

  const [checkout, setCheckout] = useState(false)

  const handleCheckoutBtn = () => setCheckout(!checkout)


return (
    <>

      <Drawer
        open={handleCart}
        onClose={onCloseCart}
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
          
          {!checkout?<><Typography variant="h3">Your cart</Typography>
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
          </> : <Checkout/>}
          <Button onClick={handleCheckoutBtn} variant="contained">{checkout?`cart`:`checkout`}</Button>
          
        </Box>
      </Drawer>
    </>
  );
};

export default Cart;
