import React, { Component } from "react";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default class Responsive extends Component {
  render() {
    var settings = {
      className: "center",
      centerPadding: "1%",
      dots: true,
      infinite: true,
      // speed: 500,
      slidesToShow: 6,
      slidesToScroll: 7,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.windowsreport.com/wp-content/uploads/2016/12/deponia-windows-game.jpg"
                    alt="PandC img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      POINT AND CLICK
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </h3>
          </div>
          <div>
            <h3>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://ftw.usatoday.com/wp-content/uploads/sites/90/2021/12/street-fighter-5-zeku-header.png?w=1000&h=576&crop=1"
                    // https://staticg.sportskeeda.com/editor/2019/03/cedbb-15534102082658-800.jpg
                    alt="fighting_img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      FIGHTING
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </h3>
          </div>
          <div>
            <h3>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://trotons.com/wp-content/uploads/2019/12/Best-Android-Offline-Shooting-Games-1000x600.jpg"
                    alt="fighting_img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      SHOOTER
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </h3>
          </div>
          <div>
            <h3>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDl-CvPuPuc7o1oHM7_mkqfh6hMSjR-Vag3Q&usqp=CAU"
                    alt="fighting_img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      MUSIC
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </h3>
          </div>
          <div>
            <h3>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/02/05/12/spelunky.jpg?quality=75&width=640&height=614&fit=bounds&format=pjpg&crop=16%3A9%2Coffset-y0.5&auto=webp"
                    alt="fighting_img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      PLATFORM
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </h3>
          </div>
          <div>
            <h3>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="http://wp.appadvice.com/wp-content/uploads/2010/01/Picture-001.png"
                    alt="fighting_img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      PUZZLE
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </h3>
          </div>
          <div>
            <h3>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://www.carlogos.org/uploads/2021/best-sim-racing-games-for-2022.jpg"
                    alt="fighting_img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      RACING
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </h3>
          </div>
          <div>
            <h3>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://ftw.usatoday.com/wp-content/uploads/sites/90/2021/12/cc-red-alert-remaster.png"
                    alt="fighting_img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      RTS
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </h3>
          </div>
          <div>
            <h3>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://hitechgazette.com/wp-content/uploads/2020/01/images-6.jpg"
                    alt="fighting_img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      SIMULATION
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </h3>
          </div>
          <div>
            <h3>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://media.dragonblogger.com/wp-content/uploads/2021/01/05095333/sports-video-games.jpeg"
                    alt="fighting_img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      SPORTS
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </h3>
          </div>
          <div>
            <h3>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://60fps.in/wp-content/uploads/2021/06/strategy-games-for-pc.jpg"
                    alt="fighting_img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      STRATEGY
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </h3>
          </div>
          <div>
            <h3>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/thumbnail/lead/news/8614433_Game.jpg"
                    alt="fighting_img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      ADVENTURE
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}

// import * as React from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import ListSubheader from "@mui/material/ListSubheader";
// import IconButton from "@mui/material/IconButton";
// import InfoIcon from "@mui/icons-material/Info";

// export default function TitlebarImageList() {
//   return (
//     <ImageList sx={{ width: 1, height: 0.1 }}>
//       <ImageListItem key="Subheader" cols={10}>
//         {/* <ListSubheader component="div">December</ListSubheader> */}
//       </ImageListItem>
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             // src={`${item.img}?w=248&fit=crop&auto=format`}
//             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             alt={item.title}
//             loading="lazy"
//           />
//           <ImageListItemBar title={item.title} subtitle={item.author} />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }

// const itemData = [
//   {
//     img: "https://static.wixstatic.com/media/6f93f3_717febe1dd8041f68df71fd08c3530b3~mv2.jpg/v1/fill/w_764,h_393,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/6f93f3_717febe1dd8041f68df71fd08c3530b3~mv2.jpg",
//     title: "Action",
//   },
//   {
//     img: "https://www.clickspeedtest.info/img/point-and-click-games.jpg",
//     title: "Point & Click",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Coffee",
//     // cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//     // cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//     // rows: 2,
//     // cols: 2,
//     // featured: true,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     title: "Basketball",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//     title: "Fern",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//     title: "Mushrooms",
//     // rows: 2,
//     // cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     title: "Tomato basil",
//   },
// ];
