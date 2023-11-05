import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  CardActions,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/CartSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { addToWishlist, removeFromWishlist } from "../Redux/wishlistSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";


const ItemCard = () => {
  const wishlist = useSelector((state) => state.wishlist);

  const [products, setproducts] = useState([]);

  const dispatch = useDispatch();

  const fetchTrending = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setproducts(data);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

   const addItem = (item) => {
     if (!wishlist.find((favorite) => favorite.id === item.id)) {
       dispatch(addToWishlist(item));
     } else {
       dispatch(removeFromWishlist(item.id))
     }
   };

  return (
    <Grid container spacing={4} justifyContent={"center"}>
      {products.length > 0 ? (
        products.map((item, index) => (
          <Grid item xs={9} md={4} lg={3} key={index}>
            <Card
              sx={{
                background: "#fefefe",
                p: 2,
                position: "relative",
                color: "rgb(0,0,0,0.87)",
              }}
            >
              <CardMedia
                title={item.title}
                sx={{ height: {xs:"200px",md:"300px"}, width: "100%" }}
              >
                <img
                  src={item.image}
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </CardMedia>
              <CardContent sx={{ textAlign: "start", p: "2px",mt:{xs:2} }}>
                <Typography
                  fontWeight={300}
                  variant="h6"
                  color="initial"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.title}
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"start"}
                  alignItems={"center"}
                >
                  <Rating
                    name="read-only"
                    value={item.rating.rate}
                    precision={0.05}
                    readOnly
                    size="small"
                  />
                  <Typography variant="subtitle2" color="gray">
                    ({item.rating.count})
                  </Typography>
                </Stack>
                <Typography variant="h6" color="initial">
                  ${item.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ py: 1, px: 0 }}>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => {
                    dispatch(addToCart(item));
                  }}
                >
                  <AddShoppingCartIcon />
                </Button>
              </CardActions>
              <Button
                sx={{ position: "absolute", top: 0, right: 0, my: 1, px: 0 }}
                disableRipple
                onClick={() => addItem(item)}
              >
                {
                  !wishlist.find((favorite) => favorite.id === item.id)?
                  <FavoriteBorderIcon></FavoriteBorderIcon>:
                  <FavoriteIcon/>}
              </Button>
            </Card>
          </Grid>
        ))
      ) : (
       <Box minHeight={"100vh"}> <CircularProgress /></Box>
      )}
    </Grid>
  );
};

export default ItemCard;
