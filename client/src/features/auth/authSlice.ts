import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  loadToken,
  loadUser,
  removeToken,
  removeUser,
} from "../../utils/storage";

type User = { id: string; name: string; email: string } | null;

type AuthType = {
  token: string | null;
  user: User;
  isInitialized: boolean;
};
const initialState: AuthType = {
  token: loadToken(),
  user: loadUser(),
  isInitialized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<{ token: string; user: User }>) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    clearAuth(state) {
      state.token = null;
      state.user = null;
      removeToken();
      removeUser();
    },

    setInitialzed(state, action: PayloadAction<boolean>) {
      state.isInitialized = action.payload;
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { setAuth, clearAuth, setInitialzed, setUser } = authSlice.actions;
export default authSlice.reducer;
