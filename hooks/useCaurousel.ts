"use client";

import { useState, useEffect, useCallback } from "react";

export function useCarousel(totalItems: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateView = () => {
      const width = window.innerWidth;
      if (width < 768) setItemsPerView(1);
      else if (width < 1024) setItemsPerView(2);
      else if (width < 1280) setItemsPerView(3);
      else setItemsPerView(4);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(Math.min(index, maxIndex));
    },
    [maxIndex],
  );

  return {
    currentIndex,
    itemsPerView,
    maxIndex,
    next,
    prev,
    goTo,
    canNavigate: totalItems > itemsPerView,
    transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
    itemWidth: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * 1.5) / itemsPerView}rem)`,
  };
}
