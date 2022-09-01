import { Button, List, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { sendLoginRequest, setUser } from "../state/user";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export const UserData = () => {
  const user = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);

  const dispatch = useDispatch();

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleChanges = () => {
    axios
      .put(`http://localhost:3001/api/users/${user.id}`, {
        firstName,
        lastName,
        age,
      })
      .then((res) => {
        const userChanged = {
          admin: res.data.userUpdate.admin,
          age: res.data.userUpdate.age,
          email: res.data.userUpdate.email,
          firstName: res.data.userUpdate.firstName,
          id: res.data.userUpdate.id,
          lastName: res.data.userUpdate.lastName,
          password: res.data.userUpdate.password,
        };
        alert(res.data.message);
        dispatch(setUser(userChanged));
        dispatch(sendLoginRequest(userChanged));
      });
  };
  return (
    <>
      <Box>
        <List>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={12}
          >
            <Typography>FirstName:</Typography>
            <Item>{user.firstName}</Item>
            <TextField onChange={handleFirstName}></TextField>
          </Stack>
          <br />
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={12}
          >
            <Typography>LastName:</Typography>
            <Item>{user.lastName}</Item>
            <TextField onChange={handleLastName}></TextField>
          </Stack>
          <br />
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={12}
          >
            <Typography>Age:</Typography>
            <Item>{user.age}</Item>
            <TextField onChange={handleAge}></TextField>
          </Stack>
          <br />
          <Stack>
            <Button onClick={handleChanges}>Make Changes</Button>
          </Stack>
        </List>
      </Box>
    </>
  );
};
