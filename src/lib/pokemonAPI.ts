import { IPokemon } from "@/app/intefaces/IPokemon";

const POKEMON_API = "https://pokeapi.co/api/v2/";

// Get Pokemon list
export const GetPokemon = async () => {
  const response = await fetch(`${POKEMON_API}/pokemon`);
  const { results, ...data } = await response.json();
  const getAll = results.map(async (pokemon: any) => {
    const response = await fetch(pokemon.url);
    return response.json();
  });

  const pokemonDataArray = await Promise.all(getAll);

  const final = pokemonDataArray.map((pokemon: IPokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      abilities: pokemon.abilities?.map((abi: any) => abi.ability.name),
      base_experience: pokemon.base_experience,
      height: pokemon.height,
      // sprites: pokemon.sprites,
      hp: pokemon.stats?.find((stats) => stats.stat.name === "hp")?.base_stat,
      attack: pokemon.stats?.find((stats) => stats.stat.name === "attack")
        ?.base_stat,
      defense: pokemon.stats?.find((stats) => stats.stat.name === "defense")
        ?.base_stat,
      specialAttack: pokemon.stats?.find(
        (stats) => stats.stat.name === "special-attack"
      )?.base_stat,
      specialDefense: pokemon.stats?.find(
        (stats) => stats.stat.name === "special-defense"
      )?.base_stat,
      speed: pokemon.stats?.find((stats) => stats.stat.name === "speed")
        ?.base_stat,
      accuracy: pokemon.stats?.find((stats) => stats.stat.name === "accuracy")
        ?.base_stat,
      evasion: pokemon.stats?.find((stats) => stats.stat.name === "evasion")
        ?.base_stat,
      types: pokemon.types?.map((type) => type.type.name),
      weight: pokemon.weight,
    };
  });
  return final;
};
