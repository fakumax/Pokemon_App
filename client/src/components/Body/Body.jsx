import React, { useEffect, useState } from 'react';
import { useGetAllPokemons, useGetAllTypes } from '../../hooks/usePokemon';
import Cards from '../Cards/Cards';
import Filters from '../Filters/Filters';
import Arrow from '../Arrow/Arrow';
import './Body.scss';
//----------Icons----------
import { VscFilter } from 'react-icons/vsc';
//-------------------------

const Body = ({ searchResults }) => {
  const { data: pokemons = [], isLoading: loadingPokemons } = useGetAllPokemons();
  const { data: types = [], isLoading: loadingTypes } = useGetAllTypes();

  const [pokemonList, setPokemonList] = useState([]);
  const [filter, setFilters] = useState(false);

  useEffect(() => {
    setPokemonList(pokemons);
  }, [pokemons]);

  //------ PAGINATION-----------

  const [itemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState([]);

  useEffect(() => {
    setTotalPages(Math.ceil(pokemonList.length / itemsPerPage));
    setPage(pokemonList.slice(0, 12));
    setCurrentPage(1);
  }, [pokemonList, itemsPerPage]);

  useEffect(() => {
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    setPage(pokemonList.slice(firstIndex, lastIndex));
  }, [currentPage, pokemonList, itemsPerPage]);

  const handlePageclick = (e) => {
    e.preventDefault();
    if (e.target.name === 'next') {
      if (currentPage + 1 > totalPages) return;
      setCurrentPage(currentPage + 1);
    } else {
      if (currentPage - 1 < 1) return;
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <button 
        className={`filters-button ${filter ? 'active' : ''}`}
        onClick={() => setFilters(!filter)}
      >
        <VscFilter className='icon-filter' />
      </button>
      {/*-- ACTIVE ONLY IF STATE === TRUE --*/}
      {filter && (
        <div className='filters-show'>
          <Filters pokemon={pokemons} setPokemonList={setPokemonList} pokemon_types={types}/>
        </div>
      )}

      {/*-- IF POKEMON SEARCH HAS A RESULT --*/}
      <div className={`${searchResults?.length ? 'Body_search' : 'Body_result'} ${filter ? 'with-filters' : ''}`}>
        {searchResults?.length > 0 ? (
          <Cards pokemons={searchResults} />
        ) : pokemonList.length ? (
           /*--RENDER CARDS AND ARROW IF NOT LOADING  --*/ 
          <div>
            <Cards pokemons={page} />
            <Arrow
              handlePageclick={handlePageclick}
            />
          </div>
        ) : (
          <div className='loading-container'>
            <div className='spinner'></div>
            <p>Cargando Pokémons...</p>
          </div>
        )
        }
      </div>
    </>
  );
};

export default Body;
