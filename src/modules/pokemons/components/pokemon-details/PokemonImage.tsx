export const PokemonImage = ({ src, name }: { src: string; name: string }) => (
  <div className="flex justify-center mb-8">
    <img src={src} alt={name} className="w-64 h-64 object-contain" />
  </div>
);
