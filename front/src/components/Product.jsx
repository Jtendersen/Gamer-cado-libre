import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router";
import Footer from "../commons/Footer";
import Navbar from "../commons/Navbar";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { addToCart } from '../state/cart'
import { useDispatch, useSelector } from 'react-redux'
import TextareaAutosize from '@mui/material/TextareaAutosize';

const Product = () => {

  const dispatch = useDispatch()
  const user = useSelector((state)=>state.user)
  const [value, setValue] = React.useState(null);
  const params = useLocation();
  const [game, setGame] = React.useState({});
  const [reviews, setReviews] = React.useState([])

  React.useEffect(() => {
    axios
      .get(
        `http://localhost:3001/api/products/${params.pathname.split("/")[2]}`
      )
      .then((game) => {
        setGame(game.data);
      });
    axios
      .get('http://localhost:3001/api/reviews')
  }, []);
  /* 
if(login){
    permitir valoracion
}
*/
  const handleCart = (e) => {
    //pedido a axios para agregar al carrito
    
    dispatch(addToCart({
      userId:user.id,
      quantity:1,
      productId:game.id,
          
  }))
    alert("The videogame was succesfully added at the cart");
  };

  const baseURL = "https://images.igdb.com/igdb/image/upload/t_720p/";

  return (
    <>
      <Navbar />
      <Box>
        <div id="product">
          <div className="content">
            <div id="img">
              <img src={baseURL + game.urlId + ".jpg"} alt="Imagen del juego" />
            </div>
            <div id="gameInfo">
              <Typography variant="h1" marginTop={'1%'}>{game.name}</Typography>
              <Box sx={{ "& > legend": { mt: 2 } }}>
                <Rating
                  name="half-rating"
                  precision={0.5}
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue*2)
                  }}
                />
              </Box>
              <Typography variant="h2" marginTop={'1%'} marginBottom={'1%'}>${game.price}</Typography>
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
            <Typography variant="h6">Description: <br/></Typography>
            <Typography variant="body1">{game.description}</Typography>
            <br/>
            <Typography variant="h6">Reviews: <br/></Typography>
            <TextField
            disabled
            fullWidth
            />
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default Product;
