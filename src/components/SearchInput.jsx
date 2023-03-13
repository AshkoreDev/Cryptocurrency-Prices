import React from 'react';
import FilterInput from './FilterInput.jsx';

const resultsArray = [10, 25, 50, 100];
const currencyArray = ['usd', 'eur', 'jpy', 'btc', 'eth', 'bnb'];

const SearchInput = ({ updateSearch, updateResults, updateCurrency }) => {

  const handleSubmit = (e) => e.preventDefault();

  const handleSearch = (e) => updateSearch(e.target.value);

  return (

    <form onSubmit={handleSubmit} className="mt-2 mb-4">
      <input 
        type="text" 
        onChange={handleSearch} 
        placeholder="Search a Coin"
        className="form-control bg-dark text-light border-0 my-4 text-center text-uppercase"
      />
      <div className="text-center">
        <FilterInput title="Results" array={resultsArray} action={updateResults}/>
        <FilterInput title="Currency" array={currencyArray} action={updateCurrency}/>
      </div>
    </form>

  );
};

export default SearchInput;