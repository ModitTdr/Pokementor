"use client";
import { useState } from "react";
import { PokemonStats } from "./PokemonStats";
import PokemonEvolution from "./PokemonEvolution";

const Tabs = () => {
  const [activetabindex, setActiveTabIndex] = useState(0);
  const tabList = ["Stats", "Evolution", "Evs/Ivs"];
  const tabContent = () => {
    switch (activetabindex) {
      case 0:
        return <PokemonStats />;
      case 1:
        return <PokemonEvolution />;
      case 2:
        return <div>Evs/Ivs</div>;
    }
  };
  return (
    <div className="space-y-6 sm:space-y-8 lg:space-y-12">
      <nav className="w-full overflow-x-auto">
        <ul className="flex justify-between min-w-max sm:min-w-0 gap-2 sm:gap-0 text-foreground">
          {tabList.map((tab, index) => (
            <li
              key={tab}
              className={`bg-neutral-800 py-2 sm:py-3 px-6 sm:px-8 lg:px-12 text-sm sm:text-base whitespace-nowrap rounded sm:rounded-none cursor-pointer hover:bg-neutral-700 transition-colors ${activetabindex === index ? 'bg-neutral-700 border-b-2 border-white' : ''
                }`}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {tabContent()}
      </div>
    </div>
  )
}

export default Tabs
