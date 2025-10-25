import { PokemonCard } from "./PokemonCard";
import type { Pokemon } from "../types";
import { usePokemonList } from "../hooks";
import { useState } from "react";
import { Pagination, SkeletonGrid } from "../../shared/components";
import { useNavigate } from "react-router-dom";
import { PAGE_SIZE } from "../../../utlis/constants";

export const PaginationView: React.FC<{}> = ({}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * PAGE_SIZE;
  const navigate = useNavigate();
  const { data, isLoading } = usePokemonList(PAGE_SIZE, offset);

  const handleViewPokmon = (name: string) => {
    navigate(`/pokmons/${name}`);
  };
  if (isLoading) {
    return <SkeletonGrid />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {data &&
          data.results.map((pokemon: Pokemon) => {
            return (
              <PokemonCard
                key={pokemon.name}
                pokemon={pokemon}
                onClick={() => handleViewPokmon(pokemon.name)}
              />
            );
          })}
      </div>

      {data && (
        <Pagination
          currentPage={currentPage}
          totalItems={data.count}
          itemsPerPage={PAGE_SIZE}
          onPageChange={setCurrentPage}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
