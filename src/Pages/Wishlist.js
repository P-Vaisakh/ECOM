import React from 'react'
import Grid from '@mui/material/Grid'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardContent, CardMedia, Container, Rating, Stack, ThemeProvider, Typography, createTheme } from '@mui/material';
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { removeFromWishlist } from '../Redux/wishlistSlice';
import { addToCart } from '../Redux/CartSlice';

const dark=createTheme({
    palette:{
        primary:{
            main:"#424242"
        }
    }
})

const Wishlist = () => {

    const wishlistArr=useSelector(state=>
        state.wishlist
    )

    const dispatch=useDispatch()

    const addCart=(item,itemId)=>{
      dispatch(addToCart(item))
      dispatch(removeFromWishlist(itemId))
    }

  return (
    <ThemeProvider theme={dark}>
      <Container sx={{ py: 20 }}>
        <Grid container spacing={4} justifyContent={"center"}>
          {wishlistArr.length > 0 ? (
            wishlistArr.map((item, index) => (
              <Grid item xs={9} md={4} lg={3} key={index}>
                <Card sx={{ background: "#fff", p: 2, position: "relative" }}>
                  <CardMedia
                    title={item.title}
                    sx={{ height: { xs: "200px", md: "300px" }, width: "100%" }}
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
                  <CardContent sx={{ textAlign: "start", p: "2px" }}>
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
                        precision={0.1}
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
                  <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() => addCart(item, item.id)}
                  >
                    <AddShoppingCartIcon />
                  </Button>
                  <Button
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      my: 1,
                      px: 0,
                    }}
                    disableRipple
                  >
                    {<FavoriteIcon></FavoriteIcon>}
                  </Button>
                </Card>
              </Grid>
            ))
          ) : (
            <h3>No items is wishlist</h3>
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Wishlist