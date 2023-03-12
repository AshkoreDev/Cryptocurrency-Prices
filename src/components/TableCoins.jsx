import React, { useState, useEffect } from 'react';
import CoinRow from './CoinRow.jsx';
import Spinner from './Spinner.jsx';
import { getCoins } from './../services/getCoins.jsx';

const TITLES = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

const TableCoins = ({ search, results, currency}) => {

  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);

  const filteredCoins = coins.filter(
    (coin) => 
      coin.name.toLowerCase().includes(search.toLowerCase()) || 
      coin.symbol.toLowerCase().includes(search.toLowerCase()));
  
  useEffect(() => {

    setLoading(true);

    getCoins({ results, currency })
      .then((coins) => {

        setCoins(coins);
        setLoading(false);
      });

  }, [setCoins, results, currency]);

  console.log({ search, results, currency }); 
	
  return (

    <>
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
              : filteredCoins.map((coin, index) => <CoinRow coin={coin} key={coin.name} index={index + 1}/>)
          }
        </tbody>

      </table>
    </>

  );
};

export default TableCoins;