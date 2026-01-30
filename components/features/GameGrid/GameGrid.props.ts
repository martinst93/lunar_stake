import type { ComponentType } from "react";
import type { ReactNode } from "react";
import type { Game } from "@/utils/types";

export default interface GameGridProps {
  LoadingSpinner: ComponentType;
  GameCard: ComponentType<{ game: Game }>;
  ICONS: {
    GALAXY: ReactNode;
    UFO: ReactNode;
    HEART: ReactNode;
    ROCKET: ReactNode;
    STAR: ReactNode;
  };
  labels: {
    favoritesOnly: string;
    exploreMore: string;
  };

  games: Game[];
  loading: boolean;
  showFavoritesOnly: boolean;
}
