const typeColors: Record<string, string> = {
  fire: "from-orange-400 to-red-500",
  water: "from-blue-400 to-blue-600",
  grass: "from-green-400 to-green-600",
  electric: "from-yellow-300 to-yellow-500",
  psychic: "from-pink-400 to-purple-500",
  normal: "from-gray-300 to-gray-400",
  fighting: "from-red-600 to-orange-700",
  flying: "from-indigo-300 to-blue-400",
  poison: "from-purple-400 to-purple-600",
  ground: "from-yellow-600 to-amber-700",
  rock: "from-yellow-700 to-gray-600",
  bug: "from-lime-400 to-green-500",
  ghost: "from-purple-600 to-indigo-700",
  steel: "from-gray-400 to-gray-600",
  dragon: "from-indigo-500 to-purple-600",
  dark: "from-gray-700 to-gray-900",
  fairy: "from-pink-300 to-pink-500",
  ice: "from-cyan-300 to-blue-400",
};

export const PokemonHeader = ({
  name,
  id,
  types,
}: {
  name: string;
  id: number;
  types: { type: { name: string } }[];
}) => {
  const primaryType = types[0].type.name;
  const gradient = typeColors[primaryType] || "from-purple-400 to-pink-500";

  return (
    <div className={`bg-gradient-to-br ${gradient} p-8 text-white text-center`}>
      <h1 className="text-3xl font-bold capitalize mb-2">{name}</h1>
      <p className="text-lg opacity-90">#{String(id).padStart(4, "0")}</p>
    </div>
  );
};
