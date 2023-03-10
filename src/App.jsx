import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TableCoins from './components/TableCoins.jsx';

export const App = () => {

  return (

    <section className="container">
      
      <div className="row">
        <TableCoins/>
      </div>
    </section>

  );
};

export default App;