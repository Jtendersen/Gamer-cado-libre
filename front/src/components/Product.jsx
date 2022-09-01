import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { addToCart } from "../state/cart";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart/Cart";
import DeleteIcon from "@mui/icons-material/Delete";

const Product = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [value, setValue] = React.useState(null);
  const params = useLocation();
  const [game, setGame] = React.useState({});
  const [reviews, setReviews] = React.useState([]);
  const [review, setReview] = React.useState([]);
  const [alreadyPostedReview, setAlreadyPostedReview] = React.useState(false);

  let commentary;
  React.useEffect(() => {
    axios
      .get(
        `http://localhost:3001/api/products/${params.pathname.split("/")[2]}`
      )
      .then((game) => {
        setGame(game.data);
      });
    axios
      .get(`http://localhost:3001/api/reviews/${params.pathname.split("/")[2]}`)
      .then((res) => {
        setReviews(res.data);
        res.data.map((data) => {
          if (data.userId === user.id) setAlreadyPostedReview(true);
        });
      });
  }, [reviews]);

  const handleAdd = (e) => {
    axios.post("http://localhost:3001/api/reviews", {
      review,
      rating: value,
      userId: user.id,
      productId: params.pathname.split("/")[2],
    });
  };
  const handleReview = (e) => {
    setReview(e.target.value);
  };
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/reviews/${id}`).then((resp) => {
      if (resp.status === 204) alert("The review was deleted succesfully");
    });
  };
  const handleCart = (e) => {
    if (!user.id) alert("You are not logged");
    else {
      dispatch(
        addToCart({
          userId: user.id,
          quantity: 1,
          productId: game.id,
        })
      );
      alert("The videogame was succesfully added at the cart");
    }
  };

  const baseURL = "https://images.igdb.com/igdb/image/upload/t_720p/";

  if (alreadyPostedReview === false && user.id) {
    commentary = (
      <>
        <TextField onChange={handleReview} />
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Button onClick={handleAdd}>Add review</Button>
      </>
    );
  } else {
    if (!user.id) {
      commentary = <Typography>You are not logued</Typography>;
    } else {
      commentary = <Typography>You already have voted</Typography>;
    }
  }

  return (
    <>
      <Cart />
      <Box>
        <div id="product">
          <div className="content">
            <div id="img">
              <img src={baseURL + game.urlId + ".jpg"} alt="Imagen del juego" />
            </div>
            <div id="gameInfo">
              <Typography variant="h1" marginTop={"1%"}>
                {game.name}
              </Typography>
              <Box sx={{ "& > legend": { mt: 2 } }}>
                <Rating
                  readOnly
                  name="simple-controlled"
                  value={Math.round(game.valoration)}
                />
              </Box>
              <Typography variant="h2" marginTop={"1%"} marginBottom={"1%"}>
                ${game.price}
              </Typography>
              <Button variant="contained" onClick={handleCart}>
                Add to cart
              </Button>
              <div id="digitalText">
                <Typography color="text.secondary">
                  Este producto se vende en formato digital, el stock es
                  ilimitado
                </Typography>
              </div>
            </div>
          </div>
          <Typography variant="h6">
            Description: <br />
          </Typography>
          <Typography variant="body1">{game.description}</Typography>
          <br />
          <Typography variant="h6">
            Reviews: <br />
          </Typography>
          <div>{commentary}</div>
          {reviews.map((data, i) => {
            return (
              <>
                <Box border={1} borderRadius={1} marginTop={1}>
                  <Typography paddingTop={1} paddingLeft={1}>
                    {data.review}
                  </Typography>
                  <Rating
                    readOnly
                    name="simple-controlled"
                    value={data.rating}
                  />
                  {data.userId === user.id || user.admin === true ? (
                    <Button
                      variant="text"
                      onClick={() => {
                        handleDelete(data.id);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  ) : (
                    <></>
                  )}
                </Box>
              </>
            );
          })}
        </div>
      </Box>
    </>
  );
};

export default Product;
