import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { next, back, reciever, address } from '../../state/handleCart';
import {useForm} from 'react-hook-form'



export default function AddressForm() {
  const dispatch = useDispatch();

  //ESTO SON LAS VALIDACIONES
  const {
    register,
    handleSubmit,
    formState: {errors},
  }= useForm()
  

  const handleNext = ({firstName,lastName,address1,address2,city,state,zip,country}) => {
    
    dispatch(next());
    dispatch(address(`${address1}, ${address2}, ${city}, ${state}, ${zip}, ${country}`));
    dispatch(reciever(`${firstName} ${lastName}`));
    
  };
  const handleBack = () => {
    dispatch(back())

  };



  
  

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [address1, setAddress1] = useState("");
  // const [address2, setAddress2] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [zip, setZip] = useState("");
  // const [country, setCountry] = useState("");

  // const handleFirstName = (e) => setFirstName(e.target.value);
  // const handleLastName = (e) => setLastName(e.target.value);
  // const handleAddress1 = (e) => setAddress1(e.target.value);
  // const handleAddress2 = (e) => setAddress2(e.target.value);
  // const handleCity = (e) => setCity(e.target.value);
  // const handleState = (e) => setState(e.target.value);
  // const handleZip = (e) => setZip(e.target.value);
  // const handleCountry = (e) => setCountry(e.target.value);

  // const fullAdress = [address1,address2,city,state,zip,country]
  // const recieverName = [firstName,lastName]

  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid2 container spacing={3}>
        <Grid2 item xs={12} sm={6}>
          <TextField
            
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            {...register("firstName",{required:"Required",
                      minLength:{
                        value:2,
                        message: "Name should have 2 characters min"
                     },
                      maxLength:{
                        value:20,
                        message: "Name should have 20 characters max"
                      }
                   })}
                   error={!!errors?.firstName}
                  helperText={errors?.firstName? errors.firstName.message:null}
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
             required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            {...register("lastName",{required:"Required",
                      minLength:{
                        value:2,
                        message: "LastName should have 2 characters min"
                     },
                      maxLength:{
                        value:20,
                        message: "LastName should have 20 characters max"
                      }
                   })}
                   error={!!errors?.lastName}
                  helperText={errors?.lastName? errors.lastName.message:null}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            {...register("address1",{required:"Required",
              })}
                   error={!!errors?.firstName}
                  helperText={errors?.firstName? errors.firstName.message:null}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            {...register("city",{required:"Required",
              })}
                   error={!!errors?.firstName}
                  helperText={errors?.firstName? errors.firstName.message:null}
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            {...register("state",{required:"Required",
              })}
                   error={!!errors?.firstName}
                  helperText={errors?.firstName? errors.firstName.message:null}
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            {...register("zip",{required:"Required",
              })}
                   error={!!errors?.firstName}
                  helperText={errors?.firstName? errors.firstName.message:null}
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
             required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            {...register("country",{required:"Required",
              })}
                   error={!!errors?.firstName}
                  helperText={errors?.firstName? errors.firstName.message:null}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid2>
      </Grid2>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
              <Button
                    type="submit"
                    variant="contained"
                    onClick={handleSubmit(handleNext)}
                    sx={{ mt: 3, ml: 1 }}
                  >Next</Button>
                </Box>
    </React.Fragment>
  );
}