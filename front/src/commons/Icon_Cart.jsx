import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
 function CustomizedBadges() {
    const cart = useSelector((state) => state.cart);
    console.log(cart)
  
    const getQuantityCart=()=>{
      var totalItems=0
      cart.map((item)=>{
        totalItems+=item.quantity
      })
      console.log(totalItems)
      return totalItems
    }
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={getQuantityCart()} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}