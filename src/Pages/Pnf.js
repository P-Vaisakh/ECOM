import { Button, Container, ThemeProvider, Typography, createTheme } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom'

const dark=createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#212121"
        }
    }
})

const Pnf = () => {
  return (
    <ThemeProvider theme={dark}>
        <Container sx={{py:10}}>
            <img src="/img/404.png" alt=""  width={"60%"} style={{display:"block", margin:"auto"}} />
            <Typography variant="h4" color="inherit" sx={{display:"block", marginX:"auto",textAlign:"center",mb:3}} >The page you requested cannot be found</Typography>
            <Link to={"/"}><Button variant='contained' sx={{display:'block',marginX:"auto"}} >Back to home</Button></Link>
        </Container>
    </ThemeProvider>
  )
}

export default Pnf