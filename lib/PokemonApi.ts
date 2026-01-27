import axios from "axios";

const POKEMONAPI_URL = "https://pokeapi.co/api/v2/";

type PokemonListType = {
  name: string;
  url: string;
};
export async function getPokemonList(limit = 20, offset = 0) {
  const response = await axios.get(`${POKEMONAPI_URL}pokemon?limit=${limit}&offset=${offset}`);
  const pokemonDetailsPromises = response.data.results.map(
    async (pokemon: PokemonListType) => {
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

