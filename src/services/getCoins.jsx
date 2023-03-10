import axios from 'axios';

export function getCoins() {

  const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`;

  
  return axios.get(API)
    .then(res => {
      
      const { data = [] } = res;

      if(Array.isArray(data)) {

        return data.map((coin) => {

          const { image, name, symbol, current_price, price_change_percentage_24h, total_volume } = coin;

          return { image, name, symbol, current_price, price_change_percentage_24h, total_volume };
        })

      }
    });
};