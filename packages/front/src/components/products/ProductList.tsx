import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import restaurant_menu from "@assets/restaurant-data.json";
import { Product } from "@models/Product";
import { ProductCard } from "./ProductCard";

const Wrapper = styled.div`
  background: #050710;
`;

export const ProductList = (props: {}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(restaurant_menu.restaurant_menu);
  }, []);

  return (
    <Wrapper>
      {products.map((product: Product) => {
        return <ProductCard product={product} />;
      })}
    </Wrapper>
  );
};
