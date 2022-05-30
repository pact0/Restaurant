import styled from "@emotion/styled";
import * as React from "react";
import { useEffect, useState } from "react";
import restaurant_menu from "@assets/restaurant-data.json";
import { MainPage } from "@components/home/MainPage";
import { ProductList } from "./products/ProductList";
import { Navbar } from "./navbar/Navbar";
import ProductDetailed from "./products/ProductDetailed";


const App = () => (
  <div>
    <Navbar />
    <ProductDetailed prod={restaurant_menu.restaurant_menu[0]}/>
  </div>
);

export default App;
