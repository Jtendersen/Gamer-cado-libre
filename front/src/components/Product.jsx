import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router";
import Footer from "../commons/Footer";
import Navbar from "../commons/Navbar";
import { Button } from "@mui/material";
import axios from "axios";
const Product = () => {
  const [value, setValue] = React.useState(null);
  const params = useLocation();
  const [game, setGame] = React.useState({});
  React.useEffect(() => {
    axios
      .get(
        `http://localhost:3001/api/products/${params.pathname.split("/")[2]}`
      )
      .then((game) => {
        setGame(game.data);
      });
    console.log(game);
  }, []);
  /* 
if(login){
    permitir valoracion
}
*/
  const handleCart = (e) => {
    //pedido a axios para agregar al carrito
    alert("The videogame was succesfully added at the cart");
  };

  const baseURL = "https://images.igdb.com/igdb/image/upload/t_720p/";

  return (
    <>
      <Navbar />
      <div id="product">
        <div className="content">
          <div id="img">
            <img src={baseURL + game.urlId + ".jpg"} alt="Imagen del juego" />
          </div>
          <div id="gameInfo">
            <h1>{game.name}</h1>
            <Box sx={{ "& > legend": { mt: 2 } }}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <h2>${game.price}</h2>
            <Button variant="contained" onClick={handleCart}>
              Add to cart
            </Button>
            <div id="digitalText">
              <Typography color="text.secondary">
                Este producto se vende en formato digital, el stock es ilimitado
              </Typography>
            </div>
          </div>
        </div>
        <div id="text">
          <h4>Descripcion:</h4>
          <p>{game.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
