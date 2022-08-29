import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@mui/system'
import { Avatar, Divider, Typography, Button } from '@mui/material'
import ButtonsCounter from './ButtonsCounter'
import DeleteIcon from '@mui/icons-material/Delete';
import {removeFromCart, getCart} from "../state/cart"
import { useDispatch } from 'react-redux'



const CartProducts = () => {
    const dispatch = useDispatch()

    const cart = useSelector((state)=>state.cart)
    const user = useSelector((state)=>state.user)

    user&&dispatch(getCart({userId:user.id}))

    
    
   


  return (
    <>
    {cart.length??cart.map((item)=>(
        <Box key={item.id}>
            <Box
            display="flex"
            sx={{pt:2,pb:2}}
            alignItems="start"
            justifyContent={"space-between"}>
            <Avatar variant= "square" src={item.picture} sx={{width:96, height:96}}/> 
                <Box display={"flex"} flexDirection={"column"}>
                    <Typography variant= "h6">{item.name}</Typography>
                    <Typography variant= "subtitle2">{item.sinapsis}</Typography>

                </Box>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Typography variant= "body1" sx={{p:2}}  >$ {item.age*item.quantity}</Typography>
            
                    <ButtonsCounter itemId={item.id}/>
                </Box>
                <Box onClick={removeFromCart(item.id)} display={"flex"} sx={{my:2,p:2}} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Button>
                     <DeleteIcon  fontSize= "large" />
                    </Button>
                </Box>
                    
            </Box>
            <Divider variant= "inset"/>
        </Box>

    ))}
    </>
  )
}

export default CartProducts