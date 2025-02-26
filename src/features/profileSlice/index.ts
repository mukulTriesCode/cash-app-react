import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

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

// Create async thunk for registration
export const registerUser = createAsyncThunk(
  "profile/registerUser",
  async (userData: Omit<UserInterface, "id">, { rejectWithValue }) => {
    try {
      const token =
        "6396728f2229b7b0b3da4a298d674aeb81cca9d0c878ee437549598714a8e1d2";
      const response = await axios.post(
        "https://cash-app-backend.vercel.app/api/register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );
      return response.data; // Assuming the API returns the user data with id
    } catch (error: any) {
      return rejectWithValue(error.message || "Registration failed");
    }
  }
);

export const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<UserInterface>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.loading = false;
      state.error = null;
    },
    logoutProfile: (state) => {
      state.id = "";
      state.username = "";
      email: "";
      state.password = "";
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle pending state
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle successful registration
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.id = action.payload.id;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.password = action.payload.password;
      })
      // Handle registration error
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addProfile, logoutProfile } = profileSlice.actions;
export default profileSlice.reducer;
