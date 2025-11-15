import PokemonBody from "@/components/PokemonBody";
import { getPokemonList } from "@/lib/PokemonApi";

export default async function Home() {
  // get pokemon list
  const pokemonList = await getPokemonList();

  return (
    <div className="my-8 container mx-auto">
      <PokemonBody pokemonList={pokemonList} />
    </div>
  );
}
