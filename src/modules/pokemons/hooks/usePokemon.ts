import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import type { PokemonDetails, PokemonListResponse } from "../types";
import { getPokemonDetails, getPokemonList } from "../services";

const pokemonKeys = {
  all: ["pokemon"] as const,
  lists: () => [...pokemonKeys.all, "list"] as const,
  list: (limit: number, offset: number) =>
    [...pokemonKeys.lists(), { limit, offset }] as const,
  infiniteList: (limit: number) =>
    [...pokemonKeys.lists(), "infinite", { limit }] as const,
  details: () => [...pokemonKeys.all, "detail"] as const,
  detail: (id: string) => [...pokemonKeys.details(), id] as const,
};

export const usePokemonList = (limit: number, offset: number) => {
  return useQuery<PokemonListResponse>({
    queryKey: pokemonKeys.list(limit, offset),
    queryFn: () => getPokemonList(limit, offset),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const usePokemonInfiniteList = (limit: number) => {
  return useInfiniteQuery<PokemonListResponse>({
    queryKey: pokemonKeys.infiniteList(limit),
    queryFn: ()  =>
      getPokemonList(limit, 0),
    getNextPageParam: (lastPage, allPages) => {
      const nextOffset = allPages.length * limit;
      return nextOffset < lastPage.count ? nextOffset : undefined;
    },
    initialPageParam: 0,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const usePokemonDetails = (id: string) => {
  return useQuery<PokemonDetails>({
    queryKey: pokemonKeys.detail(id),
    queryFn: () => getPokemonDetails(id),
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};
