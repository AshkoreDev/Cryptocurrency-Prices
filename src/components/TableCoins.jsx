import React, { useState, useEffect } from 'react';
import CoinRow from './CoinRow.jsx';
import Spinner from './Spinner.jsx';
import { getData } from './../services/getData.jsx';

const TITLES = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

const TableCoins = ({ search, results, currency, page }) => {

  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);

  const filteredCoins = coins.filter(
    (coin) => 
      coin.name.toLowerCase().includes(search.toLowerCase()) || 
      coin.symbol.toLowerCase().includes(search.toLowerCase()));
  
  useEffect(() => {

    setLoading(true);

    getData({ results, currency, page })
      .then((coins) => {

        setCoins(coins);
        setLoading(false);
      });

  }, [setCoins, results, currency, page]);
	
  return (

    <div className="table-responsive">
      <table className="table table-dark mt-2 table-hover">

        <thead>
          <tr>
            { TITLES.map((title) => <td key={title} className="fw-bold">{title}</td>) }
          </tr>
        </thead>

        <tbody>
          { 
            loading 
              ? <Spinner/>
              : filteredCoins.map((coin, index) => <CoinRow coin={coin} key={coin.name} index={index + 1} currency={currency}/>)
          }
        </tbody>

      </table>
    </div>
  
  );
};

export default TableCoins;