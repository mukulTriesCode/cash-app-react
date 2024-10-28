import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Entry {
  id: string;
  amount: number;
  date: string;
  notes: string;
  category: string;
}

export interface CashCounterState {
  totalAmount: number;
  entries: Entry[];
  categories?: {
    id: string;
    name: string;
  }[];
}

const initialState: CashCounterState = {
  totalAmount: 0,
  entries: [],
  categories: [],
};

export const cashCountSlice = createSlice({
  name: "cashCounter",
  initialState,
  reducers: {
    cashIn: (state, action: PayloadAction<{ entries: Entry[] }>) => {
      const entry = action.payload.entries[0];
      if (entry) {
        state.totalAmount += entry.amount;
        state.entries.push(entry);
      }
    },
    cashOut: (state, action: PayloadAction<{ entries: Entry[] }>) => {
      const entry = action.payload.entries[0];
      if (entry) {
        state.totalAmount -= entry.amount;
        state.entries.push(entry);
      }
    },
  },
});

export const { cashIn, cashOut } = cashCountSlice.actions;

export default cashCountSlice.reducer;
