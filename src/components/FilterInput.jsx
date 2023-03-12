import React from 'react';

const FilterInput = ({ title, array, action }) => {

  const HandleChange = (e) => action(e.target.value);

  return (

   <select className="rounded mx-2 p-1 bg-dark text-light border-0" title={title} onChange={HandleChange}>
     {
       array.map(item => <option value={item} key={item}>{item}</option>)
     }
   </select>

  );
};

export default FilterInput;