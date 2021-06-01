import React from 'react';
import './FilterOrder.scss'


const FilterOrder = ({handleOrderChange}) => {

// const handleFilterOrder = (e) => {
//   setFiltOrd({
//     [e.target.name]: e.target.value,
//   });
// };
  return (
    <div className='Filter-Order'>
      <label>Order by : </label>
      <select defaultValue={'default'} onChange={(e) => handleOrderChange(e.target.value)}>
        <option key={0} value={'default'} >Strength</option> 
        <option key={1} value={1}>A-Z</option>
        <option key={2} value={2}>Z-A</option>
      </select>
    </div>
  );
};

export default FilterOrder;
