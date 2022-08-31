import * as React from 'react';
import Grid from '@mui/material/Grid';
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function AddressForm() {
  

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  const fullAdress = [firstName,lastName,address1,address2,city,state,zip,country]

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleAddress1 = (e) => setAddress1(e.target.value);
  const handleAddress2 = (e) => setAddress2(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleState = (e) => setState(e.target.value);
  const handleZip = (e) => setZip(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);

  return (
    <React.Fragment>
      <Button onClick={console.log(fullAdress)}>Adress</Button>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid2 container spacing={3}>
        <Grid2 item xs={12} sm={6}>
          <TextField
            onChange={handleFirstName}
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
          onChange={handleLastName}
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            onChange={handleAddress1}
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            onChange={handleAddress2}
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
          onChange={handleCity}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
          onChange={handleState}
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
          onChange={handleZip}
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
          onChange={handleCountry}
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid2>
        <Grid2 item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid2>
      </Grid2>
    </React.Fragment>
  );
}