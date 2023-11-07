import { AppBar, Badge, IconButton, Stack, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";

const darkTheme=createTheme({
  palette:{
    mode:"dark",
    secondary:{main:"#ab003c"}
  }
})

const Header = () => {

  const cart=useSelector((state)=>
    state.cart
  )
  const wishlist=useSelector((state)=>
    state.wishlist
  )

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar sx={{ px: { sm: 2, md: 25 } }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to={"/"} style={{ textDecoration: "none", color: "#fefefe" }}>
            <Typography variant="h5" fontSize={"28px"} sx={{ fontWeight: "900" }}>
              E-COM
            </Typography>
          </Link>
          <Stack direction={"row"} gap={{md:"30px"}}>
            <Link
              to={"/cart"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <IconButton color="inherit" disableRipple>
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingBagIcon  sx={{ mr: 0.5 }}></ShoppingBagIcon>
                  <Typography sx={{ fontWeight: "300",display: { xs: 'none', md: 'block' } }}>Bag</Typography>
                </Badge>
              </IconButton>
            </Link>
           <Link to={"/wishlists"} style={{textDecoration:"none",color:"inherit"}}>
              <IconButton color="inherit" disableRipple>
                <Badge badgeContent={wishlist.length} color="secondary">
                  <FavoriteIcon sx={{ marginRight:{md: 0.5} }}></FavoriteIcon>
                  <Typography sx={{ fontWeight: "300",display: { xs: 'none', md: 'block' }}} >Whishlist</Typography>
                </Badge>
              </IconButton>
           </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
