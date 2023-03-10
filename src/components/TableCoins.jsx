import React, { useState, useEffect } from 'react';
import { getCoins } from './../services/getCoins.jsx';
import CoinRow from './CoinRow.jsx';

const TITLES = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

const TableCoins = () => {

  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);

  // const filteredCoins = coins.filter(
  //   (coin) => 
  //     coin.name.toLowerCase().includes(search.toLowerCase()) || 
  //     coin.symbol.toLowerCase().includes(search.toLowerCase()));

  console.log(coins);
  useEffect(() => {

    setLoading(true);
    getCoins()
      .then((coins) => {
        setCoins(coins);
        setLoading(false);
      });

  }, [setCoins]);

  return (

    <>
      <table className="table table-dark mt-4 table-hover">

        <thead>
          <tr>
            { TITLES.map((title) => <td key={title} className="fw-bold">{title}</td>) }
          </tr>
        </thead>

        <tbody>
          { 
            loading 
              ? <h2>cargando...</h2>
              : coins.map((coin, index) => <CoinRow coin={coin} key={coin.name} index={index + 1}/>)
          }
        </tbody>

      </table>
    </>

  );
};

export default TableCoins;