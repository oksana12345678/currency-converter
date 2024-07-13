import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchRates,
} from './operations';
import { CurrencyState } from '../helpers/types';

const initialState: CurrencyState = {
  baseCurrency: '',
  exchangeInfo: null,
  isLoading: false,
  isError: false,
  rates: [],
};

const slice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action: PayloadAction<string>) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchBaseCurrency.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.baseCurrency = action.payload;
        },
      )
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        fetchExchangeCurrency.fulfilled,
        (state, action: PayloadAction<unknown>) => {
          state.exchangeInfo = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchExchangeCurrency.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchRates.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRates.fulfilled, (state, action: PayloadAction<string>) => {
        state.rates = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchRates.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { setBaseCurrency } = slice.actions;

export const currencyReducer = slice.reducer;
