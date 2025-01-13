import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInterface {
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface LogoutInterface {
  logout: () => void;
}

const initialState: UserInterface = {
  id: "",
  username: "",
  email: "",
  password: "",
};

export const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<UserInterface>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logoutProfile: (state) => {
      state.id = "";
      state.username = "";
      state.email = "";
      state.password = "";
    },
  },
});

export const { addProfile, logoutProfile } = profileSlice.actions;

export default profileSlice.reducer;
