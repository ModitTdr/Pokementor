import { PokemonStats } from "@/components/PokemonStats";
import { formatName } from "@/lib/formatName";
import { getPokemonData } from "@/lib/PokemonApi";
import Image from "next/image";

const page = async ({ params }: { params: { pokemonName: string } }) => {
  const { pokemonName } = await params;
  const data = await getPokemonData(pokemonName);

  return (
    <div className="flex items-center justify-center min-h-[85vh] container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="relative w-full max-w-[400px]">
            <div className="h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center relative z-10">
              <img
                src={data.sprites.other['official-artwork']?.front_default}
                alt={data.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-0 -left-2 sm:-left-3 w-[280px] sm:w-[320px] md:w-[360px] -z-10 opacity-5">
              <img
                src={`/types/${data.types[0].type.name}.svg`}
                alt=""
              />
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 flex flex-col items-center mt-4">
            <h1 className="text-3xl sm:text-4xl font-semibold text-center">
              {formatName(data.name)}
            </h1>
            <div className="flex gap-2 flex-wrap justify-center">
              {data.types.map((type) => (
                <span
                  key={type.type.name}
                  className={`rounded-full px-4 py-1 text-sm sm:text-md bg-${type.type.name}`}
                >
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full space-y-6 sm:space-y-8 lg:space-y-12">
          <nav className="w-full overflow-x-auto">
            <ul className="flex justify-between min-w-max sm:min-w-0 gap-2 sm:gap-0">
              <li className="bg-neutral-800 py-2 sm:py-3 px-6 sm:px-8 lg:px-12 text-sm sm:text-base whitespace-nowrap rounded sm:rounded-none">
                Stats
              </li>
              <li className="bg-neutral-800 py-2 sm:py-3 px-6 sm:px-8 lg:px-12 text-sm sm:text-base whitespace-nowrap rounded sm:rounded-none">
                Evolution
              </li>
              <li className="bg-neutral-800 py-2 sm:py-3 px-6 sm:px-8 lg:px-12 text-sm sm:text-base whitespace-nowrap rounded sm:rounded-none">
                Evs/Ivs
              </li>
            </ul>
          </nav>

          <div>
            <PokemonStats data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
