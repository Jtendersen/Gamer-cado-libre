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
import { useDispatch, useSelector } from "react-redux";
import { get_genres } from "../state/genre";

const color = yellow[500];
export default function SimpleSlider() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(get_genres())
  },[])
  const genres=useSelector(state=>state.genre)
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
      {!genres.length? <div>Loading...</div>:genres.map((genre) =>{console.log('SLIDER')
       return(
        <div key={genre.id} >
          <h3 key={genre.id}>
            <Card sx={{ maxWidth: 150, maxHeight: 280 }}>
              <CardActionArea>
                {genre.products[0] && <CardMedia
                  component="img"
                  height="200"
                  image={baseUrl + genre.products[0].urlId + ".jpg"}
                  alt="Genre_img"
                />}
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
                    >
                      {genre.genre}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </h3>
        </div>
      )})}
    </Slider>
  );
}
