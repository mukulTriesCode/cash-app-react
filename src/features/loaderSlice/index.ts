// features/loaderSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  pendingRequests: 0,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    incrementPending: (state) => {
      state.pendingRequests++;
      state.loading = true;
    },
    decrementPending: (state) => {
      state.pendingRequests = Math.max(0, state.pendingRequests - 1);
      state.loading = state.pendingRequests > 0;
    },
  },
});

export const { incrementPending, decrementPending } = loaderSlice.actions;
export default loaderSlice.reducer;
