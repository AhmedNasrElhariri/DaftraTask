export const PokemonTypes = ({
  types,
}: {
  types: { type: { name: string } }[];
}) => {
  const typeColors: Record<string, string> = {
    fire: "from-orange-400 to-red-500",
    water: "from-blue-400 to-blue-600",
    grass: "from-green-400 to-green-600",
    electric: "from-yellow-300 to-yellow-500",
    psychic: "from-pink-400 to-purple-500",
    normal: "from-gray-300 to-gray-400",
    bug: "from-lime-400 to-green-500",
    dark: "from-gray-700 to-gray-900",
    fairy: "from-pink-300 to-pink-500",
  };

  return (
    <div className="w-full flex justify-center items-center mb-8">
      <div className="flex gap-3 flex-wrap ">
        {types.map(({ type }) => (
          <span
            key={type.name}
            className={`px-6 py-2 rounded-full text-white font-medium capitalize bg-gradient-to-r ${
              typeColors[type.name] || "from-gray-400 to-gray-600"
            }`}
          >
            {type.name}
          </span>
        ))}
      </div>
    </div>
  );
};
