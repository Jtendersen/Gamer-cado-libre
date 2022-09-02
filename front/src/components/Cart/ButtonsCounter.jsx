import React from "react";
import { useState, useEffect } from "react";
import { ButtonGroup, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartItemQuantity } from "../../state/cart";

const ButtonsCounter = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [counter, setCounter] = useState(props.quantity);

  useEffect(() => {
    dispatch(
      cartItemQuantity({
        productId: props.itemId,
        quantity: counter,
      })
    );
  }, [counter]);

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </Button>

      {<Button disabled>{counter}</Button>}

      {
        <Button
          disabled={counter <= 1}
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </Button>
      }
    </ButtonGroup>
  );
};

export default ButtonsCounter;
