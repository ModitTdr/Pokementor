import axios from "axios";

const POKEMONAPI_URL = "https://pokeapi.co/api/v2/";

type PokemonListType = {
  name: string;
  url: string;
};

type PokemonDetailsType = {
  name: string;
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  sprites: { front_default: string; other: { official_artwork: { front_default: string } } };
  stats: { stat: { name: string }; base_stat: number }[];
};

export async function getPokemonList() {
  const response = await axios.get(POKEMONAPI_URL + "pokemon?limit=10");
  const pokemonDetailsPromises = response.data.results.map(async (pokemon: PokemonListType) => {
    const pokemonDetails = await getPokemonData(pokemon.name);
    return pokemonDetails;
  });
  const pokemonList = await Promise.all(pokemonDetailsPromises);
  return pokemonList;
}

export async function getPokemonData(name: string) {
  const response = await axios.get(POKEMONAPI_URL + `pokemon/${name}`);
  return response.data;
}

export async function getPokemonEvolution(name: string) {
  const response = await axios.get(POKEMONAPI_URL + `pokemon-species/${name}`);
  const evolutionUrl = response.data.evolution_chain.url;
  const evolutionResponse = await axios.get(evolutionUrl);
  return evolutionResponse.data;
}

