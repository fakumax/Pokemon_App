import { PokemonCard } from "@/components/PokemonCard/PokemonCard";
import { GetPokemon } from "@/lib/pokemonAPI";

export default async function Home() {
  const listPokemon = await GetPokemon();
  console.log("listPokemon", listPokemon);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PokemonCard listPokemon={listPokemon} />
    </main>
  );
}
