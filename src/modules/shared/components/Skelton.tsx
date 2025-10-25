import React from "react";

interface SkeletonGridProps {
  count?: number;
  columns?: string;
}

export const SkeletonGrid: React.FC<SkeletonGridProps> = ({
  count = 20,
  columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
}) => {
  return (
    <div className={`grid ${columns} gap-4 mb-8`}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-lg p-6 shadow-sm animate-pulse"
        >
          <div className="w-32 h-32 bg-gray-200 rounded mx-auto mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
      ))}
    </div>
  );
};
