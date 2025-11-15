export type PokemonListType = {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    }
  };
  types: {
    slot: number,
    type: {
      name: string;
    }
  }[];
};

export interface PokemonListProps {
  pokemonList: PokemonListType[];
}
