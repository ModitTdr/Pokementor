import PokemonCard from "./PokemonCard";
import { PokemonListProps } from "@/types/pokemon";


const PokemonList = ({ pokemonList }: PokemonListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonList
