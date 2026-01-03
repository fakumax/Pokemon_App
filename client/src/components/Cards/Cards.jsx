import React from 'react';
import Card from '../Card/Card';
import defaultimg from '../../assets/img/totodile.png';
import './Cards.scss';

const Cards = ({ pokemons }) => {
  //console.log(pokemons.length);
  return (
    <div className = 'cards_result'>
      {pokemons?.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.img || defaultimg}
            types={pokemon.types}
          />
        );
      })}
    </div>
  );
};

export default Cards;
