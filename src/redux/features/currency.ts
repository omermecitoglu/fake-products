import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CurrencyState {
  list: string[],
  selected: string,
}

const initialState: CurrencyState = {
  list: ["USD", "EUR", "GBP", "JPY"],
  selected: "USD",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setSelectedCurrency: (state, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelectedCurrency } = currencySlice.actions;

export default currencySlice.reducer;
