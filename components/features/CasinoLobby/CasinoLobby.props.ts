import type { ComponentType } from "react";
import type { Game } from "@/utils/types";

export default interface CasinoLobbyProps {
  StarField: ComponentType<{ count: number }>;
  Search: ComponentType;
  PopularGamesCarousel: ComponentType<{ games: Game[] }>;
  GameGrid: ComponentType;
  CasinoHeader: ComponentType;
  CasinoFooter: ComponentType;
  ICONS: {
    FIRE: React.ReactNode;
    ROCKET: React.ReactNode;
  };
  popularGames: Game[];
}
