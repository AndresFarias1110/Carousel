import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  displayName: string;
  status: string;
  modules: string[];
  rolKey: string;
}

const initialState: AuthState = {
  displayName: "",
  status: "checking",
  modules: [],
  rolKey: "",
};

export const AuthSlice = createSlice({
  name: "authState",
  initialState,
  reducers: {
    onChecking: (state) => {
      state.displayName = "";
      state.status = "checking";
    },

    onLogin: (state, action: PayloadAction<string>) => {
      state.displayName = action.payload;
      state.status = "authenticated";
    },

    setModules: (state, action: PayloadAction<string[]>) => {
      state.modules = action.payload;
    },

    setRolKey: (state, action: PayloadAction<string>) => {
      state.rolKey = action.payload;
    },

    onLogout: (state) => {
      state.displayName = "";
      state.status = "not-authenticated";
    },
  },
});

export const { onChecking, onLogin, setModules, setRolKey, onLogout } =
  AuthSlice.actions;
