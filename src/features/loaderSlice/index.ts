import { createSlice } from "@reduxjs/toolkit";

const initialState: { loading: boolean } = {
  loading: false,
};

export const loaderSlice = createSlice({
  name: "loaderSlice",
  initialState,
  reducers: {
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { isLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
