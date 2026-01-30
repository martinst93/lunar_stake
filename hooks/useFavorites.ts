"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

export function useFavorite(gameId: string) {
  const dispatch = useDispatch<AppDispatch>();
  const favoriteIds = useSelector(
    (state: RootState) => state.favorites.favoriteGameIds,
  );

  return {
    isFavorite: favoriteIds.includes(gameId),
    toggle: () =>
      dispatch({ type: "favorites/toggleFavorite", payload: gameId }),
  };
}

export function useFavorites() {
  const { favoriteGameIds, showFavoritesOnly } = useSelector(
    (state: RootState) => state.favorites,
  );
  return { favoriteIds: favoriteGameIds, showFavoritesOnly };
}
