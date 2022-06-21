import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Product } from "@models/Product";

// Define a type for the slice state
interface ProductsState {
  products: Product[];
  totalPrice: number;
}

// Define the initial state using that type
const initialState: ProductsState = {
  products: [],
  totalPrice: 0,
};

export const productsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const product = state.products.find((product) => {
        return product.id !== action.payload;
      });
      if(product){

      state.products = state.products.filter((product) => {
        return product.id !== action.payload;
      });

      state.totalPrice = state.totalPrice - Number(product.price.split(" ")[0]);
      }
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default productsSlice.reducer;
