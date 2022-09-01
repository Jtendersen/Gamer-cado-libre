import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { add_genre } from "../state/genre";
import { useDispatch } from "react-redux";
import Input_handler from "../hooks/inputHandler";
import { Stack } from "@mui/material";

export default function Input_base() {
  let alert = false;
  const input_add = Input_handler();
  const dispatch = useDispatch();
  const addHandler = (genreName) => {
    console.log(genreName);
    if (!genreName) return;
    dispatch(add_genre(genreName));
  };

  return (
    <Stack spacing={2} margin={4}>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Add a new genre."
          inputProps={{ "aria-label": "Add a new genre" }}
          onChange={input_add.onChange}
          value={input_add.value}
        />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => {
            addHandler(input_add.value);
          }}
        >
          <AddIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
      <Divider orientation="horizontal" />
    </Stack>
  );
}
