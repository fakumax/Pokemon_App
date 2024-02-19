const POKEMON_API = "https://pokeapi.co/api/v2";

// Get Pokemon list
const GetPokemon = async () => {
  const response = await fetch(POKEMON_API);
  const data = await response.json();
  console.log("Data------", data);
  return data;
};

export { GetPokemon };
