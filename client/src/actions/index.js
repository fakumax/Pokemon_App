import axios from 'axios';
import {
  GET_POKEMONS,
  GET_TYPES,
  GET_ONE_POKEMON,
  GET_POKEMON_BY_ID,
  POST_POKEMON,
} from '../action-types/index';
const {
  POKEMON_LOCAL,
  TYPES_LOCAL,
  SEARCH_POKEMON,
  POKEMON_LOCAL_ID,
} = require('../constants');

export const getAllPokemons = () => async (dispatch) => {
  try {
    const {data} = await axios.get(`${POKEMON_LOCAL}`);
    dispatch({
      type: GET_POKEMONS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTypes = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${TYPES_LOCAL}`);
    dispatch({
      type: GET_TYPES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPokemon = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${SEARCH_POKEMON}${name} `);
    dispatch({
      type: GET_ONE_POKEMON,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonId = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${POKEMON_LOCAL_ID}/${id} `);
    dispatch({
      type: GET_POKEMON_BY_ID,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postPokemon = (makePokemon) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${POKEMON_LOCAL}`, {
      name: makePokemon.name,
      life: makePokemon.life,
      strength: makePokemon.strength,
      defense: makePokemon.defense,
      speed: makePokemon.speed,
      height: makePokemon.height,
      weight: makePokemon.weight,
      img: makePokemon.img,
      types: makePokemon.types,
    });

    dispatch({
      type: POST_POKEMON,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
