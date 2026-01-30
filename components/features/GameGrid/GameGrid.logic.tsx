"use client";

import { useAppSelector } from "@/store";
import { GAME_GRID } from "@/constants";
import { ICONS } from "@/constants/Icons";

import LoadingSpinner from "@/components/sections/LoadingSpinner";
import GameCard from "@/components/sections/GameCard";
import GameGridView from "./GameGrid.view";

export default function GameGrid() {
  const { filteredGames, loading } = useAppSelector((state) => state.games);
  const { showFavoritesOnly, favoriteGameIds } = useAppSelector(
    (state) => state.favorites,
  );

  const games = showFavoritesOnly
    ? filteredGames.filter((g) => favoriteGameIds.includes(g.id))
    : filteredGames;

  return (
    <GameGridView
      LoadingSpinner={LoadingSpinner}
      GameCard={GameCard}
      ICONS={{
        GALAXY: ICONS.GALAXY,
        UFO: ICONS.UFO,
        HEART: ICONS.HEART,
        ROCKET: ICONS.ROCKET,
        STAR: ICONS.STAR,
      }}
      labels={{
        favoritesOnly: GAME_GRID.FAVORITES_ONLY,
        exploreMore: GAME_GRID.EXPLORE_MORE,
      }}
      games={games}
      loading={loading}
      showFavoritesOnly={showFavoritesOnly}
    />
  );
}
