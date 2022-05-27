import styled from "@emotion/styled";
import { Product } from "@models/Product";
import React from "react";

interface Props {
  product: Product;
}

const Wrapper = styled.div``;

const Name = styled.div`
  color: white;
`;

export const ProductCard = ({ product }: Props) => {
  return (
    <Wrapper>
      <Name>{product.name}</Name>
    </Wrapper>
  );
};
