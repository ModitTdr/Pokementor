import { PokemonProvider } from "@/components/PokemonContext";
import Tabs from "@/components/Tabs";
import { formatName } from "@/lib/formatName";
import { getPokemonData } from "@/lib/PokemonApi";
import { PokemonListType } from "@/types/pokemon";


const page = async ({ params }: { params: { pokemonName: string } }) => {
  const { pokemonName } = await params;
  const data: PokemonListType = await getPokemonData(pokemonName);

  return (
    <div className="flex items-center justify-center min-h-[85vh] container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
        <div className="flex flex-col justify-center items-center w-full">
          {/* image */}
          <div className="relative w-full max-w-[400px]">
            <div className="h-64 sm:h-72 md:h-80 flex items-center justify-center relative z-10">
              <img
                src={data.sprites.other['official-artwork']?.front_default}
                alt={data.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-0 -left-2 sm:-left-3 w-[280px] sm:w-[320px] md:w-[360px] -z-10 opacity-10">
              <img
                src={`/types/${data.types[0].type.name}.svg`}
                alt=""
              />
            </div>
          </div>
          {/* pokemon data */}
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
        <div >
          <PokemonProvider data={data}>
            <Tabs />
          </PokemonProvider>
        </div>
      </div>
    </div>
  );
};

export default page;
