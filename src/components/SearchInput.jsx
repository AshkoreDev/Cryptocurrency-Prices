import React from 'react';

const SearchInput = ({ setSearch }) => {
  
  const handleSubmit = (e) => e.preventDefault();

  const handleSearch = (e) => setSearch(e.target.value);

  return (

    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        onChange={handleSearch} 
        placeholder="Search a Coin"
        className="form-control bg-dark text-light border-0 mt-4 text-center text-uppercase"
      />
    </form>

  );
};

export default SearchInput;