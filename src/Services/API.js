import axios from "axios";

const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=true";

export const getCion = async () => {
  const crypto = await axios.get(BASE_URL);
  return crypto.data;
};

export const getchart = async () => {
  // const CHART = await axios.get(
  //   "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily"
  // );
  const CHART = await axios.get(
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1402677232"
  );
  return CHART.data;
};
export const getchartprices = async () => {
  // const CHART = await axios.get(
  //   "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily"
  // );
  const CHART = await axios.get(
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1402677232"
  );
  return CHART.data.prices;
};
export const getparams = async (params) => {
  const coin = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${params}&sparkline=true`
  );
  return coin.data;
};
