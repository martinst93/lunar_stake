"use client";

import { SEARCH } from "@/constants";
import { ICONS } from "@/constants/Icons";
import { useAppDispatch, useAppSelector } from "@/store";
import { setSearchTerm, setCategory, toggleShowFavorites } from "@/store";
import { CATEGORIES, type CategoryType } from "@/utils/types";
import SearchView from "./Search.view";
import type { CategoryItem } from "./Search.props";

export default function Search() {
  const dispatch = useAppDispatch();

  const { searchTerm, selectedCategory } = useAppSelector(
    (state) => state.games,
  );
  const { showFavoritesOnly, favoriteGameIds } = useAppSelector(
    (state) => state.favorites,
  );

  const categories = Object.entries(CATEGORIES).map(([key, value]) => ({
    key: key as CategoryType,
    icon: value.icon,
    label: value.label,
    gradient: value.gradient,
  })) as CategoryItem[];

  return (
    <SearchView
      icons={{
        moon: ICONS.MOON,
        game: ICONS.GAME,
        heart: ICONS.HEART,
      }}
      labels={{
        title: SEARCH.DISCOVER_YOUR_NEXT_ADVENTURE,
        categories: SEARCH.CATEGORIES,
        favorites: SEARCH.FAVORTES,
        placeholder: "Search games, providers...",
      }}
      searchTerm={searchTerm}
      selectedCategory={selectedCategory}
      showFavoritesOnly={showFavoritesOnly}
      favoritesCount={favoriteGameIds.length}
      categories={categories}
      onSearchTermChange={(value) => dispatch(setSearchTerm(value))}
      onCategorySelect={(category) => dispatch(setCategory(category))}
      onToggleFavorites={() => dispatch(toggleShowFavorites())}
    />
  );
}
