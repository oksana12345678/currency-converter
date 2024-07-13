export interface CurrencyState {
  baseCurrency: string;
  exchangeInfo: unknown;
  isLoading: boolean;
  isError: boolean;
  rates: [string][];
}

export interface FetchBaseCurrencyPayload {
  baseCurrency: string;
}

export interface FetchExchangeCurrencyPayload {
  exchangeInfo: unknown;
}

export interface FetchRatesPayload {
  rates: [string, number][];
}
