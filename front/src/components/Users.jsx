import React from 'react'
import ComplexGrid  from './admin_panel/Admin_grid'
import { Box, Grid } from "@material-ui/core"

export const Users = ({users}) => {
  return (
    <div>
     <Grid container>
        <Grid item xs = {12}>
          <Box border = {2}>
            {users.map((users)=>{
              return <ComplexGrid product = {users}/>
            })}
          </Box>
        </Grid>
     </Grid>
    </div>
  )
}
