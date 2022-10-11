import { createSlice } from "@reduxjs/toolkit";

type AuthInitState = {
  isLoggedIn: boolean;
};

const initialState: AuthInitState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true");
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
    },
    removeUser: (state) => {
      state.isLoggedIn = false;
      localStorage.clear();
    },
  },
});

export const { login, logout, removeUser } = authSlice.actions;

export default authSlice.reducer;
