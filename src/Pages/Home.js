import {
  Box,
  Button,
  Container,
  Stack,
  ThemeProvider,
  Typography,
  createTheme, TextField,
} from "@mui/material";
import React from "react";
import ItemCard from "../Components/ItemCard";
import Footer from "../Components/Footer";
import { useDispatch } from "react-redux";
import { searchProduct } from "../Redux/ProductsSlice";


const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#424242",
    },
  //   mode: "dark",
  },
});

const Home = () => {
  const dispatch=useDispatch()
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
          <Button variant="contained" color="primary" sx={{ mt: 2 }} href="#products">
            Explore
          </Button>
        </Box>
        <img src="/img/cover.png" alt="" className="hero_img" />
      </Stack>
      <Container sx={{ my: 8 ,textAlign:"center"}} id="products">
        <Typography variant="h4" color="inherit" mt={5} mb={3} textAlign={"center"}>Products</Typography>
        <TextField
        fullWidth
        sx={{mb:5}}
          label="Search for a Product"
          onChange={(e)=>dispatch(searchProduct(e.target.value))}
          
        />
        <ItemCard></ItemCard>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};


export default Home;
