import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTypes } from '../../actions/index';
import './FilterType.scss';

const FilterType = ({ FilterByDbApi, handleSelectChange, pokemon_types }) => {
  /* type - setType - LOCAL STATE  */
  const [filterBy, setFilterBy] = useState('');
  const [typePokemon, setTypePokemon] = useState('');

  const handleType_pokemon = (e) => {
    setTypePokemon({
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter_by = (e) => {
    setFilterBy({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='Filter-Type'>
      {/*SELECT WHERE IS LOCATED DB OR API*/}
      <div className='Filter-Type-left'>
        <label>Filter : </label>
        <select
          defaultValue={'default'}
          name='filter_by'
          onChange={(e) => FilterByDbApi(e.target.value)}
        >
          <option key={0} value='default'>
            All
          </option>
          <option key={1} value={1}>
            Db
          </option>
          <option key={2} value={2}>
            Api
          </option>
        </select>
      </div>
      {/*SELECT BY POKEMON TYPE*/}

      <div>
        <label>by pokemon: </label>
        <select
          defaultValue={'default'}
          onChange={(e) => handleSelectChange(e.target.value)}
        >
          <option key={1234} value={'default'}>
            All Pokemons
          </option>
          {pokemon_types?.map((item, i) => {
            return (
              <option key={i} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default FilterType;
