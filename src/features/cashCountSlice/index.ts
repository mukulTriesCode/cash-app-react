import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CashCounterState {
  value: number;
  notes?: string;
}

const initialState: CashCounterState = {
  value: 0,
  notes: "",
};

export const cashCountSlice = createSlice({
  name: "cashCounter",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<{ amount: number; notes?: string }>) => {
      state.value += action.payload.amount;
      state.notes = action.payload.notes || state.notes;
    },
    decrementByAmount: (state, action: PayloadAction<{ amount: number; notes?: string }>) => {
      state.value -= action.payload.amount;
      state.notes = action.payload.notes || state.notes;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount, decrementByAmount } = cashCountSlice.actions;

export default cashCountSlice.reducer;
