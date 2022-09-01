import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import {  useDispatch } from 'react-redux';
import { next, back, paymentMethod } from '../../state/handleCart';
import { Button,Box, RadioGroup, Radio } from '@mui/material';
import { useState } from 'react';


  

export default function PaymentForm() {
  
  const dispatch = useDispatch();
  
  const handleNext = () => {
    if(ChosedPaymentMethod==="") return alert("you must choose a payment method")
    dispatch(next())
    dispatch(paymentMethod(ChosedPaymentMethod))
  
  };

  const handleBack = () => {
    dispatch(back())

  };
  const [ChosedPaymentMethod,SetChosedPaymentMethod] = useState("");
  const handleCheck = (e) => SetChosedPaymentMethod(e.target.value);



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel onClick={handleCheck} value="Cash" control={<Radio />} label="Cash" />
        <FormControlLabel onClick={handleCheck} value="Card" control={<Radio />} label="Card" />
        <FormControlLabel onClick={handleCheck} value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
        </Grid>
        
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                   <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >Next
                  </Button>
                </Box>
    </React.Fragment>
  );
}