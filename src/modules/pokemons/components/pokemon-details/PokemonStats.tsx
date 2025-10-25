export const PokemonStats = ({
  stats,
}: {
  stats: { stat: { name: string }; base_stat: number }[];
}) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Base Stats</h3>
    <div className="space-y-3">
      {stats.map(({ stat, base_stat }) => (
        <div key={stat.name}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700 capitalize">
              {stat.name.replace("-", " ")}
            </span>
            <span className="text-sm font-bold text-gray-900">{base_stat}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-black h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((base_stat / 255) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
