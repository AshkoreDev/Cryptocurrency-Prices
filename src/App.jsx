import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from './hooks/useForm.jsx';
import TableCoins from './components/TableCoins.jsx';
import SearchInput from './components/SearchInput.jsx';

export const App = () => {

  const { search, results, currency, updateSearch, updateResults, updateCurrency } = useForm();

  return (

    <section className="container">
      
      <div className="row">
        <SearchInput updateSearch={updateSearch} updateResults={updateResults} updateCurrency={updateCurrency}/>
        <TableCoins search={search}  results={results} currency={currency}/>
      </div>
    </section>

  );
};

export default App;