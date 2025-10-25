import { Loader2, ChevronLeft } from "lucide-react";

import { useParams } from "react-router-dom";
import { usePokemonDetails } from "../hooks";
import {
  PokemonHeader,
  PokemonImage,
  PokemonInfoGrid,
  PokemonStats,
  PokemonTypes,
} from "../components";

export const PokmonDetailsPage = () => {
  const { name } = useParams<{ name: string }>();

  // safely convert to number, or return null if invalid

  const { data: pokemon, isLoading } = usePokemonDetails(name!); // use non-null assertion only if you're sure route always has an id

  const onBack = () => window.history.back();

  if (!name) {
    return (
      <div className="text-center py-20 text-red-500">Invalid Pokémon Name</div>
    );
  }
  if (isLoading)
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-12 h-12 animate-spin text-gray-400" />
      </div>
    );

  return (
    <div className="py-10 bg-gradient-to-r from-pink-200 to-purple-300 min-h-screen">
      <button
        onClick={onBack}
        className="w-fit rounded-lg flex items-center gap-1 bg-white border border-1 border-gray-200 text-black hover:text-gray-900 mb-6 font-medium ml-[10%] p-2"
      >
        <ChevronLeft className="w-5 h-5" />
        Back to List
      </button>

      {pokemon && (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <PokemonHeader
            name={pokemon.name}
            id={pokemon.id}
            types={pokemon.types}
          />
          <div className="p-8 grid grid-cols-1 md:grid-cols-2">
            <div>
              <PokemonImage
                src={pokemon.sprites.other["official-artwork"].front_default}
                name={pokemon.name}
              />
              <PokemonInfoGrid
                height={pokemon.height}
                weight={pokemon.weight}
              />
              <PokemonTypes types={pokemon.types} />
            </div>
            <div>
              <PokemonStats stats={pokemon.stats} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
