import { create } from 'zustand';

export const usePokemonStore = create((set) => ({
  // State
  pokemon: [],
  pokemon_types: {},
  pokemon_only: {},
  pokemon_by_id: {},
  pokemon_create: {},
  error: null,
  loading: false,

  // Actions
  setPokemons: (pokemon) => set({ pokemon }),
  setPokemonTypes: (pokemon_types) => set({ pokemon_types }),
  setPokemonOnly: (pokemon_only) => set({ pokemon_only }),
  setPokemonById: (pokemon_by_id) => set({ pokemon_by_id }),
  setPokemonCreate: (pokemon_create) => set({ pokemon_create }),
  setError: (error) => set({ error }),
  setLoading: (loading) => set({ loading }),
  
  // Reset
  reset: () => set({
    pokemon: [],
    pokemon_types: {},
    pokemon_only: {},
    pokemon_by_id: {},
    pokemon_create: {},
    error: null,
    loading: false,
  }),
}));
