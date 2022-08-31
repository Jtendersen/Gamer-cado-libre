import React from 'react'
import { useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';
//import { useDispatch } from 'react-redux';
//import {cartItemQuantity} from "../../state/cart"

const ButtonsCounter = (props) => {

    //const dispatch = useDispatch()

    const [counter, setCounter] = useState(1);

return (
   <ButtonGroup size="small" aria-label="small outlined button group">

        <Button onClick={()=> 
        {setCounter(counter=>counter+1)
          console.log(typeof(props.quantity))
        console.log("COUNTER", counter)
        // dispatch(cartItemQuantity({
        //   itemId:props.itemId,
        //   counter:counter}))
        }}>+</Button>

     {<Button disabled>{counter}</Button>}

      {<Button disabled={counter <= 1} onClick={() => {
        setCounter(counter => counter - 1)
        console.log("COUNTER", counter)
        // dispatch(cartItemQuantity({
        //   itemId:props.itemId,
        //   counter:counter}))
        }}>-</Button>}

  </ButtonGroup>
)
  
}

export default ButtonsCounter


