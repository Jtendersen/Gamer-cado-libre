import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router';

const Sidebar = ()=> {
  const [genre, setGenre] = React.useState('');
  const navigate = useNavigate()

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  React.useEffect(()=>{
    if(genre !== '') navigate(`/products/${genre.toLowerCase()}`)
  })

  return (
    <div id='sidebar'>
        <Box sx={{ minWidth: 250 }}>
          <FormControl sx={{ minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Genre</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={genre}
              label="genre"
              onChange={handleChange}
              >
              <MenuItem value={'Action'}>Action</MenuItem>
              <MenuItem value={'Adventure'}>Adventure</MenuItem>
              <MenuItem value={'Arcade'}>Arcade</MenuItem>
              </Select>
          </FormControl>
        </Box>
    </div>
  );
}

export default Sidebar