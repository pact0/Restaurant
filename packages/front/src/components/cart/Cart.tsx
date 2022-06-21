import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { Product } from "@models/Product";
import { CartProductCard } from "./CartProductCard";
import { useAppSelector } from "src";
import { Payment } from '../payment/Payment';
import { Routes, Route, Link } from "react-router-dom";

export const Cart = () => {
  const store = useAppSelector((store) => store.products);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(store.products);
  }, [store]);


  function priceSum(products: any[]) {
    var suma = products.reduce((a,v) =>  a = a + parseFloat(v.price.split(' ')[0].replace(',','.')) , 0 );
    return suma;
  };

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
        }}></Box>

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
          <Typography
            variant="h1"
            component="div"
            sx={{ flexGrow: 1 }}
            align="center"
            color={"white"}>
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
            height: "40vh",
            overflowY: "scroll",
          }}>
          {products.map((product: Product) => {
            return (
              <Grid item xs={8} sm={20} md={20}>
                <Box
                  sx={{ width: "100%", height: "30%", borderRadius: 15, p: 0 }}>
                  <CartProductCard product={product} />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          ml: "30%",
          mt: 4,
          width: "40%"
        }}>

      <Container
      maxWidth="xs"
      sx={{
        background: `white`,
        boxShadow: 3,
        color: "black",
        display: "flex",
        alignItems: "center",
        mt: 2,
        p: 2,
        borderRadius: 3,
      }}>{"Suma: " + priceSum(products) + ",00 zł"}</Container>
      
      <Link to="/payment">
      <Button
        sx={{ mt: 2, alignItems: "center", borderRadius: 3}}
        type="submit"
        size="large"
        color="error"
        variant="contained">
        Przejdź do płatności
      </Button>
      </Link>
      </Box>
      <Routes>
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Container>
  );
};
