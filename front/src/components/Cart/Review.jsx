import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box } from "@mui/material";
import { next, back } from "../../state/handleCart";
import { makeOrder } from "../../state/cart";

export default function Review() {
  const cart = useSelector((state) => state.cart);

  const sendingAddress = useSelector((state) => state.handleCart.address);
  const recieverName = useSelector((state) => state.handleCart.reciever);
  const paymentMethod = useSelector((state) => state.handleCart.paymentMethod);
  const totalPrice = useSelector((state) => state.handleCart.totalPrice);
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(next());
    //console.log("ESTE ES EL CART DENTRO DEL REVIEW", cart);
    dispatch(makeOrder({ recieverName, sendingAddress, paymentMethod, cart }));
  };

  const handleBack = () => {
    dispatch(back());
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((item) => (
          <ListItem key={item.product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.product.name} />
            <Typography variant="body2">{`X${item.quantity} . . . ${item.totalPrice}`}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ {totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{recieverName}</Typography>
          <Typography gutterBottom>{sendingAddress}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>{paymentMethod}</Grid>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
          Place order
        </Button>
      </Box>
    </React.Fragment>
  );
}
