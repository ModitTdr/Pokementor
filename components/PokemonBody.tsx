"use client";

import { useState } from "react";
import { Input } from "./ui/input"
import PokemonList from "./PokemonList";
import { PokemonListProps } from "@/types/pokemon";

const PokemonBody = ({ pokemonList }: PokemonListProps) => {
  const [search, setSearch] = useState("");
  const filteredList = pokemonList.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className=" w-fit mx-auto ">
      <Input
        type="text"
        placeholder="Search Pokemon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <PokemonList pokemonList={filteredList} />
    </div>
  )
}

export default PokemonBody;
