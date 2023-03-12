import axios from 'axios';

export async function getCoins({ results, currency }) {

  const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${results}&page=1`;

  const res = await axios.get(API);
  const { data = [] } = res;

  if (Array.isArray(data)) {

    return data.map((coin) => {

      const { image, name, symbol, current_price, price_change_percentage_24h, total_volume } = coin;

      return { image, name, symbol, current_price, price_change_percentage_24h, total_volume };
    });
  }
};