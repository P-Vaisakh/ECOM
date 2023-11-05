import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
  ThemeProvider,
  createTheme,
  Box,
  Fab,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  DialogContentText,
} from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { removeFromCart } from "../Redux/CartSlice";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const dark = createTheme({
  palette: {
    primary: {
      main: "#424242",
    },
    secondary: {
      main: "#f5f5f5",
    },
    success:{
      main:"#4caf50"
    }
  },
});

const Cart = () => {
  const cartArr = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={dark}>
      <Container
        sx={{
          px: "0",
          pt: "80px",
          height: "100vh",
          overflowY: "auto",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Typography
          variant="h4"
          color="initial"
          fontWeight={"700"}
          mb={5}
          ml={2}
        >
          Your Bag
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent={"center"}
          pb={"20px"}
          px={2}
        >
          {cartArr.length > 0 ? (
            cartArr.map((item, index) => (
              <>
                <Grid item xs={9} md={4} lg={3} key={index}>
                  <Card sx={{ background: "#fff", p: 2, position: "relative" }}>
                    <CardMedia
                      title={item.title}
                      sx={{
                        height: { xs: "200px", md: "300px" },
                        width: "100%",
                      }}
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
                          precision={0.25}
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
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <RemoveShoppingCartIcon />
                    </Button>
                  </Card>
                </Grid>
              </>
            ))
          ) : (
            <h3>No items in cart</h3>
          )}
        </Grid>
        <Box
          sx={{
            width: "100%",
            height: "60px",
            position: "sticky",
            bottom: 0,
            background: "#424242",
            display: cartArr.length == 0 ? "none" : "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: "16px", md: "100px" },
          }}
        >
          <Typography variant="body1" color="secondary">
            Total : $&nbsp;
            {cartArr.length > 0 &&
              cartArr
                .map((i) => i.price)
                .reduce((a, b) => a + b)
                .toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClickOpen}
          >
            Checkout
            <ShoppingCartCheckoutIcon sx={{ ml: 1 }} />
          </Button>
        </Box>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Billing Summary</DialogTitle>
          <DialogContent>
            {cartArr.length > 0 && (
              <>
                {cartArr.map((i, ind) => (
                  <>
                    <Stack direction={"row"} gap={2} mb={1} mt={1} pl={1}>
                      <DialogContentText
                        sx={{ flex: 3.5 }}
                        fontWeight={500}
                      >
                        {i.title}
                      </DialogContentText>
                      <DialogContentText
                        flex={1.5}
                        width={"120px"}
                        fontWeight={700}
                        color={"black"}
                        ml={2}
                      >
                        $ {i.price}
                      </DialogContentText>
                    </Stack>
                    <hr />
                  </>
                ))}
                <Stack direction={"row"} pl={1} mt={2}>
                  <Typography variant="body1" color="initial" flex={3.5}>
                    Grand Total
                  </Typography>
                  <Typography variant="body1" color="initial" flex={1.5} fontWeight={900} >
                    $ {cartArr.length > 0 &&
                      cartArr
                        .map((i) => i.price)
                        .reduce((a, b) => a + b)
                        .toFixed(2)}
                  </Typography>
                </Stack>
              </>
            )}
          </DialogContent>
          <DialogActions sx={{p:3}}>
            <Button onClick={() => setOpen(false)} color="success" variant="contained">
              Proceed to pay
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
};

export default Cart;
