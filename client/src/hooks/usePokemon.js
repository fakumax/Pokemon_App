import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { usePokemonStore } from '../store/usePokemonStore';
import {
  POKEMON_LOCAL,
  TYPES_LOCAL,
  SEARCH_POKEMON,
  POKEMON_LOCAL_ID,
} from '../constants';

// Hook para obtener todos los pokémon
export const useGetAllPokemons = () => {
  const setPokemons = usePokemonStore((state) => state.setPokemons);
  
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => {
      const { data } = await axios.get(POKEMON_LOCAL);
      setPokemons(data);
      return data;
    },
  });
};

// Hook para obtener todos los tipos
export const useGetAllTypes = () => {
  const setPokemonTypes = usePokemonStore((state) => state.setPokemonTypes);
  
  return useQuery({
    queryKey: ['types'],
    queryFn: async () => {
      const { data } = await axios.get(TYPES_LOCAL);
      setPokemonTypes(data);
      return data;
    },
  });
};

// Hook para buscar un pokémon por nombre
export const useGetPokemon = (name) => {
  const setPokemonOnly = usePokemonStore((state) => state.setPokemonOnly);
  
  return useQuery({
    queryKey: ['pokemon', name],
    queryFn: async () => {
      const { data } = await axios.get(`${SEARCH_POKEMON}${name}`);
      setPokemonOnly(data);
      return data;
    },
    enabled: !!name,
  });
};

// Hook para obtener pokémon por ID
export const useGetPokemonById = (id) => {
  const setPokemonById = usePokemonStore((state) => state.setPokemonById);
  
  return useQuery({
    queryKey: ['pokemon', id],
    queryFn: async () => {
      const { data } = await axios.get(`${POKEMON_LOCAL_ID}/${id}`);
      setPokemonById(data);
      return data;
    },
    enabled: !!id,
  });
};

// Hook para crear un pokémon
export const usePostPokemon = () => {
  const setPokemonCreate = usePokemonStore((state) => state.setPokemonCreate);
  
  return useMutation({
    mutationFn: async (makePokemon) => {
      const { data } = await axios.post(POKEMON_LOCAL, {
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
      return data;
    },
    onSuccess: (data) => {
      setPokemonCreate(data);
    },
  });
};

// Función directa para buscar pokémon (sin hook)
export const searchPokemon = async (name) => {
  try {
    const { data } = await axios.get(`${SEARCH_POKEMON}${name}`);
    return data;
  } catch (error) {
    throw error;
  }
};
