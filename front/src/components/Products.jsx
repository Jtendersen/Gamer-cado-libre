import React, { useEffect, useState } from "react";
import axios from "axios";
import ComplexGrid from "./admin_panel/Admin_grid";
import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

export const Products = () => {
  let addView;
  const [add, setAdd] = useState(false);
  const [products, setProducts] = useState([]);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [urlId, setUrlId] = useState(
    "https://cdn.cloudflare.steamstatic.com/steam/apps/681040/header.jpg?t=1504857051"
  );

  const productData = useSelector((state) => state.product);

  const handleDescription = function (e) {
    setDescription(e.target.value);
  };
  const handleName = function (e) {
    setName(e.target.value);
  };
  const handlePrice = function (e) {
    setPrice(e.target.value);
  };
  const handleUrlId = function (e) {
    setUrlId(e.target.value);
  };
  const handleAddProduct = function (e) {
    e.preventDefault();
    if (productData.open == false) {
      const newProduct = { name, price, description, urlId };
      if (name == "" || price == "")
        return alert("Name and Price are inputs does we need");
      else {
        axios.post("/api/products", newProduct).then((res) => {
          if (res.status == 204) alert("The game was added succesfully");
          if (res.status > 399) alert("The game wasn't be added");
        });
      }
    } else {
      if (name == "") setName(productData.game.name);
      if (price == "") setPrice(productData.game.price);
      if (description == "") setDescription(productData.game.description);
      if (urlId == "") setUrlId(productData.game.urlId);
      const newProduct = {
        name: name,
        price: price,
        description: description,
        urlId: urlId,
      };
      if (newProduct.name == "" || newProduct.price == "")
        return alert("Name and Price are inputs does we need");
      else {
        axios
          .put(`/api/products/${productData.game.genreId}`, newProduct)
          .then((res) => {
            if (res.status < 300) alert("The game was added succesfully");
            if (res.status > 399) alert("The game wasn't be added");
          });
      }
    }
  };
  const handleAdd = function () {
    if (add) setAdd(false);
    else setAdd(true);
  };

  useEffect(() => {
    axios.get("/api/products/allProducts").then((products) => {
      setProducts(products.data);
    });
  }, []);

  useEffect(() => {
    if (productData.open == true) {
      setName(productData.game.name);
      setPrice(productData.game.price);
      setDescription(productData.game.description);
      setUrlId(productData.game.urlId);
    }
  }, [productData.open]);

  if (productData.open == false) {
    if (add == false) {
      addView = (
        <div id="addButton">
          <Button onClick={handleAdd}>Add Product</Button>
        </div>
      );
    }
    if (add === true) {
      addView = (
        <div id="viewAdded">
          <Box component="form">
            <Grid container margin={2}>
              <Grid item sm={2}>
                <TextField
                  required
                  fullWidth
                  label="name"
                  onChange={handleName}
                ></TextField>
              </Grid>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  label="Description (not required)"
                  onChange={handleDescription}
                />
              </Grid>
            </Grid>
            <Grid container margin={2}>
              <Grid item sm={2}>
                <TextField
                  required
                  fullWidth
                  label="Price"
                  onChange={handlePrice}
                />
              </Grid>

              <Grid item sm={6}>
                <TextField
                  fullWidth
                  label="Image URL (not required)"
                  onChange={handleUrlId}
                />
              </Grid>
            </Grid>
            <Button type="submit" onClick={handleAddProduct}>
              Add
            </Button>
          </Box>
        </div>
      );
    }
  } else {
    addView = (
      <div id="viewAdded">
        <Box component="form">
          <Grid container margin={2}>
            <Grid item sm={2}>
              <TextField
                defaultValue={productData.game.name}
                required
                fullWidth
                label="name"
                onChange={handleName}
              ></TextField>
            </Grid>
            <Grid item sm={6}>
              <TextField
                defaultValue={productData.game.description}
                fullWidth
                label="Description (not required)"
                onChange={handleDescription}
              />
            </Grid>
          </Grid>
          <Grid container margin={2}>
            <Grid item sm={2}>
              <TextField
                defaultValue={productData.game.price}
                required
                fullWidth
                label="Price"
                onChange={handlePrice}
              />
            </Grid>

            <Grid item sm={6}>
              <TextField
                defaultValue={productData.game.urlId}
                fullWidth
                label="Image URL (not required)"
                onChange={handleUrlId}
              />
            </Grid>
          </Grid>
          <Button type="submit" onClick={handleAddProduct}>
            Add
          </Button>
        </Box>
      </div>
    );
  }

  return (
    <>
      {addView}
      <div id="adminGrid">
        {products.map((product, i) => {
          return <ComplexGrid product={product} key={i} />;
        })}
      </div>
    </>
  );
};
