import {
  Box,
  Button,
  Container,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import ItemCard from "../Components/ItemCard";
import Alert from "@mui/material/Alert";
import Footer from "../Components/Footer";


const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#424242",
    },
  //   mode: "dark",
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Stack
        direction={{ md: "row" }}
        pt={15}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          px: { xs: "25px", md: 7 },
          pt: { md: 15, xs: 10 },
        }}
      >
        <Box>
          <Typography
            variant="h2"
            color="initial"
            fontWeight={900}
            sx={{ fontSize: { md: "50px", xs: "25px" } }}
          >
            Experience Shopping <br />
            Reinvented with E-COM
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ maxWidth: { md: "550px" } }}
            mt={2}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus voluptatem nesciunt libero molestiae, ullam sint!
            Possimus a in eaque cupiditate reiciendis eos quibusdam repellendus
            id. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
            debitis?
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Explore
          </Button>
        </Box>
        <img src="/img/cover.png" alt="" className="hero_img" />
      </Stack>
      <Container sx={{ my: 8 }}>
        <Typography variant="h4" color="inherit" mb={7} mt={5} textAlign={"center"}>Products</Typography>
        <ItemCard></ItemCard>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};


export default Home;
