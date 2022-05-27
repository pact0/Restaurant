import styled from "@emotion/styled";
import * as React from "react";
import { MainPage } from "@components/home/MainPage";
import { ProductList } from "./products/ProductList";

const Wrapper = styled("div")`
  background: blue;
  width: 100%;
  height: 100%;
`;

const App = () => (
  <Wrapper>
    <MainPage />
    <ProductList/>
  </Wrapper>
);

export default App;
