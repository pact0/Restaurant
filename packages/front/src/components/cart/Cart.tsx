import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import restaurant_menu from "@assets/restaurant-data.json";
import React, { useEffect, useState } from "react";
import { Product } from "@models/Product";
import { CartProductCard } from "./CartProductCard";
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

export const Cart = () => {
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
        backgroundImage: `url(https://i.ibb.co/ygXF9dT/thumb-1920-208392-1.jpg)`,
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
          sx={{ width: "59%", background: "#d42c2c", p: 1, borderRadius: 3 }}>
         <Typography variant="h1" component="div" sx={{ flexGrow: 1 }} align="center" color={'white'}>
            Twój Koszyk
          </Typography>
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
          spacing={0}
          sx={{
            width: "60%",
            height: "61vh",
            overflowY: "scroll",
          }}>
          {products.map((product: Product) => {
            return (
              <Grid item  xs={8} sm={20} md={20}>
                  <Box sx={{ width: "100%", height: "30%", borderRadius: 15, p: 0 }}>
                    <CartProductCard product={product} />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Button
        sx={{ ml: "54%", mt: 2, alignItems: "center" }}
        type="submit"
        size="large"
        color="error"
        variant="contained">
        Przejdź do płatności 
      </Button>
      
    </Container>
  );
};
