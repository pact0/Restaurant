import { About } from "@components/about/About";
import { MainPage } from "@components/home/MainPage";
import restaurant_menu from "@assets/restaurant-data.json";
import ProductDetailed from "../products/ProductDetailed";
import { AppBar, Toolbar, IconButton, Typography, Stack, Button} from "@mui/material"
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Container from '@mui/material/Container';

export const Navbar = (props: {}) => {
  return (
      <AppBar style={{background: '#d42c2c'}}>
        <Toolbar >

          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <Link to="/home"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 576 512"><path d="M96 128C96.53 128 97.07 128 97.6 128C105 91.49 137.3 64 176 64C190.1 64 204.1 68.1 216.9 75.25C230.2 49.55 257.1 32 288 32C318.9 32 345.8 49.56 359.1 75.25C371 68.1 385 64 400 64C438.7 64 470.1 91.49 478.4 128C478.9 128 479.5 128 480 128C515.3 128 544 156.7 544 192C544 203.7 540.9 214.6 535.4 224H40.56C35.12 214.6 32 203.7 32 192C32 156.7 60.65 128 96 128H96zM16 283.4C16 268.3 28.28 256 43.43 256H532.6C547.7 256 560 268.3 560 283.4C560 356.3 512.6 418.2 446.9 439.8C447.6 442.4 448 445.2 448 448C448 465.7 433.7 480 416 480H160C142.3 480 128 465.7 128 448C128 445.2 128.4 442.4 129.1 439.8C63.4 418.2 16 356.3 16 283.4H16z"/></svg></Link>
          </IconButton>
        <Typography variant="h4" component='div' sx={{ flexGrow: 1 }}>
            Lipcowa Szama
        </Typography>
        <Stack direction='row' spacing={2}>
            <Button color="inherit" size="large" href="/home">Home</Button>
            <Button color="inherit" size="large" href="/menu">Menu</Button>
            <Button color="inherit" size="large" href="/contact">Contact</Button>
            <Button color="inherit" size="large" href="/about">About</Button>
            <Button color="inherit" size="large" href="/login">Login</Button>
            <Button color="inherit" size="large" href="/register">Register</Button>
        </Stack>

        </Toolbar>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/menu" element={<ProductDetailed prod={restaurant_menu.restaurant_menu[0]}/>} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
        </Routes>
      </AppBar>
  );
};
