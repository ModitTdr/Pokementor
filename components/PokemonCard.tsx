import { formatName } from "@/lib/formatName";
import { PokemonListType } from "@/types/pokemon";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: PokemonListType;
}
const Card = ({ pokemon }: PokemonCardProps) => {
  return (
    <Link
      href={`pokemon/${pokemon.name}`}
      className="flex flex-col items-center justify-center drop-shadow-2xl border rounded-2xl p-8 hover:bg-card-foreground/5 animation duration-150 ease-in-out w-72 relative"
    >
      <div className="text-7xl absolute z-0 top-4 opacity-10 font-bold">#{pokemon.id.toString().padStart(3, '0')}</div>
      <div className="h-28 flex items-center justify-center z-1">
        <img
          src={pokemon.sprites.other['official-artwork']?.front_default}
          alt={pokemon.name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="space-y-2 flex flex-col items-center z-1">
        <h1 className="text-2xl font-semibold">{formatName(pokemon.name)}</h1>
        <div className="flex gap-2">
          {
            pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className={`rounded-full px-4 text-md bg-${type.type.name}`}>
                {type.type.name}
              </span>
            ))
          }
        </div>
      </div>
    </Link>
  );
};

export default Card;
