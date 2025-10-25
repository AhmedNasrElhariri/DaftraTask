import React from "react";
import { Loader2 } from "lucide-react";

interface LoadMoreProps {
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  totalCount?: number;
  shownCount?: number;
  label?: string; // e.g., "Pokémon", "Products", etc.
}

export const LoadMore: React.FC<LoadMoreProps> = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  totalCount,
  shownCount,
  label = "Items",
}) => {
  if (!hasNextPage && !isFetchingNextPage) return null;

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      {isFetchingNextPage ? (
        <div className="flex items-center gap-2 text-gray-600">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Loading more {label}...</span>
        </div>
      ) : (
        <button
          onClick={fetchNextPage}
          disabled={!hasNextPage || isFetchingNextPage}
          className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Load More {label}
        </button>
      )}

      {typeof totalCount === "number" && typeof shownCount === "number" && (
        <p className="text-sm text-gray-600">
          Showing {shownCount} of {totalCount.toLocaleString()} {label}
        </p>
      )}
    </div>
  );
};
