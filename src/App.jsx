import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from './hooks/useForm.jsx';
import PageButtons from './components/PageButtons.jsx';
import TableCoins from './components/TableCoins.jsx';
import SearchInput from './components/SearchInput.jsx';

export const App = () => {

  const { search, results, currency, updateSearch, updateResults, updateCurrency } = useForm();
  const [page, setPage] = useState(1);

  return (

    <section className="container">
      
      <div className="row">
        <SearchInput updateSearch={updateSearch} updateResults={updateResults} updateCurrency={updateCurrency}/>
        <TableCoins search={search} results={results} currency={currency} page={page}/>
        
      </div>
      <PageButtons setPage={setPage} page={page}/>
    </section>

  );
};

export default App;