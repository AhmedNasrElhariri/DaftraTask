import { PokemonCard } from "./PokemonCard";
import type { Pokemon } from "../types";
import { usePokemonInfiniteList } from "../hooks";
import { SkeletonGrid } from "../../shared/components";
import { LoadMore } from "./LoadMore";
import { useNavigate } from "react-router-dom";
import { PAGE_SIZE } from "../../../utlis/constants";

export const LoadMoreView: React.FC<{}> = ({}) => {
  const navigate = useNavigate();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    usePokemonInfiniteList(PAGE_SIZE);

  const allPokemon = data?.pages.flatMap((page) => page.results) ?? [];
  const totalCount = data?.pages[0]?.count ?? 0;

    const handleViewPokmon = (name: string) => {
    navigate(`/pokmons/${name}`);
  };

  if (isLoading) {
    return <SkeletonGrid />;
  }
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {allPokemon.map((pokemon: Pokemon) => {
          return (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              onClick={() => handleViewPokmon(pokemon.name)}
            />
          );
        })}
      </div>

      {hasNextPage && (
        <LoadMore
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
          totalCount={totalCount}
          shownCount={allPokemon.length}
          label="Pokémon"
        />
      )}
    </div>
  );
};
