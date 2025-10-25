export const PokemonImage = ({ src, name }: { src: string; name: string }) => (
  <div className="flex justify-center mb-8">
    <div className="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden shadow-sm">
      <img src={src} alt={name} className="w-3/4 h-3/4 object-contain" />
    </div>
  </div>
);
