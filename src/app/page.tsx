import { Button } from "@/components/ui/button";
import { GetPokemon } from "@/lib/pokemonAPI";

export default async function Home() {
  const listPokemon = await GetPokemon();
  console.log(listPokemon);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hola q onda</p>
      <Button>Click me</Button>
    </main>
  );
}
