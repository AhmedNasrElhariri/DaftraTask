import type { PokemonDetails, PokemonListResponse } from "../types";

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async (
  limit: number,
  offset: number
): Promise<PokemonListResponse> => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  if (!response.ok) throw new Error('Failed to fetch Pokémon list');
  return response.json();
};

export const getPokemonDetails = async (
  idOrName: string | number
): Promise<PokemonDetails> => {
  const response = await fetch(`${BASE_URL}/pokemon/${idOrName}`);
  if (!response.ok) throw new Error('Failed to fetch Pokémon details');
  return response.json();
};
