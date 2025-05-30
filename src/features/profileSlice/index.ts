import { createSlice } from "@reduxjs/toolkit";

export interface UserInterface {
  id: string;
  username: string;
  email: string;
  password: string;
  logout?: () => void;
}

// Define additional state for async operations
interface ProfileState extends UserInterface {
  loading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  id: "",
  username: "",
  email: "",
  password: "",
  loading: false,
  error: null,
};

export const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    logoutProfile: (state) => {
      state.id = "";
      state.username = "";
      state.email = "";
      state.password = "";
      state.loading = false;
      state.error = null;
    },
  },
});

export const { logoutProfile } = profileSlice.actions;
export default profileSlice.reducer;
