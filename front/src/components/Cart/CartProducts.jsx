import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Avatar, Divider, Typography, Button } from "@mui/material";
import ButtonsCounter from "./ButtonsCounter";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromCart } from "../../state/cart";
import { useDispatch } from "react-redux";
import { totalPrice } from "../../state/handleCart";
import { useEffect } from "react";

const CartProducts = () => {
  const baseURL = "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/";

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(totalPrice(CartTotalPrice));
  }, [cart]);

  const CartTotalPrice = cart.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <>
      {cart.map((item) => (
        <Box key={item.id}>
          <Box
            display="flex"
            sx={{ pt: 2, pb: 2 }}
            alignItems="start"
            justifyContent={"space-between"}
          >
            <Avatar
              variant="square"
              src={baseURL + item.product.urlId + ".jpg"}
              sx={{ width: 96, height: 96 }}
            />
            <Box display={"flex"} flexDirection={"column"}>
              <Typography variant="h6">{item.product.name}</Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="body1" sx={{ p: 2 }}>
                $ {item.totalPrice}
              </Typography>

              <ButtonsCounter
                itemId={item.productId}
                quantity={item.quantity}
              />
            </Box>
            <Box
              onClick={() => {
                dispatch(
                  removeFromCart({
                    itemId: item.productId,
                    userId: item.userId,
                  })
                );
              }}
              display={"flex"}
              sx={{ my: 2, p: 2 }}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button>
                <DeleteIcon fontSize="large" />
              </Button>
            </Box>
          </Box>
          <Divider variant="inset" />
        </Box>
      ))}
    </>
  );
};

export default CartProducts;
