import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TableCoins from './components/TableCoins.jsx';
import SearchInput from './components/SearchInput.jsx';

export const App = () => {

  const [search, setSearch] = useState('');

  return (

    <section className="container">
      
      <div className="row">
        <SearchInput setSearch={setSearch}/>
        <TableCoins/>
      </div>
    </section>

  );
};

export default App;