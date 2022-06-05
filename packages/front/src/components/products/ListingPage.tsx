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

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const ListingPage = () => {
  const [products, setProducts] = useState([]);

  const [value, setValue] = React.useState<number | null>(2);

  useEffect(() => {
    setProducts(restaurant_menu.restaurant_menu);
  }, []);

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        background: "#21242e",
        backgroundSize: "cover",
      }}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(https://i.ibb.co/ygXF9dT/thumb-1920-208392-1.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "2%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Box>
          <Grid container sx={{ padding: 4, mt: 4, color: "white" }}>
            <Grid item xs={12} sm={3} sx={{ mr: 2 }}>
              <Box sx={{ background: "rgba(255,255,255,0.6)" }}>
                <TextField
                  autoComplete="given-name"
                  variant="filled"
                  name="City"
                  required
                  fullWidth
                  id="City"
                  label="Miasto"
                  autoFocus
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ mr: 2 }}>
              <Box sx={{ background: "rgba(255,255,255,0.6)" }}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  id="street"
                  label="Ulica"
                  name="street"
                  autoComplete="Mickiewicza"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={2} sx={{ mr: 1 }}>
              <Box sx={{ background: "rgba(255,255,255,0.6)" }}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  id="number"
                  label="Nr. budynku"
                  name="number"
                  autoComplete="0"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={2} sx={{ px: 2, mt: 0 }}>
              <Button
                sx={{ py: 2 }}
                type="submit"
                size="large"
                color="error"
                fullWidth
                variant="contained">
                Szukaj
              </Button>
            </Grid>
          </Grid>
        </Box>

        <CssBaseline />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          ml: 1,
          mt: 4,
        }}>
        <Grid
          container
          spacing={2}
          sx={{ width: "59%", background: "white", p: 1, borderRadius: 3 }}>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Sortuj
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "category",
                  id: "uncontrolled-native",
                }}>
                <option value={10}>Cena rosnąco</option>
                <option value={20}>Cena malejąco</option>
                <option value={30}>Oceny rosnąco</option>
                <option value={40}>Oceny malejąco</option>
              </NativeSelect>
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Kategoria
              </InputLabel>
              <NativeSelect
                defaultValue={60}
                inputProps={{
                  name: "category",
                  id: "uncontrolled-native",
                }}>
                <option value={10}>Zestawy</option>
                <option value={20}>Lunch</option>
                <option value={30}>Szef kuchni poleca</option>
                <option value={40}>Przystawki</option>
                <option value={50}>Przystawki Tandoori</option>
                <option value={60}>Dania główne</option>
                <option value={70}>Zupy</option>
              </NativeSelect>
            </FormControl>
          </Grid>

          <Grid item xs={2} sx={{ ml: 0 }}>
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">
                Minimalna cena
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                value="0"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
          </Grid>

          <Grid item xs={2} sx={{ ml: 0 }}>
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">
                Maksymalna cena
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                value="50"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={2} sx={{ ml: 3 }}>
            <Typography component="legend" sx={{ color: "black" }}>
              Ocena
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Grid>

          <Grid item xs={1}>
            <Button
              sx={{ px: 5 }}
              type="submit"
              size="large"
              color="error"
              fullWidth
              variant="contained">
              filtruj
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          margin: "10px 0px 0px 0px",
          overflow: "hidden",
        }}>
        <Grid
          container
          spacing={3}
          sx={{
            width: "60%",
            height: "100vh",
            overflowY: "scroll",
          }}>
          {products.map((product: Product) => {
            return (
              <Grid item xs={4}>
                <ProductCard product={product} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};
