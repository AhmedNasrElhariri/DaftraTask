export const PokemonInfoGrid = ({
  height,
  weight,
}: {
  height: number;
  weight: number;
}) => (
  <div className="grid md:grid-cols-2 gap-8 mb-8">
    <div className="bg-gray-50 rounded-lg p-4 text-center">
      <p className="text-sm text-gray-600 mb-1">Height</p>
      <p className="text-2xl font-bold text-gray-800">{height / 10} m</p>
    </div>
    <div className="bg-gray-50 rounded-lg p-4 text-center">
      <p className="text-sm text-gray-600 mb-1">Weight</p>
      <p className="text-2xl font-bold text-gray-800">{weight / 10} kg</p>
    </div>
  </div>
);
