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

export const Cart = () => {
  const store = useAppSelector((store) => store.products);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(store.products);
  }, [store]);

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
            height: "61vh",
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
