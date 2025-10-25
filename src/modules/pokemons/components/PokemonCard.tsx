import type { Pokemon } from "../types";

export const PokemonCard: React.FC<{
  pokemon: Pokemon;
  onClick: () => void;
}> = ({ pokemon, onClick }) => {
  // Get the first two letters (uppercase)
  const initials = pokemon.name.slice(0, 2).toUpperCase();

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center"
    >
      {/* Avatar Circle */}
      <div className="w-32 h-32 flex items-center justify-center  bg-gray-200 text-black text-4xl font-bold">
        {initials}
      </div>

      {/* Name and ID */}
      <h3 className="mt-3 text-lg font-semibold capitalize text-gray-800">
        {pokemon.name}
      </h3>
      <p className="text-sm text-gray-500">
        #{String(pokemon.name || "").padStart(4, "0")}
      </p>
    </div>
  );
};
