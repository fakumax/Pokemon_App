import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  POKEMON_LOCAL,
  TYPES_LOCAL,
  SEARCH_POKEMON,
  POKEMON_LOCAL_ID,
} from '../constants';

// Hook para obtener todos los pokémon
export const useGetAllPokemons = () => {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => {
      const { data } = await axios.get(POKEMON_LOCAL);
      return data;
    },
  });
};

// Hook para obtener todos los tipos
export const useGetAllTypes = () => {
  return useQuery({
    queryKey: ['types'],
    queryFn: async () => {
      const { data } = await axios.get(TYPES_LOCAL);
      return data;
    },
  });
};

// Hook para buscar un pokémon por nombre
export const useSearchPokemon = (name) => {
  return useQuery({
    queryKey: ['pokemon-search', name],
    queryFn: async () => {
      const { data } = await axios.get(`${SEARCH_POKEMON}${name}`);
      return data;
    },
    enabled: !!name && name.trim().length > 0,
  });
};

// Hook para obtener pokémon por ID
export const useGetPokemonById = (id) => {
  return useQuery({
    queryKey: ['pokemon', id],
    queryFn: async () => {
      const { data } = await axios.get(`${POKEMON_LOCAL_ID}/${id}`);
      return data;
    },
    enabled: !!id,
  });
};

// Hook para crear un pokémon
export const usePostPokemon = () => {
  const queryClient = useQueryClient();
  
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
    onSuccess: () => {
      // Invalidar la caché de pokemons para refrescar la lista
      queryClient.invalidateQueries({ queryKey: ['pokemons'] });
    },
  });
};
