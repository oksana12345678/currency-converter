import axios from 'axios';

interface ExchangeQuery {
  from: string;
  to: string;
  amount: number;
}

interface ExchangeInfo {
  rate: number;
}

interface ExchangeResponse {
  query: ExchangeQuery;
  info: ExchangeInfo;
  result: number;
}
interface ExchangeResult extends ExchangeQuery {
  rate: number;
  result: number;
}
const instance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data/',
  headers: { apikey: '77ghNH4c3FGDkTaMQqa9544j9hn1s8eM' },
});

export const exchangeCurrency = async (
  credentials: ExchangeQuery,
): Promise<ExchangeResult> => {
  const {
    data: { query, info, result },
  } = await instance.get<ExchangeResponse>(`/convert`, {
    params: credentials,
  });
  return { ...query, rate: info.rate, result };
};

export const latestRates = async (baseCurrency: string) => {
  const { data } = await instance.get(`/latest?symbols&base=${baseCurrency}`);
  return Object.entries(data.rates);
};
