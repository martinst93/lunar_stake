"use client";

import type { Game } from "@/utils/types";
import { POPULAR_GAME_CAROUSEL } from "@/constants";
import { ChevronLeftIcon, ChevronRightIcon, ICONS } from "@/constants/Icons";
import { useCarousel } from "@/hooks";
import CarouselCard from "@/components/sections/CarouselCard";
import PopularGameCarouselView from "./PopularGameCarousel.view";

interface Props {
  games: Game[];
}

export default function PopularGamesCarousel({ games }: Props) {
  const {
    currentIndex,
    maxIndex,
    next,
    prev,
    goTo,
    canNavigate,
    transform,
    itemWidth,
  } = useCarousel(games.length);

  return (
    <PopularGameCarouselView
      CarouselCard={CarouselCard}
      ChevronLeftIcon={ChevronLeftIcon}
      ChevronRightIcon={ChevronRightIcon}
      icons={{ fire: ICONS.FIRE }}
      labels={{
        title: POPULAR_GAME_CAROUSEL.MOST_POPULAR,
        subtitle: POPULAR_GAME_CAROUSEL.TRENDING_ACROSS_THE_GALAXY,
      }}
      games={games}
      currentIndex={currentIndex}
      maxIndex={maxIndex}
      canNavigate={canNavigate}
      transform={transform}
      itemWidth={itemWidth}
      onPrev={prev}
      onNext={next}
      onGoTo={goTo}
    />
  );
}
