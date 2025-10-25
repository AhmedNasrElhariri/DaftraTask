import { type RouteObject } from "react-router-dom";
import { PokemonsList, PokmonDetailsPage } from "@/modules/pokemons/pages";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <PokemonsList/>,
  },
  {
    path: '/pokmons/:name',
    element: <PokmonDetailsPage />,
  },
];
