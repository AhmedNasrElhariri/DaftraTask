import { useMemo, useState } from "react";
import { LoadMoreView, PaginationView } from "../components";

export function PokemonsList() {
  const [view, setView] = useState<"pagination" | "loadmore">("pagination");

  const title = useMemo(
    () =>
      view === "pagination"
        ? "Discover and explore Pokémon with page controll"
        : "Discover and explore Pokémon with infinite scroll",
    [view]
  );
  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${
        view === "loadmore"
          ? "from-green-50 to-green-100 "
          : "from-blue-50 to-purple-50"
      } p-4 md:p-8`}
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            ⚡ Pokédex
          </h1>
          <p className="text-gray-600 text-lg mb-6">{title}</p>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => setView("pagination")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
                view === "pagination"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Page Controls
            </button>
            <button
              onClick={() => setView("loadmore")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
                view === "loadmore"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Infinite Scroll
            </button>
          </div>
        </header>

        <main>
          {view === "pagination" ? <PaginationView /> : <LoadMoreView />}
        </main>
      </div>
    </div>
  );
}
