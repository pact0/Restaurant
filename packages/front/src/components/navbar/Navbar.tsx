import { About } from "@components/about/About";
import { Contact } from "@components/contact/Contact";
import { MainPage } from "@components/home/MainPage";
import { Cart } from "@components/cart/Cart";
import Login from "../auth/Login";
import { ProfilePage } from "../auth/profilePage";
import { Tracking } from "../order/tracking";
import Register from "../auth/Register";
import restaurant_menu from "@assets/restaurant-data.json";
import Badge from "@mui/material/Badge";
import { ListingPage } from "../products/ListingPage";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetailed from "../products/ProductDetailed";
import { Product } from "@models/Product";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Container from "@mui/material/Container";
import { useAppDispatch, useAppSelector } from "src";
import { logout } from "@reducers/userSlice";
import { Payment } from "../payment/Payment"

export const Navbar = (props: {}) => {
  const store = useAppSelector((store) => store.products);
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const [badge, setBadge] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setBadge(store.products.length);
  }, [store]);

  useEffect(() => {
    setIsLoggedIn(!!user.name);
  }, [user]);

  const handleLogout = ()=>{
    dispatch(logout())
  }

  return (
    <AppBar style={{ background: "#d42c2c", color: "white" }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <Link to="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 576 512">
              <path d="M96 128C96.53 128 97.07 128 97.6 128C105 91.49 137.3 64 176 64C190.1 64 204.1 68.1 216.9 75.25C230.2 49.55 257.1 32 288 32C318.9 32 345.8 49.56 359.1 75.25C371 68.1 385 64 400 64C438.7 64 470.1 91.49 478.4 128C478.9 128 479.5 128 480 128C515.3 128 544 156.7 544 192C544 203.7 540.9 214.6 535.4 224H40.56C35.12 214.6 32 203.7 32 192C32 156.7 60.65 128 96 128H96zM16 283.4C16 268.3 28.28 256 43.43 256H532.6C547.7 256 560 268.3 560 283.4C560 356.3 512.6 418.2 446.9 439.8C447.6 442.4 448 445.2 448 448C448 465.7 433.7 480 416 480H160C142.3 480 128 465.7 128 448C128 445.2 128.4 442.4 129.1 439.8C63.4 418.2 16 356.3 16 283.4H16z" />
            </svg>
          </Link>
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Placeholder
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link to="/home">
            <Button sx={{ color: "white" }} size="large">
              Strona g????wna
            </Button>
          </Link>

          <Link to="/menu">
            <Button sx={{ color: "white" }} size="large">
              Menu
            </Button>
          </Link>

          <Link to="/contact">
            <Button sx={{ color: "white" }} size="large">
              Kontakt
            </Button>
          </Link>

          <Link to="/about">
            <Button sx={{ color: "white" }} size="large">
              O nas
            </Button>
          </Link>

          {!isLoggedIn && (
            <>
              <Link to="/login">
                <Button sx={{ color: "white" }} size="large" href="/login">
                  Login
                </Button>
              </Link>

              <Link to="/register">
                <Button sx={{ color: "white" }} size="large">
                  Rejestracja
                </Button>
              </Link>
            </>
          )}

          {isLoggedIn && (
            <Button onClick={handleLogout} sx={{ color: "white" }} size="large">
              Wyloguj
            </Button>
          )}

          <Link to="/cart">
            <Button sx={{ color: "white" }} size="large">
              <Badge badgeContent={badge} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </Button>
          </Link>
        </Stack>
      </Toolbar>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/menu" element={<ListingPage />} />
        <Route path="/contact" element={<ProfilePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/track" element={<Tracking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />

        {restaurant_menu.restaurant_menu.map((product: Product) => {
          var str1 = "/";
          var x = str1.concat(product.id);
          return (
            <Route path={x} element={<ProductDetailed prod={product} />} />
          );
        })}
      </Routes>
    </AppBar>
  );
};
