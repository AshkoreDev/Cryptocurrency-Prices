import React from 'react';

const CoinRow = ({ coin, index, currency}) => {

  const { image, name, symbol, current_price, price_change_percentage_24h, total_volume } = coin;

  return (

    <tr>
      <td>{index}</td>
      <td>
        <img src={image} alt={name} width="20" height="20" className="icon-img img-fluid me-4"/>
        <span>{name}</span>
        <span className="ms-4 text-muted text-uppercase">{symbol}</span>
      </td>
      <td className="text-uppercase">
        {current_price}
        <span className="text-uppercase text-muted mx-2">{currency}</span>
      </td>
      <td className={price_change_percentage_24h > 0 ? `text-success` : 'text-danger'}>{`${price_change_percentage_24h.toFixed(1)}%`}</td>
      <td>
        {total_volume} 
        <span className="text-uppercase text-muted mx-2">{currency}</span>
      </td>
    </tr>

  );
};

export default CoinRow;