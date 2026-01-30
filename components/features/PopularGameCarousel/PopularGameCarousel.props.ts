import type { ComponentType, ReactNode } from "react";
import type { Game } from "@/utils/types";

export default interface PopularGameCarouselProps {
  CarouselCard: ComponentType<{ game: Game; width: string }>;

  icons: {
    fire: ReactNode;
  };

  labels: {
    title: string;
    subtitle: string;
  };

  games: Game[];
  currentIndex: number;
  maxIndex: number;
  canNavigate: boolean;
  transform: string;
  itemWidth: string;

  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;

  ChevronLeftIcon: ComponentType<{ className?: string }>;
  ChevronRightIcon: ComponentType<{ className?: string }>;
}
