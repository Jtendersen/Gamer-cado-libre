import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Button } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toggleProduct, productData } from "../../state/product";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid({ product }) {
  const dispatch = useDispatch();

  const handleRemove = function () {
    axios.delete(`/api/products/${product.id}`).then((message) => {
      if (message.status === 204) {
        window.location.reload();
        alert("Producto eliminado correctamente");
      }
    });
  };

  const handleEdit = function () {
    dispatch(toggleProduct());
    dispatch(productData(product));
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
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="complex"
                src={`https://images.igdb.com/igdb/image/upload/t_cover_small/${product.urlId}.jpg`}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {product.name}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                  onClick={handleEdit}
                >
                  Edit
                </Button>
                <Button
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                  onClick={handleRemove}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                ${product.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
