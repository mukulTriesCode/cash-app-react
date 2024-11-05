import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Entry {
  id: string;
  amount: number;
  date: string;
  notes: string;
  category: string;
  isCashIn: boolean | null;
}

export interface CashCounterState {
  totalAmount: number;
  entries: Entry[];
  categories?: {
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
    addEntry: (
      state,
      action: PayloadAction<{ entries: Entry[]; isCashIn: boolean }>
    ) => {
      const entry = action.payload.entries[0];
      if (entry) {
        state.totalAmount += action.payload.isCashIn
          ? entry.amount
          : -entry.amount;
        state.entries.push(entry);
        if (
          !state.categories?.some(
            (val) => val?.name.toLowerCase() === entry?.category.toLowerCase()
          )
        ) {
          state.categories?.push({ name: entry?.category });
        }
      }
    },
  },
});

export const { addEntry } = cashCountSlice.actions;

export default cashCountSlice.reducer;
