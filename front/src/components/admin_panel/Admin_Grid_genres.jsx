import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, ButtonGroup, CardActionArea, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import { yellow } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { edit_genre, remove_genre } from "../../state/genre";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const color = yellow[500];
export default function Grid_genres() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genre);
  const handlerRemove = (genreID, genreName, i) => {
    dispatch(remove_genre(genreID));
  };
  const genreHandler = (id, index) => {
    const input = window.prompt("New name");
    if (input) dispatch(edit_genre({ id, index, input, genres }));
  };
  console.log(genres);
  const baseUrl = "https://images.igdb.com/igdb/image/upload/t_720p/";
  return (
    <Box margin={4}>
      <Stack
        direction="row"
        flexWrap={"wrap"}
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        {genres.map((genre, i) => (
          <div key={i}>
            <h3 key={genre.id}>
              <Card sx={{ maxWidth: 150, maxHeight: 280 }}>
                <CardActionArea>
                  <CardContent
                    component={Stack}
                    direction="column"
                    justifyContent="center"
                    sx={{
                      bgcolor: color,
                      height: 80,
                    }}
                  >
                    <ButtonGroup size="small" fullWidth>
                      <DeleteForeverRoundedIcon
                        color="error"
                        onClick={() => {
                          handlerRemove(genre.id, genre.genre, i);
                        }}
                      />
                      <Divider position="vertical" />
                      <EditRoundedIcon
                        color="primary"
                        onClick={() => {
                          genreHandler(genre.id, i);
                        }}
                      />
                    </ButtonGroup>

                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="div"
                    >
                      {genre.genre}
                    </Typography>
                  </CardContent>
                  {genre.products[0] && (
                    <CardMedia
                      component="img"
                      height="200"
                      image={baseUrl + genre.products[0].urlId + ".jpg"}
                      alt="Genre_img"
                    />
                  )}
                </CardActionArea>
              </Card>
            </h3>
          </div>
        ))}
      </Stack>
    </Box>
  );
}
