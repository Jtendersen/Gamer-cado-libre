import React from 'react'
import { Box, Button, Drawer, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import CartProducts from './CartProducts'
import { addToCart } from '../state/cart'
import { useDispatch, useSelector } from 'react-redux'


const Cart = () => {

    const dispatch = useDispatch()
    const user = useSelector((state)=>state.user)
    

    const [showCart, toggleShowCart] = useState(false)
    const [productId, setProductId] = useState(1)

    const handleCart = () => showCart?toggleShowCart(false):toggleShowCart(true)
    const handleaAdd = () => {
        
        setProductId(productId+1)
        dispatch(addToCart(
            {
            userId:user.id,
            quantity:1,
            productId:productId,
            totalPrice:100
            }
        ))
        
    }




    


  return (
        <>
        <Button onClick={handleCart}>Cart</Button>
        <Button onClick={handleaAdd}>ADDTOCART</Button>
        <Drawer 
        open={showCart}
        onClose={handleCart}
         anchor= "right" 
         PaperProps={{sx:{width:700}}}
         >
            <Box
            sx={{p:5}}
            display="flex"
            justifyContent={"center"}
            flexDirection="column"
            alignItems={"center"}>
                <Typography variant="h3">your cart</Typography>
                <Typography variant="body1" >Start gaming today!</Typography>
                <Paper 
                elevation={0}
                sx={{
                    mt:2,
                    width:"100%",
                    padding: 3,

                }}>
                    <CartProducts/>
                 </Paper>
        
                
            </Box>
        </Drawer>
        </>
  )
}

export default Cart