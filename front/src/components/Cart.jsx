import React from 'react'
import { Box, Button, Drawer, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import CartProducts from './CartProducts'


const Cart = () => {
    

    const [showCart, toggleShowCart] = useState(false)

    const handleCart = () => showCart?toggleShowCart(false):toggleShowCart(true)


    


  return (
        <>
        <Button onClick={handleCart}>Cart</Button>
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