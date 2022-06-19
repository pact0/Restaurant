import App from "@components/App";
import * as React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./reducers/store";
import { store } from "./reducers/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <Provider store={store}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
    </Provider>
);
