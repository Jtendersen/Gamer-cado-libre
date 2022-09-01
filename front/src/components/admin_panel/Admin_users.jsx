import { Grid } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Users } from "../Users";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Admin_users = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/users/allUsers").then((users) => {
      setUser(users.data);
    });
  }, []);

  return (
    <>
      <Users users={user} />
    </>
  );
};

export function GridAllUsers({ user }) {
  const handleRemove = function () {
    axios
      .put(`http://localhost:3001/api/users/admin/${user.id}`, { admin: false })
      .then((message) => {
        if (message.status === 204) {
          window.location.reload();
          alert("Producto eliminado correctamente");
        }
      });
  };
  const handleEdit = function () {
    axios
      .put(`http://localhost:3001/api/users/admin/${user.id}`, { admin: true })
      .then((message) => {
        if (message.status === 204) {
          window.location.reload();
          alert("Producto eliminado correctamente");
        }
      });
  };

  return (
    <div className="paper">
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item></Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {user.admin && "is admin"}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                  onClick={handleEdit}
                >
                  Promover admin
                </Button>
                <Button
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                  onClick={handleRemove}
                >
                  Revocar admin
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                {user.firstName}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Admin_users;
