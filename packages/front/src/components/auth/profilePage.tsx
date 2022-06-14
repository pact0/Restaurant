import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "../assets/img/background.jpg";
import restaurant_menu from "@assets/restaurant-data.json";
import React, { useEffect, useState } from "react";
import { Product } from "@models/Product";
import { ProductCard } from "./ProductCard";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Avatar from '@mui/material/Avatar';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const ProfilePage = () => {
  const [products, setProducts] = useState([]);

  const [value, setValue] = React.useState<number | null>(2);

  useEffect(() => {
    setProducts(restaurant_menu.restaurant_menu);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        background: "white",
        backgroundSize: "cover",
        height: "100vh"
      }}>
      <CssBaseline />
      <Box
        sx={{
          background: "#21242e",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "2%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography sx={{ color: "white", fontWeight: 500, fontSize: 64 }}>
         Profil użytkownika
        </Typography>
      </Box>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{p:8}}>

      <Grid item xs={4} sx={{display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRight: 1,
              borderColor: 'primary.main'}} >
        <Avatar
    alt="Remy Sharp"
    src={require('../../assets/img/profile1.jpg').default}
    sx={{ width: "50%", height: "50%" ,aspectRatio: 135 / 76,}}
    />

    <Button
                type="submit"
                variant="contained"
                sx={{width: "50%",mt: 3, mb: 2, background: "#21242e" }}>
                Historia zamówień
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{width: "50%", background: "#d42c2c" }}>
                Usuń konto
              </Button>

      </Grid>
      <Grid item xs={8} ><Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3, p: 5 }}>
        <Typography sx={{ width:"100%", color: "black", fontWeight: 300, fontSize: 32, mb:3 }}>
         Dane
        </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Imię"
                    defaultValue="Anna"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Nazwisko"
                    name="lastName"
                    defaultValue="Nowak"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Adres email"
                    name="email"
                    defaultValue="AnnaNowak@agh.edu.pl"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phone_number"
                    label="Numer Telefonu"
                    name="phone_number"
                    autoComplete="phone-number"
                    defaultValue="694202137"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background: "#21242e" }}>
                Uaktualnij
              </Button>

            </Box></Grid>
      </Grid>
      
    </Container>
  );
};
