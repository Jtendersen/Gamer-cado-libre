import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@mui/system'
import fakeData from '../fakeData'
import { Avatar, Divider, Typography } from '@mui/material'
import ButtonsCounter from './ButtonsCounter'
import DeleteIcon from '@mui/icons-material/Delete';
import removeFromCart from "../state/cart"



const CartProducts = () => {

    const cart = useSelector((state)=>state.cart)
    
    console.log(fakeData)


  return (
    <>
    {fakeData?.map((item)=>(
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
                <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                    <Typography variant= "body1" justifyContent={"end"}>$ {item.age*item.quantity}</Typography>
                    <ButtonsCounter prop={item.id}/>
                </Box>
                <Box display={"flex"} justifyContent={"center"}>
                    <DeleteIcon  fontSize= "large" onClick={removeFromCart}/>
                    
                </Box>
                    
            </Box>
            <Divider variant= "inset"/>
        </Box>

    ))}
    </>
  )
}

export default CartProducts