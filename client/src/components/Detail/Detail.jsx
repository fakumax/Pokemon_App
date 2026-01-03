import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonById } from '../../hooks/usePokemon';
import defaultimg from '../../assets/img/totodile.png';
import Back from '../Back/Back';
import './Detail.scss';

const Detail = () => {
  const { id } = useParams();
  const { data: pokemon, isLoading, isError } = useGetPokemonById(id);

  if (isLoading) {
    return (
      <div className='details_pokemon'>
        <div className='loading-container'>
          <div className='spinner'></div>
          <p>Cargando Pokémon...</p>
        </div>
      </div>
    );
  }

  if (isError || !pokemon) {
    return (
      <div className='details_pokemon'>
        <div className='loading-container'>
          <p>Error al cargar el Pokémon</p>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Back className='link-back' />
      <div className='details_pokemon'>
        <div className='details_left'>
          <img src={pokemon.img || defaultimg} alt={pokemon.name} />
        </div>
        <div className='details_rigth'>
          <div className='details_header'>
            <span className='details_id'>#{pokemon.id}</span>
            <span className='details_name'>{pokemon.name}</span>
          </div>
          <div className='details_body'>
            <span>Height: {pokemon.height || 'N/A'}</span>
            <span>Weight: {pokemon.weight || 'N/A'}</span>
            <span>Life: {pokemon.life || 'N/A'}</span>
            <span>Strength: {pokemon.strength || 'N/A'}</span>
            <span>Defense: {pokemon.defense || 'N/A'}</span>
            <span>Speed: {pokemon.speed || 'N/A'}</span>
            <span className='details_types'>Type: {pokemon.types?.map((v) => v.name).join(' - ') || 'N/A'}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
