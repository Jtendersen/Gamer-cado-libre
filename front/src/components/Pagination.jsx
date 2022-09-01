import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Container } from "@mui/system";
import { useNavigate } from "react-router";

export default function PaginationControlled(games) {
  const navigate = useNavigate();
  const sendTo = (string) => {
    navigate(`/${string}`);
    window.scrollTo(0, 0);
  };
  let gamesPageQuantity;
  if (games.games.length)
    gamesPageQuantity = games.games[games.games.length - 1].page;
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    if (value == 1) {
      return setPage(value), sendTo("");
    }
    setPage(value);
    sendTo(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Container maxWidth="sm">
          <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination
              count={gamesPageQuantity}
              page={page}
              onChange={handleChange}
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
