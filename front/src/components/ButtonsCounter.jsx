import React from 'react'
import { useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import {cartItemQuantity} from "../state/cart"

const ButtonsCounter = (itemId) => {

    const dispatch = useDispatch()

    const [counter, setCounter] = useState(1);

return (
   <ButtonGroup size="small" aria-label="small outlined button group">

        <Button onClick={()=> 
        {setCounter(counter+1)
        dispatch(cartItemQuantity(itemId))
        }}>+</Button>

     {<Button disabled>{counter}</Button>}

      {<Button disabled={counter <= 1} onClick={() => {
        setCounter(counter - 1)
        dispatch(cartItemQuantity(itemId,counter))
        }}>-</Button>}

  </ButtonGroup>
)
  
}

export default ButtonsCounter


