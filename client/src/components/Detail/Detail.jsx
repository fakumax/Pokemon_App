import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonById } from '../../hooks/usePokemon';
import { usePokemonStore } from '../../store/usePokemonStore';
import defaultimg from '../../assets/img/totodile.png';
import Back from '../Back/Back';
import './Detail.scss';

const Detail = () => {
  const { id } = useParams();
  const { isLoading } = useGetPokemonById(id);
  const pokemon_by_id = usePokemonStore((state) => state.pokemon_by_id);

  if (isLoading) return <div>Loading...</div>;
  
  
  return (
    <>
      <Back className='link-back' />
      <div className='details_pokemon'>
        <div className='details_left'>
          <img src={pokemon_by_id.img || defaultimg} />
        </div>
        <div className='details_rigth'>
          <div className='details_header'>
            <span className='details_id'>#{ pokemon_by_id.id}</span>
            <span className='details_name'>{pokemon_by_id.name}</span>
          </div>
          <div className='details_body'>
            <span>Height: {pokemon_by_id.height}</span>
            <span>Weight: {pokemon_by_id.weight}</span>
            <span>Life: {pokemon_by_id.life}</span>
            <span>Strength: {pokemon_by_id.strength}</span>
            <span>Defense: {pokemon_by_id.defense}</span>
            <span>Speed: {pokemon_by_id.speed}</span>
            <span className='details_types'>Type:
            {pokemon_by_id.types?.map((v) => v.name).join(' - ')}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
