import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import type { RootState } from "./store";

// Define a type for the slice state
interface UserState {
  email: string;
  role: string;
  token: string;
  name: string;
}

// Define the initial state using that type
const initialState: UserState = {
  email: "",
  role: "",
  token: "",
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      const decoded = jwt_decode(action.payload) as {
        role: string;
        email: string;
        name: string;
      };
      state.token = action.payload;
      state.email = decoded.email;
      state.name = decoded.role;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setUser, setEmail, setRole, setToken } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
