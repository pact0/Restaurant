import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@reducers/userSlice";
import productsSlice from "./productsSlice";

import { connectRouter} from "connected-react-router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    user: userSlice,
    products: productsSlice,
  },
});

store.subscribe(() => console.log("STATE: ", store.getState()));
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
