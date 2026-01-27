"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Input } from "./ui/input"
import PokemonList from "./PokemonList";
import { PokemonListProps } from "@/types/pokemon";
import { getPokemonList } from "@/lib/PokemonApi";

const PokemonBody = ({ pokemonList }: PokemonListProps) => {
  const [pokemons, setPokemons] = useState(pokemonList);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const LIMIT = 20;
  const OFFSET = useRef(pokemons.length);
  const ref = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const newPokemons = await getPokemonList(LIMIT, OFFSET.current);
      OFFSET.current += LIMIT;

      if (newPokemons.length === 0) {
        setHasMore(false);
      } else {
        setPokemons((prev) => [...prev, ...newPokemons]);
      }
    } catch {
      console.error("Error Loading Pokemon");
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore]);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    }, {
      threshold: 0.2
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [loadMore]);

  const filteredList = pokemons.filter((pokemon) => {
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

      <div ref={ref} className="h-10 flex items-center justify-center">
        {isLoading && <p className="text-gray-500 animate-pulse">Loading more Pokemon...</p>}
        {!hasMore && <p className="text-gray-500 animate-pulse">End of list...</p>}
      </div>
    </div >
  )
}

export default PokemonBody;
