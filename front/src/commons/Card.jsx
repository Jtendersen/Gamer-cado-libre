import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ game }) {
  const baseURL = "https://images.igdb.com/igdb/image/upload/t_720p/";
  return (
    <div id="card">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={baseURL + game.urlId + ".jpg"}
            alt="Portada del videojuego"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {game.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {game.description && `${game.description.substring(0,100)}...`}
            </Typography>
            <Typography>{`$${game.price}`}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
