"use client";
import { createContext, useContext } from "react";
import { PokemonListType } from "@/types/pokemon";

const PokemonContext = createContext<PokemonListType | null>(null);

export const PokemonProvider = ({
  children,
  data
}: {
  children: React.ReactNode;
  data: PokemonListType;
}) => {
  return (
    <PokemonContext.Provider value={data}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemon must be used within PokemonProvider");
  }
  return context;
};
