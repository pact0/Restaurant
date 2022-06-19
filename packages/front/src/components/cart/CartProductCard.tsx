import { Product } from "@models/Product";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useAppDispatch } from "src";
import { removeProduct } from "@reducers/productsSlice";

interface Props {
  product: Product;
}

export const CartProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const handleProductRemove = () => {
    dispatch(removeProduct(product.id));
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        background: `white`,
        boxShadow: 3,
        color: "black",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        mt: 2,
        p: 2,
        borderRadius: 3,
      }}>
      <Link href={product.id} underline="hover" sx={{ color: "black" }}>
        <Box
          component="img"
          sx={{ width: 125, height: 125, borderRadius: 15, p: 2 }}
          src={
            require("../../assets/img/".concat(product.id).concat(".jpg"))
              .default
          }
        />
      </Link>
      <Box>
        <Typography sx={{ color: "black", fontWeight: 400, fontSize: 24 }}>
          <Link href={product.id} underline="hover" sx={{ color: "black" }}>
            {product.name}
          </Link>
          <Typography
            sx={{
              color: "black",
              fontWeight: 400,
              fontSize: 32,
              color: "#d42c2c",
            }}>
            {product.price}
          </Typography>
        </Typography>
      </Box>

      <Button
        onClick={handleProductRemove}
        sx={{ mr: 0, ml: "auto" }}
        type="submit"
        size="medium"
        color="error">
        <RemoveShoppingCartIcon />
      </Button>
    </Container>
  );
};
