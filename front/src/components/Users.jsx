import React from 'react'
import ComplexGrid  from './admin_panel/Admin_grid'
import { Box, Grid } from "@mui/material"

export const Users = ({users}) => {
  return (
    <div>
     <Grid container>
        <Grid item xs = {12}>
          <Box border = {2}>
            {users.map((user)=>{
              return <ComplexGrid product = {user}/>
            })}
          </Box>
        </Grid>
     </Grid>
    </div>
  )
}
