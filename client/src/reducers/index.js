import {
  GET_POKEMONS,
  GET_TYPES,
  GET_ONE_POKEMON,
  GET_POKEMON_BY_ID,
  POST_POKEMON,
} from '../action-types/index';

const initialState = {
  pokemon: [],
  pokemon_types: {},
  pokemon_only: {},
  pokemon_by_id: {},
  pokemon_create:{},
  error: null,
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    case GET_TYPES:
      return {
        ...state,
        pokemon_types: action.payload,
        loading: false,
      };
    case GET_ONE_POKEMON:
      return {
        ...state,
        pokemon_only: action.payload,
        loading: false,
      };
    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemon_by_id: action.payload,
        loading: false,
      };
      case POST_POKEMON:
        return {
          ...state,
          pokemon_create: action.payload,
          loading: false,
        };

    default:
      return state;
  }
};

export default rootReducer;
