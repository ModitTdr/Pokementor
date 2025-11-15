export const PokemonStats = ({ data }) => {
  return (
    <div className="space-y-6">

      {/* HEIGHT + WEIGHT */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-neutral-900 rounded-lg text-white">
          <h2 className="text-xl font-semibold">Height</h2>
          <p className="text-lg">{data.height / 10} m</p>
        </div>

        <div className="p-4 bg-neutral-900 rounded-lg text-white">
          <h2 className="text-xl font-semibold">Weight</h2>
          <p className="text-lg">{data.weight / 10} kg</p>
        </div>
      </div>

      {/* BASE STATS */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-white">Base Stats</h2>

        <div className="space-y-3">
          {data.stats.map((stat) => (
            <div key={stat.stat.name} className="text-white">
              <div className="flex justify-between">
                <span className="capitalize">{stat.stat.name}</span>
                <span>{stat.base_stat}</span>
              </div>

              <div className="w-full bg-neutral-700 h-2 rounded">
                <div
                  className={`h-full bg-${data.types[0].type.name} rounded`}
                  style={{ width: `${(stat.base_stat / 200) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
