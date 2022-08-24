import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({game}) {
  return (
    <div id='card'>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="100%"
            image={game.picture}
            alt="Portada del videojuego"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {game.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {game.sinapsis}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </div>
  );
}