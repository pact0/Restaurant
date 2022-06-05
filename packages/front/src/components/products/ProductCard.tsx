import styled from "@emotion/styled";
import { Product } from "@models/Product";
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { shadows } from "@mui/system";
import Link from "@mui/material/Link";
import { Routes, Route } from "react-router-dom";
import ProductDetailed from "../products/ProductDetailed";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        background: `white`,
        boxShadow: 3,
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
        p: 2,
        borderRadius: 3,
      }}>
      <Link href={product.id} underline="hover" sx={{ color: "black" }}>
        <Box
          component="img"
          sx={{ width: "100%", borderRadius: 15, p: 2 }}
          src={product.image}
        />
      </Link>
      <Typography sx={{ color: "black", fontWeight: 400, fontSize: 32 }}>
        <Link href={product.id} underline="hover" sx={{ color: "black" }}>
          {product.name}
        </Link>
      </Typography>

      <Typography
        sx={{
          color: "black",
          fontWeight: 400,
          fontSize: 32,
          color: "#d42c2c",
        }}>
        {product.price}
      </Typography>
      <Button
        sx={{ py: 2, mt: 2 }}
        type="submit"
        size="large"
        color="error"
        fullWidth
        variant="contained">
        Dodaj do koszyka
      </Button>
    </Container>
  );
};
