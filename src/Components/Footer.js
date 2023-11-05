import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Stack
      style={{ background: "#424242" }}
      sx={{
        direction: { md: "row", xs: "column" },
        p: 2,
      }}
    >
      <Box sx={{ color: "white", justifyContent: "center", display: "flex", flexDirection:"column",alignItems:"center" }}>
        <Typography variant="h6" color="inherit">
          E-COM
        </Typography>
        <Typography variant="body1" color="inherit" maxWidth={"400px"} textAlign={"center"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          laboriosam cum vero eaque pariatur consequuntur inventore dicta.
        </Typography>
      </Box>
    </Stack>
  );
};

export default Footer;
