import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { yellow } from "@mui/material/colors";

const color = yellow[500];

export default function SimpleSlider() {
  const [navbarGenres, setNavbarGenres] = useState([]);
  useEffect(() => {
    axios.get("/api/genres").then((res) => setNavbarGenres(res.data));
  }, []);
  //console.log("ESTOS SON LOS GENRERS", navbarGenres);

  const baseUrl = "https://images.igdb.com/igdb/image/upload/t_720p/";

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 9,
  };
  return (
    <Slider {...settings}>
      {navbarGenres.map((genre) => (
        <div>
          <h3 key={genre.id} id="CardActionArea">
            <Card sx={{ maxWidth: 150, maxHeight: 280 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={baseUrl + genre.products[0].urlId + ".jpg"}
                  alt="Genre_img"
                />
                <Link to={`/products/${genre.genre}`}>
                  <CardContent
                    component={Stack}
                    direction="column"
                    justifyContent="center"
                    sx={{
                      bgcolor: color,
                      height: 80,
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="div"
                      borderRadius={5}
                    >
                      {genre.genre}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </h3>
        </div>
      ))}
    </Slider>
  );
}
