import type { ReactNode } from "react";
import type { ComponentType } from "react";
import type { CategoryType } from "@/utils/types";

export type CategoryItem = {
  key: CategoryType;
  icon: ReactNode;
  label: string;
  gradient: string;
};

export default interface SearchProps {
  icons: {
    moon: ReactNode;
    game: ReactNode;
    heart: ReactNode;
  };

  labels: {
    title: string;
    categories: string;
    favorites: string;
    placeholder: string;
  };

  searchTerm: string;
  selectedCategory: CategoryType;
  showFavoritesOnly: boolean;
  favoritesCount: number;

  categories: CategoryItem[];

  onSearchTermChange: (value: string) => void;
  onCategorySelect: (category: CategoryType) => void;
  onToggleFavorites: () => void;

  SearchIcon?: ComponentType<{ className?: string }>;
}
