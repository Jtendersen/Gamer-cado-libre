

import * as React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import AddressForm from './AdressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useSelector} from 'react-redux';




const steps = ['Shipping address', 'Payment details', 'Review your order'];




export default function Checkout() {
  function getStepContent(step) {


  switch (step) {
    
    case 1:
      return <AddressForm />;
    case 2:
      return <PaymentForm />;
    case 3:
      return <Review />;
      
    default:
      throw new Error('Unknown step');
  }
}
  const step = useSelector((state)=>state.handleCart.step)
  

return (
  <>
  
      
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={step} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {step === 4 ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(step)}
              
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>

      </Container>
      </>
    
  );
}