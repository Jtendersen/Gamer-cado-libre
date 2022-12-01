import React from "react";
import { Box, Button, Drawer, Paper, Typography } from "@mui/material";
import CartProducts from "./CartProducts";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../state/handleCart";
import Checkout from "./Checkout";
import { next, reset } from "../../state/handleCart";

const Cart = () => {
  const dispatch = useDispatch();

  const opencart = useSelector((state) => state.handleCart.open);
  const step = useSelector((state) => state.handleCart.step);
  const cart = useSelector((state) => state.cart);

  const onCloseCart = () => {
    dispatch(toggleCart());
    step === 4 &&
      setTimeout(() => {
        dispatch(reset());
      }, 500);
  };

  const handleCheckoutBtn = () =>
    cart.length === 0
      ? alert("No hay nada en tu carrillo!!")
      : dispatch(next());

  return (
    <>
      <Drawer
        open={opencart}
        onClose={onCloseCart}
        anchor="right"
        PaperProps={{ sx: { backgroundColor: "secondary.main", width: 700 } }}
      >
        <Box
          sx={{ p: 5 }}
          display="flex"
          justifyContent={"center"}
          flexDirection="column"
          alignItems={"center"}
        >
          {step === 0 ? (
            <>
              <Typography color="text.main" variant="h3">
                your cart
              </Typography>
              <Typography color="info" variant="body1">
                Start gaming today!
              </Typography>
              <Paper
                color="secondary"
                elevation={0}
                sx={{
                  mt: 2,
                  width: "100%",
                  padding: 3,
                }}
              >
                {cart.length === 0 ? (
                  <Box
                    sx={{ p: 5 }}
                    display="flex"
                    justifyContent={"center"}
                    flexDirection="column"
                    alignItems={"center"}
                  >
                    <Typography variant="body4">no products yet</Typography>
                  </Box>
                ) : (
                  <CartProducts />
                )}
              </Paper>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  onClick={handleCheckoutBtn}
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                >
                  checkout
                </Button>
              </Box>
            </>
          ) : (
            <Checkout />
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default Cart;
