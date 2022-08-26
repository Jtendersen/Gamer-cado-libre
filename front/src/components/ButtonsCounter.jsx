import React from 'react'
import { useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
//import {cartPlus, cartMinus, } from "../state/cart"

const ButtonsCounter = (prop) => {

    const dispatch = useDispatch()

    const [counter, setCounter] = useState(1);

return (
   <ButtonGroup size="small" aria-label="small outlined button group">

        <Button onClick={()=> 
        {setCounter(counter+1)
        //dispatch(cartPlus(prop))
        }}>+</Button>

     {<Button disabled>{counter}</Button>}

      {<Button disabled={counter <= 1} onClick={() => {
        setCounter(counter - 1)
        // dispatch(cartMinus(prop))
        }}>-</Button>}

  </ButtonGroup>
)
  
}

export default ButtonsCounter


