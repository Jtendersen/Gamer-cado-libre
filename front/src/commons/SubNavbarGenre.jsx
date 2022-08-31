import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import { Stack } from "@mui/system";
import { Link  } from "react-router-dom";






export default function SimpleSlider() {
  const [navbarGenres, setNavbarGenres] = useState([]);
  useEffect(() => {
    axios.get("/api/genres").then((res) => setNavbarGenres(res.data));
  }, []);
  

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
        <div key={genre.id}>
          <h3 >
          
            <Card  sx={{ maxWidth: 150, maxHeight: 280 }}>
              <CardActionArea >
                <CardMedia
      
                  component="img"
                  height="200"
                  image={baseUrl + genre.products[0].urlId + ".jpg"}
                  alt="Genre_img"
                />
                
                
                <Link style={{ textDecoration: "none" }}  to={`/products/${genre.genre}`}>
                  <CardContent
                    component={Stack}
                    direction="column"
                    justifyContent="center"
                    sx={{
                      bgcolor: "secondary.main",
                      height: 80,
                    }}
                  ><Typography 
                  color="text.main">{(genre.genre).toUpperCase()}</Typography>
                  
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
