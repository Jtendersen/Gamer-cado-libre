import React from "react";
import { GridAllUsers } from "./admin_panel/Admin_users";
import { Box, Grid } from "@mui/material";

export const Users = ({ users }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box border={2}>
            {users?.map((user, i) => {
              return <GridAllUsers key={i} user={user} />;
            })}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
