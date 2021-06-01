import React, { useState, useEffect } from 'react';
import FilterType from '../FilterType/FilterType';
import FilterOrder from '../FilterOrder/FilterOrder';
import './Filters.scss';

/* FILTER DB API*/
export const handleFilterDbApi = (orderMe, pokemon) => {
  if (orderMe === 'default') return pokemon;
  if (Number(orderMe) === 1) {
    /*DB*/
    const list = pokemon?.filter((poke) => isNaN(poke.id));
    return list;
    /* API*/
  } else {
    const list = pokemon?.filter((poke) => !isNaN(poke.id));
    return list;
  }
};

/* ORDER BY NAME A-Z Z-A & STRENGHT*/

export const orderByName = (orderMe, pokemon) => {
  const array = [...pokemon];
  if (orderMe === 'default') {
    array.sort((a, b) => {
      let na = a.strength,
        nb = b.strength;
      if (na < nb) {
        return -1;
      }
      if (na > nb) {
        return 1;
      }
      return 0;
    });
    return array;
  }
  

  const arr = [...pokemon];
  if (Number(orderMe) === 1) {
    arr.sort((a, b) => {
      let na = a.name.toLowerCase(),
        nb = b.name.toLowerCase();
      if (na < nb) {
        return -1;
      }
      if (na > nb) {
        return 1;
      }
      return 0;
    });
  } else {
    arr.sort((a, b) => {
      let na = a.name.toLowerCase(),
        nb = b.name.toLowerCase();
      if (na < nb) {
        return 1;
      }
      if (na > nb) {
        return -1;
      }
      return 0;
    });
  }
  return arr;
};

/* FILTER BY TYPE*/
export const filterByType = (pokeSelected, pokemon) => {
  if (pokeSelected === 'default') {
    return pokemon;
  }
  let filter = [];
  for (let i = 0; i < pokemon.length; i++) {
    const element = pokemon[i];
    for (let x = 0; x < element.types.length; x++) {
      const types = element.types[x];
      if (types.name == pokeSelected) {
        filter.push(pokemon[i]);
      }
    }
  }
  return filter;
};

const Filters = ({ pokemon, setPokemonList, pokemon_types }) => {
  const [pokeSelected, setpokeSelected] = useState(null);
  useEffect(() => {
    setPokemonList(pokemon);
  }, [pokemon]);

  const FilterByDbApi = (orderMe) => {
    const filteredByDbApi = handleFilterDbApi(orderMe, pokemon);
    setPokemonList(filteredByDbApi);
  };

  const [orderBy, setOrderBy] = useState([]);
  const handleOrderChange = (orderMe) => {
    const orderedByName = orderByName(orderMe, pokemon);
    setPokemonList(orderedByName);
  };

  const handleSelectChange = (pokeSelected) => {
    setpokeSelected(pokeSelected);
    const filteredByType = filterByType(pokeSelected, pokemon);
    setPokemonList(filteredByType);
  };

  return (
    <div className='filter_show'>
      <FilterType
        FilterByDbApi={FilterByDbApi}
        handleSelectChange={handleSelectChange}
        pokemon_types={pokemon_types}
      />
      <FilterOrder handleOrderChange={handleOrderChange} />
    </div>
  );
};

export default Filters;
