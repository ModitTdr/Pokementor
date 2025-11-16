import { getPokemonEvolution } from "@/lib/PokemonApi";
import { usePokemon } from "./PokemonContext";
import { useEffect, useState } from "react";

interface EvolutionData {
  id: number;
  name: string;
}
interface EvolutionChain {
  species: {
    name: string;
    url: string;
  };
  evolves_to: EvolutionChain[];
}

const PokemonEvolution = () => {
  const data = usePokemon();
  const [evolutionData, setEvolutionData] = useState<EvolutionData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchEvolutionData = async () => {
      try {

        const evolution = await getPokemonEvolution(data.name);
        const collectPokemonData = (chain: EvolutionChain): { name: string, url: string }[] => {
          const data = [{ name: chain.species.name, url: chain.species.url }];
          chain.evolves_to.forEach(evo => {
            data.push(...collectPokemonData(evo));
          });
          return data;
        };

        const allPokemonData = collectPokemonData(evolution.chain);

        const extractIdFromUrl = (url: string): number => {
          const match = url.match(/\/(\d+)\/$/);
          return match ? parseInt(match[1], 10) : 0;
        };

        const evolutionObject = allPokemonData.map(({ name, url }) => {
          const id = extractIdFromUrl(url);
          return { id, name };
        });
        setEvolutionData(evolutionObject);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvolutionData();
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (!evolutionData) return <div>No data</div>;
  return (
    <div>
      <p>
        {
          evolutionData.map(({ id, name }) => (
            <>
              <span key={id}>{name}</span>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} width={80} />
            </>
          ))
        }
      </p>
    </div>
  );

}

export default PokemonEvolution
